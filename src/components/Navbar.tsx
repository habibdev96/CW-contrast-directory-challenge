import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/logos/contrast-logo.svg';
import { AiOutlineSearch } from 'react-icons/ai';
import { maxWidthLg, flexBetween, flexAlign } from '../abstracts/Mixins';
import { NavbarLink } from './styledElements/Link.styled';
import { PrimaryButton } from './styledElements/Buttons.styled';
import { PrimaryInput } from './styledElements/Inputs.styled';
import MobileMenuToggler from './MobileMenuToggler';
import { media } from '../abstracts/Responsive';
import { useGlobalState } from '../context';

const StyledNav = styled.nav`
  position: fixed;
  z-index: 3000;
  width: 100%;
  background-color: var(--white);
`;

const Container = styled.div`
  ${maxWidthLg}
  ${flexBetween}
  padding: 2rem;

  ${media.md} {
    .desktop-link {
      display: none;
    }
  }

  .left {
    ${flexAlign}
  }

  .logo {
    cursor: pointer;
  }

  .right {
    ${flexAlign}
    gap: 2rem;

    ${media.md} {
      display: none;
    }
  }

  .input {
    position: relative;
    width: 30rem;
  }

  .icon {
    position: absolute;
    top: 28%;
    left: 3%;
    font-size: var(--sm);
    color: var(--darkGrey);
  }
`;

const Navbar = (): JSX.Element => {
  const { handleMobileMenuClose } = useGlobalState();

  return (
    <StyledNav>
      <Container>
        <div className='left'>
          <Link href='/' passHref>
            <div className='logo' onClick={handleMobileMenuClose}>
              <Image src={logo} alt='contrast logo' layout='fixed' />
            </div>
          </Link>
          <Link href='/browse' passHref>
            <NavbarLink className='desktop-link'>Browse</NavbarLink>
          </Link>
        </div>
        <div className='right'>
          <div className='input'>
            <PrimaryInput placeholder='Search Resources' type='text' />
            <AiOutlineSearch className='icon' />
          </div>
          <PrimaryButton className='btn'>Submit Resources</PrimaryButton>
        </div>
        <MobileMenuToggler />
      </Container>
    </StyledNav>
  );
};

export default Navbar;
