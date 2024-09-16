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
      <BackgroundDiv>
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.2)',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '120px',
          }}
        >
          <LogoContainer>
            <Image
              src="/karla-logo.png"
              alt="logo"
              fill
              sizes="100%"
              priority
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
        </div>
      </BackgroundDiv>
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

const BackgroundDiv = styled.div`
  background-image: url('/black.jpg');
  background-size: cover;
  background-position: center 20%;
  background-repeat: no-repeat;
  background-attachment: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* padding-top: 120px; */
  height: 800px;
  width: 100%;
  @media (min-width: 768px) {
    height: 932px;
    background-attachment: fixed;
  }
`;

const IntroductionSection = styled.section`
  color: white;
  text-align: center;
  h1 {
    font-weight: 600;
    font-size: 32px;
    padding-bottom: 110px;
  }
  p {
    font-size: 20px;
    width: 60%;
    margin: 0 auto;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
