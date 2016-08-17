import React from 'react';
import { Link } from 'react-router';
import { RouteTransition } from '../../src/index';
import { spring } from 'react-motion';

const slideConfig = {
  stiffness: 330,
  damping: 30
};

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
      <div className="container">
        <header className="header">
          <Link to="/" key="home">Home</Link>
          {this.props.route.childRoutes.map(({ path }) => {
            const isActive = this.context.router.isActive(path);
            return (
              <Link
                to={`/${path}`}
                key={path}
                className={isActive ? 'link active' : 'link'}
              >
                {path}
              </Link>
            );
          })}
        </header>
        <RouteTransition
          component={false}
          pathname={this.props.location.pathname}
          className="transition-wrapper"
          atEnter={{opacity: 0}}
          atLeave={{opacity: 0}}
          atActive={{opacity: spring(1, slideConfig)}}
          mapStyles={styles => ({ opacity: styles.opacity })}
          runOnMount={false}
        >
          {this.props.children}
        </RouteTransition>
      </div>
    );
  }
});

export default App;
