import { css } from 'react-emotion';

export const cssWrapper = css({
  padding: 16,
  maxWidth: 768,
  margin: '0 auto',
  ul: {
    paddingLeft: 16,
    paddingBottom: 16,
    borderBottom: '1px solid #e0e0e0',
  },
  table: {
    margin: '16px 0px',
    borderSpacing: 0,
    borderCollapse: 'collapse',
    'td, th': {
      border: '1px solid #e0e0e0',
      padding: '4px 8px',
    }
  },
  code: {
    backgroundColor: '#e0e0e0',
    color: 'red',
  }
});
