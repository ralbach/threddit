import React from 'react';
import {Route, Switch} from 'react-router-dom';

//route files
import Home from './containers/Home';
import NotFound from './containers/NotFound';

export default function Routes(){
  return(
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}