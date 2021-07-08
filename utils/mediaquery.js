import facepaint from 'facepaint';

const breakpoints = [480, 768];

const mediaquery = facepaint(
  breakpoints.map((breakpoint) => `@media (min-width: ${breakpoint}px)`)
);

export default mediaquery;
