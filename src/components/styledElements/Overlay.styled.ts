import styled, { css } from 'styled-components';

const StyledOverlay = styled.div<{ mobile: boolean }>`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);

  ${({ mobile }) =>
    mobile &&
    css`
      z-index: 1500;

      @media (min-width: 768px) {
        display: none;
      }
    `}
`;

export default StyledOverlay;
