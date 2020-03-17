import React from 'react';
import { Route, Link, Redirect, HashRouter, NavLink } from 'react-router-dom';
import loadable from '@loadable/component';

export default props => {
  return (
    <HashRouter>
      <div>
        <Link to="/home">Home</Link>|<Link to="/about">About</Link>
      </div>

      <Route exact path="/home" component={loadable(() => import('../Home'))} />
      <Route exact={false} path="/about" component={loadable(() => import('../About'))} />
      <Redirect to='/home' />
    </HashRouter>
  );
};
