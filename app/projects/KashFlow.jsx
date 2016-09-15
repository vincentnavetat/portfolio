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
                I have worked as a Web Developer at IRIS Software since Dec 2014. My role has involved developping and maintaining websites for the Could division.
              </p>

              <h2>
                KashFlow
              </h2>

              <p>
                <a href="https://www.kashflow.com/" target="_blank">kashflow.com</a> is the corporate website for the online accounting and payroll app. It is based on WordPress and is fully reponsive using the CSS framework Bootstrap.
              </p>

              <p>
                The CSS has been maintained with SASS, while the JS side relies on jQuery and Modernizr. All front-end assets are processed by Gulpjs.
              </p>

              <img src="../medias/kashflow/preview-apps.jpg" alt="KashFlow - Apps"/>

              <p>
                I have kept the codebase up-to-date with the latest front-end best practices. Assets are concatened and minified to reduce the pageload to the minimum. CSS is automatically prefixed using PostCSS. Icons are all rendered in SVG using an icon system to avoid additionnal HTTP requests.
              </p>

              <p>
                Website features include an accountant directory which allow users to look up and contact affilied accountants in the UK, based on location and specialties criterias. There is also an ecommerce section built with WooCommerce to sell classroom and webinar trainings to users.
              </p>

              <img src="../medias/kashflow/preview-directory.jpg" alt="KashFlow - Accountant Directory"/>

              <h2>
                Canvass
              </h2>

              <p>
                <a href="http://www.kashflowcanvass.com/" target="_blank">kashflowcanvass.com</a> is a micro-site created to promote an online suggestion centre. The page was created using a parallax effect built with the CSS frameworks Bourbon and Neat.
              </p>
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
