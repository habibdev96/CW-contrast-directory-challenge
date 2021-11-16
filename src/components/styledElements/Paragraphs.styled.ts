import styled from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

const Paragraph = styled.p`
  ${textStyles}
  font-size: 1.8rem;
  color: var(--darkGrey);
  padding: 2rem 0;
`;

export default Paragraph;
