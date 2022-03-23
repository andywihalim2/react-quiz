import { BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";
import Layout from "../components/Layout";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";
import Test4 from "./Test4";
import Test5 from "./Test5";
import Test6 from "./Test6";
import Test7 from "./Test7";
import Test7A from "./Test7A";
import Test8 from "./Test8";
import Test9 from "./Test9";

const questions = [
  { path: '/1', Element: Test1 },
  { path: '/2', Element: Test2 },
  { path: '/3', Element: Test3 },
  { path: '/4', Element: Test4 },
  { path: '/5', Element: Test5 },
  { path: '/6', Element: Test6 },
  { path: '/7', Element: Test7 },
  { path: '/7a', Element: Test7A },
  { path: '/8', Element: Test8 },
  { path: '/9', Element: Test9 },
];

function Routes() {
  const renderNav = [];

  const renderRoutes = questions.map(({path, Element}) => {
    renderNav.push(<Link key={path} to={path}>{`${path} `}</Link>);
    return <Route key={path} exact path={path} element={<Element/>}/>;
  });

  return (
    
      <Router>
        <Layout>
          {renderNav}
          <Switch>{renderRoutes}</Switch>
        </Layout>
      </Router>
  );
}

export default Routes;
