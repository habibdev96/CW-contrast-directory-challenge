import type { AppProps } from 'next/app';
import Globals from '../abstracts/Globals';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Globals />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
