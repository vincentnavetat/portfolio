import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

var imgPersonaDesigner = require('../medias/taskly/persona-designer.jpg');
var imgPersonaEntrepreneur = require('../medias/taskly/persona-entrepreneur.jpg');
var imgPersonaProjectManager = require('../medias/taskly/persona-project-manager.jpg');
var imgTaskModel = require('../medias/taskly/task-model.png');
var imgCustomerExperienceMap = require('../medias/taskly/customer-experience-map.png');
var imgSitemapCorporate = require('../medias/taskly/sitemap-corporate.png');
var imgSitemapGeneral = require('../medias/taskly/sitemap-general.png');
var imgSitemapProjects = require('../medias/taskly/sitemap-projects.png');

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Taskly = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },

  render() {
    const tools = [
      'UX Design'
    ];

    return (
      <div className="lorem" style={this.props.style}>
        <h1>{this.props.route.title}</h1>

        <div className="project-view-tech">
          {tools.map((tool) => {
            return <div className="project-view-tools" key={tool}>{tool}</div>;
          })}
        </div>

        <div className="project-view-summary">
          <p>
            Taskly, a new start-up, is looking to gain a presence amongst the project management software industry. In order to be unique and separate themselves from the competition, they aim to create a simplified and streamlined version of project management apps like Asana and Basecamp. By creating and perfecting only the features most important to the user and essential to project management, Taskly aims to be both efficient and easy to use.
          </p>
          <h3>
            Competitive research
          </h3>
          <p>
            First, I looked into what other companies in the project management software field were up to–where they succeeded, where they failed, what they offered–and how to do it better.
          </p>
          <h3>
            User research
          </h3>
          <p>
            Then I was onto the most important UX commandment: know thy user. Combined with the competitive analysis, I used insight from surveys and interviews to make a decision on the essential features of Taskly. Besides being simple and intuitive, there seemed to be a real need for project management software that acted as a central team communication hub and helped prioritize user tasks.
          </p>
          <h3>
            User personas
          </h3>
          <p>
            In order to target specific user needs, I broke down the type of users into three categories:
            Busy Individuals (freelancers), People in Power (team leaders), and Team Members (employees that collaborate with others).
          </p>

          <div>
            <div className="persona">
              <img src={imgPersonaDesigner} alt="" />
            </div>
            <div className="persona">
              <img src={imgPersonaEntrepreneur} alt="" />
            </div>
            <div className="persona">
              <img src={imgPersonaProjectManager} alt="" />
            </div>
          </div>

          <h3>
            Customer experience map
          </h3>

          <img src={imgCustomerExperienceMap} alt="Customer Experience Map for Taskly" />

          <h3>
            Task Model
          </h3>

          <img src={imgTaskModel} alt="Task Model for Taskly" />

          <h3>
            Site map
          </h3>

          <h4>
            Corporate Website
          </h4>
          <img src={imgSitemapCorporate} alt="" />

          <h4>
            App / General
          </h4>
          <img src={imgSitemapGeneral} alt="" />

          <h4>
            App / Projects
          </h4>
          <img src={imgSitemapProjects} alt="" />

          <p>
            After completing a card sorting exercise and full content audits on competitors, I was able to organize the essential Taskly features into a site map based on those findings.
          </p>
          <h3>
            Sketches
          </h3>
          <p>
            I always begin the design process with sketching to move quickly through my ideas and have a chance to test them before moving to the computer.
          </p>

          <Slider {...settings}>
            <div>
              <img src={imgPersonaDesigner} alt="" />
            </div>
            <div>
              <img src={imgPersonaEntrepreneur} alt="" />
            </div>
            <div>
              <img src={imgPersonaProjectManager} alt="" />
            </div>
          </Slider>

          <h3>
            Wireframes
          </h3>
          <p>
            After initial usability testing on the sketches, I move onto wireframes to outline the layout of the application without worrying about the aesthetic design. This way I can keep testing my ideas on potential users to continually improve the product without wasting time tweaking colors and drop shadows.
          </p>
          <h3>
            UI kit
          </h3>
          <h3>
            Final product design
          </h3>
        </div>

        <div className="nav-arrows">
          <Link to={'kashflow'} className="nav-arrow nav-arrow__prev">
            Prev
          </Link>
          <Link to={'ux-ui-design'} className="nav-arrow nav-arrow__next">
            Next
          </Link>
        </div>
      </div>
    );
  }
});

export default Taskly;
