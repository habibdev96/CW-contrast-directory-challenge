import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

const Paragraph = styled.p<{ dark: boolean }>`
  ${textStyles}
  font-size: 1.6rem;
  color: ${({ dark }) => (dark ? 'var(--darkGrey)' : 'var(--white)')};
  padding: 2rem 0;
`;

export default Paragraph;
