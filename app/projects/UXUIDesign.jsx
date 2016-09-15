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
      'Adobe Illustrator',
      'Adobe Photoshop'
    ];

    return (
      <div className="page-wrapper">
        <div className="page-content" style={this.props.style}>
          <div className="project">
            <h1>{this.props.route.title}</h1>

            <div className="tags-wrapper">
              <div className="tags">
                <div className="tag__category">
                  Type
                </div>
                <div className="tag">
                  Mobile App Design
                </div>
              </div>
              <div className="tags">
                <div className="tag__category">
                  Role
                </div>
                <div className="tag">
                  UX/UI Design
                </div>
              </div>
              <div className="tags">
                <div className="tag__category">
                  Tools
                </div>
                {tools.map((tool) => {
                  return <div className="tag" key={tool}>{tool}</div>;
                })}
              </div>
            </div>

            <div className="project-view-summary">
              <h3>
                Weather Mobile App
              </h3>

              <img src="../medias/ux-ui-design/weather-app.jpg" alt="Weather Mobile App Design"/>

              <h3>
                Physiotherapy Mobile App
              </h3>

              <img src="../medias/ux-ui-design/physio-app.jpg" alt="Physiotherapy Mobile App Design"/>

            </div>
          </div>
          <Navigation prev="taskly" next="kashflow"/>
          <Footer/>
        </div>
      </div>
    );
  }
});

export default UXUIDesign;
