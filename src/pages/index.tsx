import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';
import Resources from '../components/Resources';
import Cta from '../components/Cta';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contrast Directory</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <main>
        <Resources />
        <Cta />
      </main>
    </div>
  );
};

export default Home;
