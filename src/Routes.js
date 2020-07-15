import React from 'react';
import {Route, Switch} from 'react-router-dom';

//route files
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';

export default function Routes(){
  return(
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path="/login" component={Login} />
      {/* <Route path="/oauth_callback" component={LoginCallback} /> */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}