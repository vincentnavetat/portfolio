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
              <h2 className="project-card__name">Taskly</h2>
              <img className="project-card__image" src="./medias/taskly/preview.jpg" alt="Taskly" />
            </Link>
            <Link to={'ux-ui-design'} className="project-card">
              <h2 className="project-card__name">UX/UI Design</h2>
              <img className="project-card__image" src="./medias/ux-ui-design/preview.jpg" alt="UX/UI Design" />
            </Link>
            <Link to={'kashflow'} className="project-card">
              <h2 className="project-card__name">KashFlow</h2>
              <img className="project-card__image" src="./medias/ux-ui-design/preview.jpg" alt="UX/UI Design" />
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
});

export default Home;
