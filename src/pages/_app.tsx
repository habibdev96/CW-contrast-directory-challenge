import type { AppProps } from 'next/app';
import Globals from '../abstracts/Globals';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Globals />
      <Component {...pageProps} />;
    </>
  );
};

export default App;
