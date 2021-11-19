import type { AppProps } from 'next/app';
import { GlobalStateProvider } from '../context';
import Globals from '../abstracts/Globals';
import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';
import Tag from '../components/Tag';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStateProvider>
        <Globals />
        <Navbar />
        <MobileMenu />
        <Component {...pageProps} />
        <Footer />
        <Tag />
      </GlobalStateProvider>
    </>
  );
};

export default App;
