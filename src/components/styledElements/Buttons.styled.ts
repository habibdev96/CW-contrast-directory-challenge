import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

export const PrimaryButton = styled.button`
  ${headingStyles}
  border: 0;
  outline: 0;
  padding: 1.5rem;
  font-size: 1.5rem;
  background-color: var(--purple);
  color: var(--white);
  border-radius: var(--mainRadius);
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    background-color: var(--purpleActive);
  }
`;
