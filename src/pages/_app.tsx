import type { AppProps } from 'next/app';
import Globals from '../abstracts/Globals';
import Navbar from '../components/Navbar';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Globals />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
