import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}></Route>
    </Switch>
  </BrowserRouter>
)

export default Routes;


