import styled from 'styled-components';
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

  ${media.md} {
    padding: 5rem 2rem 2rem 2rem;
    border-radius: 0;
  }

  .form {
    ${flexAlign}
    gap: 1rem;

    ${media.md} {
      flex-direction: column;
    }
  }
`;

const Cta = (): JSX.Element => {
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
          <form className='form'>
            <SecondaryInput type='text' placeholder='john@example.com' />
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
