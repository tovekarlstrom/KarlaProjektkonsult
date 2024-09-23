import { Inter } from 'next/font/google';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>{children}</main>

      <Footer>
        <LogoContainer>
          <Image
            src="/karla-logo-no-text.png"
            alt="logo"
            width={290}
            height={333}
            style={{ objectFit: 'contain' }}
          />
        </LogoContainer>
        <Container>
          <GetInTouchContainer>
            <p>Letar ni efter kunsulter till era projekt?</p>
            <p>Hör av er till oss!</p>
          </GetInTouchContainer>
          <MailContainer>
            <h4>E-mail</h4>
            <Link
              style={{ cursor: 'pointer' }}
              href="mailto:info@karlakonsult.se"
            >
              info@karlakonsult.se
            </Link>
          </MailContainer>
          <InfoContainer>
            <p>Karla Projektkonsult AB</p>
          </InfoContainer>
        </Container>
      </Footer>
    </>
  );
}

const Footer = styled.footer`
  background-color: #242424;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding-top: 100px;
  overflow: hidden;
  z-index: 0;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
  /* box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);  */
`;

const LogoContainer = styled.div`
  @media (min-width: 768px) {
    padding-left: 20px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 660px;
`;
const MailContainer = styled.div`
  padding: 40px 0 30px 10px;
  :first-child {
    color: #afafaf;
    font-weight: 400;
    padding-bottom: 23px;
  }
`;

const InfoContainer = styled.div`
  text-align: right;
  padding-right: 10px;
  padding-bottom: 20px;
`;

const GetInTouchContainer = styled.div`
  font-size: 3rem;
  font-weight: 500;
  padding-left: 10px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
