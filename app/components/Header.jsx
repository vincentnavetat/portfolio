import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__side header__side--left">
            <Link to="/" key="home" className="header__link">
              <span className="header__name">
                Vincent Navetat
              </span>
              <span className="header__description header__description--mobile">
                UX + Dev
              </span>
              <span className="header__description">
                UX Design + Front-End Dev
              </span>
            </Link>
          </div>
          <div className="header__side header__side--right text-right">
            {/*<Link to="/" key="home" className="header__link">About</Link>*/}
            <a href="../medias/vincent-navetat-resume.pdf" target="_blank" className="btn">Résumé</a>
          </div>
        </div>
      </header>
    );
  }
});

export default Header;
