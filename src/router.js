import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage.js';
import DateSelector from './routes/DateSelector.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/date" component={DateSelector} />
    </Router>
  );
}

export default RouterConfig;
