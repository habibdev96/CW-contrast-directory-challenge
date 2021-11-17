import styled from 'styled-components';
import Image from 'next/image';
import {
  maxWidthLg,
  sectionSpacingMd,
  fourCol,
  flexBetween,
} from '../abstracts/Mixins';
import Paragraph from './styledElements/Paragraphs.styled';
import { CardHeading } from './styledElements/Headings.styled';
import { FooterLink } from './styledElements/Link.styled';
import logo from '../../public/assets/logos/contrast-logo.svg';
import { footerLinksData } from '../data';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  ${flexBetween}
  align-items: flex-start;

  .left {
    flex: 30%;
    margin-right: 5rem;
  }

  .right {
    ${fourCol}
    flex: 70%;
  }

  .links {
    margin-top: 0.5rem;
  }
`;

const Footer = (): JSX.Element => {
  return (
    <footer>
      <Container>
        <div className='left'>
          <div className='logo'>
            <Image src={logo} alt='contrast logo' />
            <Paragraph dark={true}>
              Explore a collection of 3400+ curated design resources, both free
              and paid, developers can use to create landing pages quicker.
            </Paragraph>
          </div>
        </div>
        <div className='right'>
          {footerLinksData.map((item) => (
            <div key={item.id}>
              <CardHeading>{item.title}</CardHeading>
              {item.links.map((link) => (
                <ul key={link.id} className='links'>
                  <li>
                    <FooterLink href='#!'>{link.link}</FooterLink>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
