import Image from "next/image";
import React from "react";
import { useEffect } from "react";
export interface CardProps {
  props: {
    slug: string;
    heading: string;
    caseImage: {
      fields: {
        description: string;
        file: {
          url: string;
        };
      };
    };
    description: string;
    index: any;
  };
}
export default function Card({ props }: CardProps) {
  const cardStyle: React.CSSProperties =
    props.index % 2 === 0
      ? { flexDirection: "row" }
      : { flexDirection: "row-reverse", justifyContent: "space-between" };

  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : undefined
  );

  const [imageSize, setImageSize] = React.useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof windowWidth !== "undefined") {
      console.log("windowWidth", windowWidth < 376);
    }
    if (windowWidth) {
      if (windowWidth < 450) {
        setImageSize({ width: 180, height: 240 });
      } else if (windowWidth < 500) {
        setImageSize({ width: 240, height: 240 });
      } else if (windowWidth < 682) {
        setImageSize({ width: 300, height: 220 });
      } else {
        setImageSize({ width: 379, height: 220 });
      }
    }
    // Add event listener for window resize
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <div
      style={{
        backgroundColor: "#F6BC62",
        maxWidth: "682px",

        minHeight: "220px",
        display: "flex",
        alignItems: "center",
        margin: "20px",
        color: "#121212",

        ...cardStyle,
      }}
    >
      <Image
        src={`https:${props.caseImage.fields.file.url}`}
        alt={props.caseImage.fields.description}
        width={imageSize.width}
        height={imageSize.height}
        sizes="100%"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      <div style={{ maxWidth: "50%", padding: "10px", height: "100%" }}>
        <h3 style={{ fontSize: "16px" }}>{props.heading}</h3>
        <p style={{ width: "100%", paddingTop: "10px", fontSize: "0.8rem" }}>
          {props.description}
        </p>
      </div>
    </div>
  );
}
