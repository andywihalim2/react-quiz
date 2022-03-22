import { css } from 'react-emotion';

export const cssVideo = css({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100%",
  height: '100%',
  objectFit: 'cover',
  marginTop: 16,
});

export const cssContainer = css({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  paddingTop: '75%',
});