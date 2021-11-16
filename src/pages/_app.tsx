import type { AppProps } from 'next/app';
import Globals from '../abstracts/Globals';
import Navbar from '../components/Navbar';
import Resources from '../components/Resources';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Globals />
      <Navbar />
      <Component {...pageProps} />
      <Resources />
    </>
  );
};

export default App;
