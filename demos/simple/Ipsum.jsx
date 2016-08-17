import React from 'react';
import { Link } from 'react-router';

/* eslint-disable */
const content = `Content.`;
/* eslint-enable */

// let count = 0;

const Ipsum = React.createClass({
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
          <Link to={'taskly'} className="nav-arrow nav-arrow__prev">
            Prev
          </Link>
          <Link to={'/'} className="nav-arrow nav-arrow__next">
            Next
          </Link>
        </div>
      </div>
    );
  }
});

export default Ipsum;
