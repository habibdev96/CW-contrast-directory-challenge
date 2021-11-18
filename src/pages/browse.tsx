import type { NextPage } from 'next';
import Head from 'next/head';
import Resources from '../components/Resources';

const Browse: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contrast Directory | Browse</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Resources />
      </main>
    </div>
  );
};

export default Browse;
