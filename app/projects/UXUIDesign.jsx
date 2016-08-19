import React from 'react';
import { Link } from 'react-router';

var imgWeatherApp = require('../medias/ux-ui-design/weather-app.jpg');
var imgSitemapProjects = require('../medias/ux-ui-design/physio-app.jpg');

const UXUIDesign = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },

  render() {
    const tools = [
      'UX Design'
    ];

    return (
      <div className="project" style={this.props.style}>
        <h1>{this.props.route.title}</h1>

        <div className="project-view-tech">
          {tools.map((tool) => {
            return <div className="project-view-tools" key={tool}>{tool}</div>;
          })}
        </div>

        <div className="project-view-summary">
          <h3>
            Weather App
          </h3>
          <img src={imgWeatherApp} alt=""/>

          <h3>
            Physiotherapy App
          </h3>
          <img src={imgSitemapProjects} alt=""/>

        </div>

        <div className="nav-arrows">
          <Link to={'taskly'} className="nav-arrow nav-arrow__prev">
            Prev
          </Link>
          <Link to={'kashflow'} className="nav-arrow nav-arrow__next">
            Next
          </Link>
        </div>
      </div>
    );
  }
});

export default UXUIDesign;
