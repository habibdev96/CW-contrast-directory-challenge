import Globals from '../abstracts/Globals';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Modal from './Modal';
import Footer from './Footer';
import Tag from './Tag';
import { useGlobalState } from '../context';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { isModalOpen } = useGlobalState();
  console.log(isModalOpen);

  return (
    <>
      <Globals />
      <Navbar />
      <MobileMenu />
      {isModalOpen && <Modal />}
      {children}
      <Footer />
      <Tag />
    </>
  );
};

export default Layout;
