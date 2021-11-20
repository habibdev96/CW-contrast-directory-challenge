import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import StyledOverlay from './styledElements/Overlay.styled';
import { ModalHeading } from './styledElements/Headings.styled';
import { ModalInput, ModalTextArea } from './styledElements/Inputs.styled';
import { FaTimes } from 'react-icons/fa';
import { flexBetween, textStyles } from '../abstracts/Mixins';
import { SubmitButton } from './styledElements/Buttons.styled';
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
    position: relative;
  }

  label {
    ${textStyles}
    font-size: 1.6rem;
    color: var(--black);

    span {
      color: var(--red);
    }
  }

  .message {
    position: absolute;
    top: 65%;
    left: 80%;
    width: 100%;
    font-size: 1.3rem;
    color: var(--red);

    &.textarea {
      top: 85%;
      left: 73%;

      ${media.md} {
        left: 60%;
      }

      ${media.sm} {
        left: 50%;
      }
    }

    ${media.md} {
      left: 70%;
    }

    ${media.sm} {
      left: 65%;
    }
  }
`;

const Modal = (): JSX.Element => {
  const { handleModalClose } = useGlobalState();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmitModal = (e: any): void => e.preventDefault();

  return (
    <StyledOverlay mobile={false}>
      <StyledForm onSubmit={handleSubmit(onSubmitModal)}>
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
          <ModalInput
            type='text'
            placeholder='UI8...'
            autoComplete='off'
            {...register('name', { required: true })}
          />
          {errors.name && <small className='message'>Name is required.</small>}
        </div>
        {/* single input */}
        <div className='form-control'>
          <label htmlFor='description'>
            Resource Description <span>*</span>
          </label>
          <ModalTextArea
            placeholder='100% curated digital marketplace...'
            {...register('description', { required: true })}
          />
          {errors.description && (
            <small className='message textarea'>Description is required.</small>
          )}
        </div>
        {/* single input */}
        <div className='form-control'>
          <label htmlFor='link'>
            Resource Link <span>*</span>
          </label>
          <ModalInput
            type='text'
            placeholder='https://ui8.net...'
            {...register('link', { required: true })}
          />
          {errors.link && <small className='message'>Link is required.</small>}
        </div>
        {/* single input */}
        <div className='form-control'>
          <label htmlFor='icon'>
            Resource Icon Link <span>*</span>
          </label>
          <ModalInput
            type='text'
            placeholder='https://scontent.fal...'
            {...register('icon', { required: true })}
          />
          {errors.icon && <small className='message'>Icon is required.</small>}
        </div>
        <SubmitButton type='submit' value='Submit Resources' />
      </StyledForm>
    </StyledOverlay>
  );
};

export default Modal;
