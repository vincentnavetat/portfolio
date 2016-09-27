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
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
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
