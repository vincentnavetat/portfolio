import React from 'react';
import { Link } from 'react-router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Portfolio = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },

  render() {
    const tools = [
      'React',
      'Webpack',
      'SASS',
      'Bourbon',
      'PostCSS',
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
                  Single-page App
                </div>
              </div>
              <div className="tags">
                <div className="tag__category">
                  Role
                </div>
                <div className="tag">
                  UX/UI Designer + Developer
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
                I created this portfolio with 2 aims in mind. I wanted to design a simple and elegant single-page website where I can explain in details the process behind completed projects. I also wanted to take the opportunity to work on my JS skills and use a modern library for single-page applications such as React.
              </p>

              <p>
                Creating this portfolio from scratch allowed me to have the format I thought was best to show my work, rather than complying to a pre-existing solution.
              </p>

              <p>
                I used React-router to set up the navigation and the ReactCSSTransitionGroup add-on to create smooth visual transitions between the pages. The CSS is written with SASS and use the combination of Bourbon and Neat to handle responsive design and grid layout, following a mobile-first approach. Finally I used Webpack to bundle the application and handle all the assets with ease.
              </p>

              <p>
                The code and website are both hosted on <a href="https://github.com/vincentnavetat/portfolio" target="_blank">Github</a>.
              </p>
            </div>
          </div>
          <Navigation prev="kashflow" next="taskly"/>
          <Footer/>
        </div>
      </div>
    );
  }
});

export default Portfolio;
