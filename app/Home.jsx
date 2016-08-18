import React from 'react';
import { Link } from 'react-router';

var imgTaskly = require('./medias/taskly/preview.jpg');
var imgUXUIDesign = require('./medias/ux-ui-design/preview.jpg');

const Home = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },

  render() {
    return (
      <div className="project-cards" style={this.props.style}>
        <Link to={'taskly'} className="project-card">
          <h2 className="project-card__name">Taskly</h2>
          <img className="project-card__image" src={imgTaskly} alt="Taskly" />
        </Link>
        <Link to={'ux-ui-design'} className="project-card">
          <h2 className="project-card__name">UX/UI Design</h2>
          <img className="project-card__image" src={imgUXUIDesign} alt="UX/UI Design" />
        </Link>
        <Link to={'kashflow'} className="project-card">
          <h2 className="project-card__name">KashFlow</h2>
          <img className="project-card__image" src={imgUXUIDesign} alt="UX/UI Design" />
        </Link>
      </div>
    );
  }
});

export default Home;
