import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Home from './Home';
import Taskly from './projects/Taskly';
import UXUIDesign from './projects/UXUIDesign';

const Routing = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} title="Home" />
      <Route path="taskly" component={Taskly} title="Taskly" />
      <Route path="ux-ui-design" component={UXUIDesign} title="UX/UI Design" />
    </Route>
  </Router>
);

ReactDOM.render(<Routing />, document.querySelector('#app'));
