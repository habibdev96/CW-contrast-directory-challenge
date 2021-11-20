import styled from 'styled-components';
import { textStyles, headingStyles } from '../../abstracts/Mixins';
import { media } from '../../abstracts/Responsive';

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

  ${media.md} {
    width: 100%;
  }

  &:hover,
  &:focus {
    background-color: var(--purpleActive);
  }
`;

export const SubmitButton = styled.input`
  ${headingStyles}
  border: 0;
  outline: 0;
  padding: 1.5rem;
  font-size: 1.5rem;
  background-color: var(--purple);
  color: var(--white);
  border-radius: var(--mainRadius);
  transition: var(--mainTransition);

  ${media.md} {
    width: 100%;
  }

  &:hover,
  &:focus {
    background-color: var(--purpleActive);
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: var(--lightPurple);
  color: var(--purple);
  padding: 1.8rem 1.5rem;

  &:hover,
  &:focus {
    background-color: var(--lightPurpleActive);
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
