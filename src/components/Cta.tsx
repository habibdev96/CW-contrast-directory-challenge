import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import showcase from '../../public/assets/hero-image.png';
import { SectionHeading } from './styledElements/Headings.styled';
import Paragraph from './styledElements/Paragraphs.styled';
import { SecondaryInput } from './styledElements/Inputs.styled';
import { SecondaryButton } from './styledElements/Buttons.styled';
import { maxWidthLg, twoCol, flexAlign } from '../abstracts/Mixins';
import { media } from '../abstracts/Responsive';

const StyledSection = styled.section`
  margin: 0 2rem;

  ${media.md} {
    margin: 0;
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${twoCol}
  padding: 2rem 5rem;
  background-color: var(--purple);
  border-radius: var(--mainRadius);
  overflow-x: hidden;

  ${media.md} {
    padding: 5rem 2rem 2rem 2rem;
    border-radius: 0;
  }

  .form {
    ${flexAlign}
    gap: 1rem;
    position: relative;

    ${media.md} {
      flex-direction: column;
      margin-top: 2rem;
    }
  }

  .message {
    position: absolute;
    width: 100%;
    top: -40%;
    left: 32%;
    font-size: 1.3rem;
    color: var(--red);

    ${media.md} {
      top: -20%;
      left: 60%;
    }
  }
`;

const Cta = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmitCta = (e: any): void => e.preventDefault();

  const emailValidation = {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  };

  return (
    <StyledSection>
      <Container>
        <div className='info'>
          <SectionHeading>
            Receive design resources every week. Straight to your inbox.
          </SectionHeading>
          <Paragraph dark={false}>
            Discover dozens of design resources each week from educational
            material to illustrations
          </Paragraph>
          <form
            className={`form ${errors?.email && 'error'}`}
            onSubmit={handleSubmit(onSubmitCta)}
          >
            <SecondaryInput
              type='text'
              placeholder='john@example.com'
              autoComplete='off'
              {...register('email', emailValidation)}
            />
            {errors?.email && (
              <small className='message'>{errors.email.message}</small>
            )}
            <SecondaryButton>Subscribe</SecondaryButton>
          </form>
          <Paragraph dark={false}>*No spam, unsubscribe anytime</Paragraph>
        </div>
        <div className='showcase'>
          <Image src={showcase} alt='' />
        </div>
      </Container>
    </StyledSection>
  );
};

export default Cta;
