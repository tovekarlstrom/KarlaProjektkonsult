import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

export default function ContactUs() {
  const animationRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.style.animation = "none";
    }
    const interval = setInterval(() => {
      console.log("animationRef.current", animationRef.current);
      if (animationRef.current) {
        animationRef.current.style.animation = "bounce 2s ease";
        setTimeout(() => {
          if (animationRef.current) {
            animationRef.current.style.animation = "none";
          }
        }, 2000);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Container>
      {/* <BackgroundContainer> */}
      <Text ref={animationRef}>
        <ContactLink href="mailto:info@karlakonsult.se">
          KONTAKTA OSS
        </ContactLink>
      </Text>
      {/* </BackgroundContainer> */}
    </Container>
  );
}

// const BackgroundContainer = styled.div`
//   position: relative;
//   height: 168px;
//   width: 168px;
//   @media (min-width: 768px) {
//     height: 228px;
//     width: 228px;
//   }
// `;

const Container = styled.div`
  position: fixed;
  top: -20px;
  left: -18px;
  z-index: 10;
  width: 218px;
  height: 218px;

  @media (min-width: 768px) {
    top: -40px;
    left: -40px;
  }
`;

const Text = styled.div`
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  width: 118px;
  height: 118px;
  z-index: 10;
  border-radius: 0 60px 60px 60px;
  background-color: #242424;

  position: absolute;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  animation-name: bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  /* position: absolute;
  bottom: 100px;
  right: 50px;
  background-color: #242424;
  height: 100%;
  width: 100%;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  animation-name: bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: ease; */

  @media (min-width: 768px) {
    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
    width: 208px;
    height: 208px;
    z-index: 10;
    border-radius: 0 150px 150px 150px;
  }
`;

const ContactLink = styled.a`
  font-size: 12px;
  color: white;
  font-weight: 600;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding-right: 7px;
  padding-top: 4px;
  line-height: 118px;
  border-radius: 40px;
  text-align: end;

  @media (min-width: 768px) {
    font-size: 18px;
    padding-right: 25px;
    padding-top: 7px;
    line-height: 208px;
  }
`;
