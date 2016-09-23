import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './components/Header';

const App = ({ children, location }) => (
  <div>
    <Header/>
    <div className="container">
      <div className="transition-wrapper">
        <ReactCSSTransitionGroup
          transitionName="fade-wait"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {React.cloneElement(children, {
            key: location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    </div>
  </div>
);

export default App;
