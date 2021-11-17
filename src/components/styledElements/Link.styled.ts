import styled from 'styled-components';
import { headingStyles, textStyles } from '../../abstracts/Mixins';
import { flexAlign } from '../../abstracts/Mixins';

export const NavbarLink = styled.a`
  ${textStyles}
  font-size: 1.6rem;
  color: var(--black);

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const CardLink = styled.a`
  ${headingStyles}
  ${flexAlign}
  gap: 1rem;
  font-size: 1.5rem;
  color: var(--black);

  .icon {
    color: var(--black);
    font-size: var(--xs);
  }

  &:hover,
  &:focus {
    text-decoration: underline;

    .icon {
      margin-left: 0.5rem;
    }
  }
`;

export const FooterLink = styled(NavbarLink)`
  font-size: 1.5rem;
`;
