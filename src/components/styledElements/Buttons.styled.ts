import styled from 'styled-components';
import { textStyles, headingStyles } from '../../abstracts/Mixins';

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

export const TabButton = styled.button`
  ${textStyles}
  font-size: 1.5rem;
  padding: 1rem;
  outline: 0;
  border: 0;
  background-color: transparent;
  border-radius: var(--mainRadius);
  color: var(--darkGrey);

  &.active {
    font-weight: bold;
    background-color: var(--lighterGrey);
  }
`;
