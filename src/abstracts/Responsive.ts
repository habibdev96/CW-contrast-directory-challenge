const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  lg: customMediaQuery(1000),
  md: customMediaQuery(768),
  sm: customMediaQuery(400),
};
