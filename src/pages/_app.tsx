import type { AppProps } from 'next/app';
import { GlobalStateProvider } from '../context';
import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStateProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalStateProvider>
    </>
  );
};

export default App;
