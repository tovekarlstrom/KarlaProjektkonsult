import { createClient } from 'contentful';
import Card from '../components/card/Card';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import ContactUs from '../components/contactUs/ContactUs';
import Head from 'next/head';

export async function getServerSideProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const response = await client.getEntries({
    content_type: 'case',
    order: ['sys.createdAt'],
  });

  return {
    props: {
      cases: response.items,
    },
  };
}

export default function index({ cases }: { cases: any[] }) {
  return (
    <div>
      <Head>
        <title>Karla Projektkonsult</title>
        <meta
          name="description"
          content="Karla konsult driver ditt projekt från start till klart. Teoretisk spetskompetens och den praktiska bredden. Vi har projektledare och utveklare för både stora och små projekt."
        />
      </Head>

      <Container>
        <BackgroundDiv>
          <Image
            src="/black.jpg"
            alt="black-building"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </BackgroundDiv>

        <LogoContainer>
          <Image
            src="/karla-logo.png"
            alt="logo"
            fill
            sizes="(min-width: 768px) 306px, 138px"
            style={{ objectFit: 'contain' }}
          />
        </LogoContainer>

        <IntroductionSection>
          <h1>DIN PROJEKTKONSULT</h1>
          <p>
            Karla konsult driver ditt projekt från start till klart. Teoretisk
            spetskompetens och den praktiska bredden. Vi har projektledare och
            ingenjörer för både stora och små projekt.
          </p>
        </IntroductionSection>
        <ContactUs />
      </Container>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '100px',
          backgroundColor: '#121212',
          paddingBottom: '50px',
        }}
      >
        <h2 style={{ color: 'white', padding: '30px' }}>Case Studies</h2>
        {cases.map((caseItem: any, index) => (
          <Card key={index} props={{ ...caseItem.fields, index }} />
        ))}
      </div>
    </div>
  );
}
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  height: 700px;
  width: 100vw;
  @media (min-width: 768px) {
    height: 832px;
  }
`;

const BackgroundDiv = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const IntroductionSection = styled.section`
  color: white;
  text-align: center;
  margin-bottom: 50px;
  h1 {
    font-weight: 600;
    font-size: 2rem;
    padding-bottom: 50px;
  }
  p {
    font-size: 20px;
    width: 60%;
    margin: 0 auto;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  width: 138px;
  height: 195px;
  @media (min-width: 768px) {
    width: 306px;
    height: 432px;
  }
`;
