import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';
import { media } from '../../abstracts/Responsive';

export const PrimaryInput = styled.input`
  ${textStyles}
  padding: 1rem 1rem 1rem 5rem;
  outline: 0;
  border: 0;
  width: 30rem;
  font-size: 1.5rem;
  color: var(--darkGrey);
  border-radius: var(--mainRadius);
  background-color: var(--offWhite);

  ${media.md} {
    width: 100%;
  }
`;

export const SecondaryInput = styled(PrimaryInput)`
  background-color: var(--white);
  color: var(--darkGrey);
  padding: 1rem;
`;
