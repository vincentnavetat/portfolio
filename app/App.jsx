import React from 'react';
import { Link } from 'react-router';
import RouteTransition from './components/RouteTransition';
import Header from './components/Header';

const App = React.createClass({
  propTypes: {
    route: React.PropTypes.object,
    location: React.PropTypes.object
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <RouteTransition
            component={false}
            pathname={this.props.location.pathname}
            className="transition-wrapper"
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            runOnMount={false}
          >
            {this.props.children}
          </RouteTransition>
        </div>
      </div>
    );
  }
});

export default App;
