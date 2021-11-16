import styled from 'styled-components';
import Image from 'next/image';
import { CardHeading } from './styledElements/Headings.styled';
import Paragraph from './styledElements/Paragraphs.styled';
import { CardLink } from './styledElements/Link.styled';
import { BsArrowRight } from 'react-icons/bs';
import { IResourcesData } from '../interfaces';

const StyledArticle = styled.article`
  height: 100%;
  border: 0.1rem solid #e0e0e0;
  padding: 4rem 2rem;
  border-radius: var(--mainRadius);

  .logo {
    margin-bottom: 2rem;
  }
`;

const ResourceCard = ({
  logo,
  title,
  description,
  link,
}: IResourcesData): JSX.Element => {
  return (
    <StyledArticle>
      <div className='logo'>
        <Image src={logo} alt={title} />
      </div>
      <CardHeading>{title}</CardHeading>
      <Paragraph>{description}</Paragraph>
      <CardLink href={link} target='_blank' rel='noreferrer'>
        <span>Visit Resource</span>
        <BsArrowRight className='icon' />
      </CardLink>
    </StyledArticle>
  );
};

export default ResourceCard;
