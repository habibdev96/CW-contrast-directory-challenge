import type { AppProps } from 'next/app';
import Globals from '../abstracts/Globals';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Tag from '../components/Tag';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Globals />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Tag />
    </>
  );
};

export default App;
