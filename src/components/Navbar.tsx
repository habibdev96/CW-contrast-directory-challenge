import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/logos/contrast-logo.svg';
import { AiOutlineSearch } from 'react-icons/ai';
import { maxWidthLg, flexBetween, flexAlign } from '../abstracts/Mixins';
import { NavbarLink } from './styledElements/Link.styled';
import { PrimaryButton } from './styledElements/Buttons.styled';
import { PrimaryInput } from './styledElements/Inputs.styled';

const Container = styled.div`
  ${maxWidthLg}
  ${flexBetween}
  padding: 3rem 2rem;

  .left {
    ${flexAlign}
  }

  .logo {
    cursor: pointer;
  }

  .right {
    ${flexAlign}
    gap: 2rem;
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
  return (
    <nav>
      <Container>
        <div className='left'>
          <Link href='/' passHref>
            <div className='logo'>
              <Image src={logo} alt='contrast logo' />
            </div>
          </Link>
          <Link href='/browse' passHref>
            <NavbarLink>Browse</NavbarLink>
          </Link>
        </div>
        <div className='right'>
          <div className='input'>
            <PrimaryInput placeholder='Search Resources' type='text' />
            <AiOutlineSearch className='icon' />
          </div>
          <PrimaryButton>Submit Resources</PrimaryButton>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
