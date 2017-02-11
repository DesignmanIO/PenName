// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Uploader from './containers/Uploader';
import CounterPage from './containers/CounterPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Uploader} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
