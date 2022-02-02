import { css } from 'react-emotion';

export const cssSpace = css({
  marginTop: 24,
  width: 800,
  height: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
});

export const cssSun = css({
  width: 80,
  height: 80,
  backgroundColor: 'yellow',
  borderRadius: 40,
});

export const cssPlanet = () => css({
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: 'red',
});
