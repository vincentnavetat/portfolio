import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Home from './Home';
import Taskly from './projects/Taskly';
import UXUIDesign from './projects/UXUIDesign';
import KashFlow from './projects/KashFlow';

const Routing = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} title="Home" />
      <Route path="taskly" component={Taskly} title="Taskly" />
      <Route path="ux-ui-design" component={UXUIDesign} title="UX/UI Design" />
      <Route path="kashflow" component={KashFlow} title="KashFlow" />
    </Route>
  </Router>
);

if (typeof window !== 'undefined') {
  require('./scss/styles.scss');
}

ReactDOM.render(<Routing />, document.querySelector('#app'));
