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

export const cssOrbit = (orbidRadius, velocity) => css({
  width: orbidRadius, 
  height: orbidRadius,
  position: 'absolute',
  animation: `spin ${velocity}s linear infinite`,
  '@keyframes spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
})

export const cssPlanet = (radius, color) => css({
  width: radius,
  height: radius,
  borderRadius: 100,
  backgroundColor: color,
});