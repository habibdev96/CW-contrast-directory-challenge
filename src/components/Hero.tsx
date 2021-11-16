import styled from 'styled-components';
import Image from 'next/image';
import showcase from '../../public/assets/hero-image.png';
import { MainHeading } from './styledElements/Headings.styled';
import Paragraph from './styledElements/Paragraphs.styled';
import { PrimaryButton } from './styledElements/Buttons.styled';
import {
  maxWidthLg,
  sectionSpacingMd,
  twoCol,
  flexAlign,
} from '../abstracts/Mixins';
import { companyLogosData } from '../data';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  ${twoCol}

  .icons {
    ${flexAlign}
    gap: 2rem;
  }
`;

const Hero = (): JSX.Element => {
  return (
    <header>
      <Container>
        <div>
          <MainHeading>Design Resources for developers.</MainHeading>
          <Paragraph>
            Explore a collection of 3400+ curated design resources, both free
            and paid, developers can use to create landing pages quicker.
          </Paragraph>
          <PrimaryButton>Submit Resources</PrimaryButton>
          <Paragraph>Used by individuals in:</Paragraph>
          <div className='icons'>
            {companyLogosData.map((logo) => (
              <div key={logo.id} className='icon'>
                <Image src={logo.icon} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className='showcase'>
          <Image src={showcase} alt='circles' />
        </div>
      </Container>
    </header>
  );
};

export default Hero;
