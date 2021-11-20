import styled from 'styled-components';
import { NavbarLink } from './styledElements/Link.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { PrimaryInput } from './styledElements/Inputs.styled';
import { PrimaryButton } from './styledElements/Buttons.styled';
import StyledOverlay from './styledElements/Overlay.styled';
import { useGlobalState } from '../context';

const StyledMobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: auto;
  z-index: 2000;
  background-color: var(--white);

  @media (min-width: 768px) {
    display: none;
  }

  .menu-content {
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 50vh;
    padding: 2rem;
    margin-top: 5rem;
  }

  .menu-links {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4rem;
    text-align: center;
    padding-bottom: 2rem;
    margin-bottom: 5rem;
    border-bottom: 0.1rem solid var(--lighterGrey);
  }

  .form {
    width: 100%;
  }

  .input {
    position: relative;
    width: 100%;
    margin-bottom: 2rem;
  }

  .icon {
    position: absolute;
    top: 28%;
    left: 3%;
    font-size: var(--sm);
    color: var(--darkGrey);
  }
`;

const MobileMenu = (): JSX.Element | null => {
  const { isMobileMenuOpen, handleMobileMenuClose, handleModalOpen } =
    useGlobalState();

  const handleButtonClick = (): void => {
    handleMobileMenuClose();
    handleModalOpen();
  };

  if (isMobileMenuOpen) {
    return (
      <StyledOverlay mobile={true}>
        <StyledMobileMenu>
          <div className='menu-content'>
            <ul className='menu-links'>
              <NavbarLink href='/browse' onClick={handleMobileMenuClose}>
                Browse
              </NavbarLink>
            </ul>
            <form className='form'>
              <div className='input'>
                <PrimaryInput placeholder='Search Resources' type='text' />
                <AiOutlineSearch className='icon' />
              </div>
              <PrimaryButton className='btn' onClick={handleButtonClick}>
                Submit Resources
              </PrimaryButton>
            </form>
          </div>
        </StyledMobileMenu>
      </StyledOverlay>
    );
  } else {
    return null;
  }
};

export default MobileMenu;
