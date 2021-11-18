import type { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import Resources from '../components/Resources';

const StyledMain = styled.main`
  padding-top: 15rem;
`;

const Browse: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contrast Directory | Browse</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StyledMain>
        <Resources />
      </StyledMain>
    </div>
  );
};

export default Browse;
