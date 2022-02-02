import { node } from 'prop-types';
import { cssWrapper } from './style';

const Layout = ({ children }) => {
  return (
    <div className={cssWrapper} >
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
