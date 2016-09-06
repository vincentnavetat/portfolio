import React from 'react';
import { Link } from 'react-router';

const Navigation = React.createClass({
  getDefaultProps() {
    return {
      prev: 'kashflow',
      next: 'ux-ui-design'
    };
  },

  render() {
    return (
      <div className="nav-arrows">
        <Link to={this.props.prev} className="nav-arrow nav-arrow__prev">
          ← Prev
        </Link>
        <Link to={this.props.next} className="nav-arrow nav-arrow__next">
          Next →
        </Link>
      </div>
    );
  }
});

export default Navigation;
