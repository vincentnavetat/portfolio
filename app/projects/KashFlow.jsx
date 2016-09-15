import React from 'react';
import { Link } from 'react-router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const KashFlow = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },

  render() {
    const tools = [
      'WP',
      'SASS',
      'PostCSS',
      'jQuery',
      'Modernizr',
      'Gulpjs',
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
                  Websites
                </div>
              </div>
              <div className="tags">
                <div className="tag__category">
                  Role
                </div>
                <div className="tag">
                  Developer
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
              <p>
                I have worked as a Web Developer at IRIS Software since Dec 2014, dedicated on the cloud division.
              </p>

              <img src="../medias/kashflow/preview-apps.jpg" alt="KashFlow - Apps"/>

            </div>
          </div>
          <Navigation prev="ux-ui-design" next="taskly"/>
          <Footer/>
        </div>
      </div>
    );
  }
});

export default KashFlow;
