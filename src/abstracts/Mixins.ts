import { css } from 'styled-components';
import { media } from './Responsive';

const flexAlign = css`
  display: flex;
  align-items: center;
  gap: var(--gap);
`;

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap);
`;

const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);
`;

const twoCol = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  gap: var(--gap);
`;

const threeCol = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-items: center;
  gap: var(--gap);

  ${media.md} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const fourCol = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: flex-start;
  gap: 2rem;
`;

const headingStyles = css`
  font-weight: 700;
  letter-spacing: 0.2rem;
  line-height: 1.2;
`;

const textStyles = css`
  font-weight: 400;
  letter-spacing: 0.1rem;
  line-height: 2.2;
`;

const sectionSpacingSm = css`
  padding: 5rem 2rem;
`;

const sectionSpacingMd = css`
  padding: 10rem 2rem;
`;

const sectionSpacingLg = css`
  padding: 20rem 2rem;
`;

const maxWidthSm = css`
  max-width: 1000px;
  margin: 0 auto;
`;

const maxWidthMd = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const maxWidthLg = css`
  max-width: 1400px;
  margin: 0 auto;
`;

export {
  flexAlign,
  flexCenter,
  flexBetween,
  twoCol,
  threeCol,
  fourCol,
  headingStyles,
  textStyles,
  sectionSpacingSm,
  sectionSpacingMd,
  sectionSpacingLg,
  maxWidthSm,
  maxWidthMd,
  maxWidthLg,
};
