import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
  render() {
    return (
      <header className="header">
        <div className="container">
          <Link to="/" key="home" className="header__link">Home</Link>
        </div>
      </header>
    );
  }
});

export default Header;
