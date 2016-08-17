import React from 'react';
import { Link } from 'react-router';

/* eslint-disable */
const content = `Here is a test`;
/* eslint-enable */

// let count = 0;

const Home = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },

  // getInitialState() {
  //   return {
  //     lorem: lorems[count++ % lorems.length]
  //   };
  // },

  render() {
    return (
      <div className="lorem" style={this.props.style}>
        <h1>{this.props.route.title}</h1>
        <p>{content}</p>

        <div className="nav-arrows">
          <Link to={'demo-1'} className="nav-arrow nav-arrow__prev">
            Prev
          </Link>
          <Link to={'taskly'} className="nav-arrow nav-arrow__next">
            Next
          </Link>
        </div>
      </div>
    );
  }
});

export default Home;
