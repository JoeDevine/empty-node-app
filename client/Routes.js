import { Switch, Route } from 'react-router-dom';
import { PageNotFound, Overview } from './components/Pages';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Overview} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
