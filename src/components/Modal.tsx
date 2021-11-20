import styled from 'styled-components';
import StyledOverlay from './styledElements/Overlay.styled';
import { ModalHeading } from './styledElements/Headings.styled';
import { ModalInput, ModalTextArea } from './styledElements/Inputs.styled';
import { FaTimes } from 'react-icons/fa';
import { flexBetween, textStyles } from '../abstracts/Mixins';
import { PrimaryButton } from './styledElements/Buttons.styled';
import { media } from '../abstracts/Responsive';
import { useGlobalState } from '../context';

const StyledForm = styled.form`
  position: fixed;
  z-index: 6000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 90%;
  margin: 0 auto;
  padding: 2rem;
  border-radius: var(--mainRadius);
  background-color: var(--white);

  ${media.md} {
    width: 400px;
  }

  ${media.sm} {
    width: 95%;
  }

  .header {
    ${flexBetween}
  }

  .toggler {
    background: transparent;
    outline: 0;
    border: 0;
  }

  .icon {
    color: var(--black);
    font-size: var(--sm);
  }

  .form-control {
    margin: 2rem 0;
  }

  label {
    ${textStyles}
    font-size: 1.6rem;
    color: var(--black);

    span {
      color: var(--red);
    }
  }
`;

const Modal = (): JSX.Element => {
  const { handleModalClose } = useGlobalState();

  return (
    <StyledOverlay mobile={false}>
      <StyledForm>
        <div className='header'>
          <ModalHeading>Submit Resources</ModalHeading>
          <button onClick={handleModalClose} className='toggler'>
            <FaTimes className='icon' />
          </button>
        </div>
        {/* single input */}
        <div className='form-control'>
          <label htmlFor='name'>
            Resource name <span>*</span>
          </label>
          <ModalInput type='text' placeholder='UI8...' name='name' />
        </div>
        {/* single input */}
        <div className='form-control'>
          <label htmlFor='name'>
            Resource Description <span>*</span>
          </label>
          <ModalTextArea placeholder='100% curated digital marketplace...' />
        </div>
        {/* single input */}
        <div className='form-control'>
          <label htmlFor='link'>
            Resource Link <span>*</span>
          </label>
          <ModalInput
            type='text'
            placeholder='https://ui8.net...'
            name='link'
          />
        </div>
        {/* single input */}
        <div className='form-control'>
          <label htmlFor='icon'>
            Resource Icon Link <span>*</span>
          </label>
          <ModalInput
            type='text'
            placeholder='https://scontent.faly2-2.fna.fbcdn.net/v/t1.6435-9/4642...'
            name='icon'
          />
        </div>
        <PrimaryButton type='submit' onClick={(e) => e.preventDefault()}>
          Submit Resource
        </PrimaryButton>
      </StyledForm>
    </StyledOverlay>
  );
};

export default Modal;
