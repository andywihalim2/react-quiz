import { css } from 'react-emotion';

export const cssWrapper = css({ padding: 8, margin: '16px 0px', border: '1px solid #000' });

export const cssModalRight = css({
  display: 'flex',
  justifyContent: 'space-between',
  textAlign: 'right',
  marginBottom: 16,
  button: {
    fontSize: 22,
    padding: 0,
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
  },
});
