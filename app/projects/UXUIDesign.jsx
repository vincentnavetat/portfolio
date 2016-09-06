import React from 'react';
import { Link } from 'react-router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const UXUIDesign = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },

  render() {
    const tools = [
      'UX Design'
    ];

    return (
      <div className="page-wrapper">
        <div className="page-content" style={this.props.style}>
          <div className="project">
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
              <img src="../medias/ux-ui-design/weather-app.jpg" alt=""/>

              <h3>
                Physiotherapy App
              </h3>
              <img src="../medias/ux-ui-design/physio-app.jpg" alt=""/>

            </div>
          </div>
          <Navigation prev="taskly" next="kashflow" />
          <Footer />
        </div>
      </div>
    );
  }
});

export default UXUIDesign;
