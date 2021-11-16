import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

export const NavbarLink = styled.a`
  ${textStyles}
  font-size: 1.6rem;
  color: var(--black);

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
