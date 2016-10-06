import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer';

const Home = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },

  render() {
    return (
      <div className="page-wrapper">
        <div className="page-content" style={this.props.style}>
          <h1>Selected Projects</h1>
          <div className="project-cards">
            <Link to={'taskly'} className="project-card">
              <div className="project-card__overlay-background"></div>
              <div className="project-card__overlay-line"></div>
              <div className="project-card__overlay-content">
                <div className="project-card__overlay-text project-card__skillset">
                  UX/UI Design
                </div>
                <div className="project-card__overlay-text project-card__description">
                  Project Management App Concept and Design
                </div>
                <h2 className="project-card__overlay-text project-card__name">
                  Taskly
                </h2>
              </div>
              <img className="project-card__image" src="./medias/taskly/preview.jpg" alt="Taskly"/>
            </Link>
            <Link to={'ux-ui-design'} className="project-card">
              <div className="project-card__overlay-background"></div>
              <div className="project-card__overlay-line"></div>
              <div className="project-card__overlay-content">
                <div className="project-card__overlay-text project-card__skillset">
                  UX/UI Design
                </div>
                <div className="project-card__overlay-text project-card__description">
                  Design Concepts and UI
                </div>
                <h2 className="project-card__overlay-text project-card__name">
                  Mobile Apps Design
                </h2>
              </div>
              <img className="project-card__image" src="./medias/ux-ui-design/preview.jpg" alt="UX/UI Design"/>
            </Link>
            <Link to={'kashflow'} className="project-card">
              <div className="project-card__overlay-background"></div>
              <div className="project-card__overlay-line"></div>
              <div className="project-card__overlay-content">
                <div className="project-card__overlay-text project-card__skillset">
                  Web Development
                </div>
                <div className="project-card__overlay-text project-card__description">
                  Accounting Software Website
                </div>
                <h2 className="project-card__overlay-text project-card__name">
                  KashFlow
                </h2>
              </div>
              <img className="project-card__image" src="./medias/kashflow/preview.jpg" alt="KashFlow"/>
            </Link>
            <Link to={'portfolio'} className="project-card">
              <div className="project-card__overlay-background"></div>
              <div className="project-card__overlay-line"></div>
              <div className="project-card__overlay-content">
                <div className="project-card__overlay-text project-card__skillset">
                  UX/UI Design + Web Development
                </div>
                <div className="project-card__overlay-text project-card__description">
                  Single-page App
                </div>
                <h2 className="project-card__overlay-text project-card__name">
                  Portfolio
                </h2>
              </div>
              <img className="project-card__image" src="./medias/portfolio/preview.jpg" alt="Portfolio"/>
            </Link>
            <Link to={'kaliop'} className="project-card">
              <div className="project-card__overlay-background"></div>
              <div className="project-card__overlay-line"></div>
              <div className="project-card__overlay-content">
                <div className="project-card__overlay-text project-card__skillset">
                  Web Development
                </div>
                <div className="project-card__overlay-text project-card__description">
                  Websites
                </div>
                <h2 className="project-card__overlay-text project-card__name">
                  Kaliop UK
                </h2>
              </div>
              <img className="project-card__image" src="./medias/kaliop/preview.jpg" alt="Kaliop UK"/>
            </Link>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
});

export default Home;
