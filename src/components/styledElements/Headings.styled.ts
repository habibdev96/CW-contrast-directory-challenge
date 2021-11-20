import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';
import { media } from '../../abstracts/Responsive';

export const MainHeading = styled.h1`
  ${headingStyles}
  font-size: 5.6rem;
  color: var(--black);

  ${media.sm} {
    font-size: 3.4rem;
  }
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  font-size: 2.6rem;
  color: var(--white);
`;

export const CardHeading = styled.h3`
  ${headingStyles}
  font-size: 1.8rem;
  color: var(--black);
`;

export const ModalHeading = styled.h4`
  ${headingStyles}
  font-size: 2.4rem;
  color: var(--black);
`;
