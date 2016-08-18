import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
  render() {
    return (
      <header className="header">
        <Link to="/" key="home">Home</Link>
      </header>
    );
  }
});

export default Header;
