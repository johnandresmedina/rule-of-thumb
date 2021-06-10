import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../layout/Layout';
import App from '../app/App';
import About from '../about/About';

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <App />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
