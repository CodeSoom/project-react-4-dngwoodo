import facepaint from 'facepaint';

const breakpoints = [768, 900];

const mediaquery = facepaint(
  breakpoints.map((breakpoint) => `@media (min-width: ${breakpoint}px)`)
);

export default mediaquery;
