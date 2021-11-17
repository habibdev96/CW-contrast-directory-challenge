import styled from 'styled-components';
import Image from 'next/image';
import showcase from '../../public/assets/hero-image.png';
import { SectionHeading } from './styledElements/Headings.styled';
import Paragraph from './styledElements/Paragraphs.styled';
import { SecondaryInput } from './styledElements/Inputs.styled';
import { SecondaryButton } from './styledElements/Buttons.styled';
import { maxWidthLg, twoCol, flexAlign } from '../abstracts/Mixins';

const StyledSection = styled.section`
  margin: 0 2rem;
`;

const Container = styled.div`
  ${maxWidthLg}
  ${twoCol}
  padding: 0 5rem;
  background-color: var(--purple);
  border-radius: var(--mainRadius);

  .form {
    ${flexAlign}
    gap: 1rem;
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
