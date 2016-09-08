import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

var images = [
  '../medias/taskly/persona-designer.jpg',
  '../medias/taskly/persona-entrepreneur.jpg',
  '../medias/taskly/persona-project-manager.jpg',
];

var captions = [
  'Persona: Designer',
  'Persona: Entrepreneur',
  'Persona: Project Manager',
];

const Taskly = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },

  getInitialState: function() {
    return {
      index: 0,
      isOpen: false
    };
  },

  openLightbox: function(currentIndex) {
    this.setState({ index: currentIndex, isOpen: true });
  },

  closeLightbox: function() {
    this.setState({ isOpen: false });
  },

  moveNext: function() {
    this.setState({ index: (this.state.index + 1) % images.length });
  },

  movePrev: function() {
    this.setState({ index: (this.state.index + images.length - 1) % images.length });
  },

  render() {
    const tools = [
      'UX Design'
    ];

    var sliderSettings = {
      dots: false,
      infinite: false,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    var lightbox = '';
    if (this.state.isOpen) {
      lightbox = (
        <Lightbox
          mainSrc={images[this.state.index]}
          nextSrc={images[(this.state.index + 1) % images.length]}
          prevSrc={images[(this.state.index + images.length - 1) % images.length]}
          onCloseRequest={this.closeLightbox}
          onMovePrevRequest={this.movePrev}
          onMoveNextRequest={this.moveNext}
          imageTitle={captions[this.state.index]}
        />
      );
    }

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
              <p>Taskly is an app I have designed as part of the UX Design course from CarreerFoundry, I lead all the steps of the project from market research to interface design.</p>
              <p>
                The start-up Taskly aims at proposing a new take on project management apps. Their goal is to create a simple and seamless experience for teams to collaborate in the creative and technology industries.
              </p>
              <h3>
                Competitive research
              </h3>
              <p>
                First, I analysed the main companies in the project management software field: Basecamp, Asana and Trello: what they offer, their limits and what opportunities are there for Taskly.
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

              <div className="personas">
                <a className="persona" onClick={() => this.openLightbox(0)} href="javascript:void(0)">
                  <div className="persona__overlay"></div>
                  <img src="../medias/taskly/persona-designer.jpg" alt="" />
                </a>
                <a className="persona" onClick={() => this.openLightbox(1)} href="javascript:void(0)">
                  <div className="persona__overlay"></div>
                  <img src="../medias/taskly/persona-entrepreneur.jpg" alt="" />
                </a>
                <a className="persona" onClick={() => this.openLightbox(2)} href="javascript:void(0)">
                  <div className="persona__overlay"></div>
                  <img src="../medias/taskly/persona-project-manager.jpg" alt="" />
                </a>
              </div>

              {lightbox}

              <h3>
                Customer experience map
              </h3>

              <img src="../medias/taskly/customer-experience-map.png" alt="Customer Experience Map for Taskly" />

              <h3>
                Task Model
              </h3>

              <img src="../medias/taskly/task-model.png" alt="Task Model for Taskly" />

              <h3>
                Site map
              </h3>

              <h4>
                Corporate Website
              </h4>
              <img src="../medias/taskly/sitemap-corporate.png" alt="" />

              <h4>
                App / General
              </h4>
              <img src="../medias/taskly/sitemap-general.png" alt="" />

              <h4>
                App / Projects
              </h4>
              <img src="../medias/taskly/sitemap-projects.png" alt="" />

              <p>
                After completing a card sorting exercise and full content audits on competitors, I was able to organize the essential Taskly features into a site map based on those findings.
              </p>
              <h3>
                Sketches
              </h3>
              <p>
                I always begin the design process with sketching to move quickly through my ideas and have a chance to test them before moving to the computer.
              </p>

              <Slider {...sliderSettings}>
                <figure>
                  <figcaption>Dashboard</figcaption>
                  <img src="../medias/taskly/paper-prototype-01-dashboard.jpg" alt="Taskly's paper prototype - Dashboard" />
                </figure>
                <figure>
                  <figcaption>Navigation Dropdowns</figcaption>
                  <img src="../medias/taskly/paper-prototype-02-navigation.jpg" alt="Taskly's paper prototype - Navigation Dropdowns" />
                </figure>
                <figure>
                  <figcaption>Create a New Project</figcaption>
                  <img src="../medias/taskly/paper-prototype-03-create-new-project.jpg" alt="Taskly's paper prototype - Create a New Project" />
                </figure>
                <figure>
                  <figcaption>New Project</figcaption>
                  <img src="../medias/taskly/paper-prototype-04-new-project.jpg" alt="Taskly's paper prototype - New Project" />
                </figure>
                <figure>
                  <figcaption>Project Menu</figcaption>
                  <img src="../medias/taskly/paper-prototype-05-project-menu.jpg" alt="Taskly's paper prototype - Project Menu" />
                </figure>
                <figure>
                  <figcaption>Create a New Task</figcaption>
                  <img src="../medias/taskly/paper-prototype-06-create-new-task.jpg" alt="Taskly's paper prototype - Create a New Task" />
                </figure>
                <figure>
                  <figcaption>Task</figcaption>
                  <img src="../medias/taskly/paper-prototype-07-task.jpg" alt="Taskly's paper prototype - Task" />
                </figure>
                <figure>
                  <figcaption>Project</figcaption>
                  <img src="../medias/taskly/paper-prototype-08-project.jpg" alt="Taskly's paper prototype - Project" />
                </figure>
                <figure>
                  <figcaption>Project Sprint</figcaption>
                  <img src="../medias/taskly/paper-prototype-09-sprint.jpg" alt="Taskly's paper prototype - Project Sprint" />
                </figure>
                <figure>
                  <figcaption>Task's Team Member</figcaption>
                  <img src="../medias/taskly/paper-prototype-10-team-member.jpg" alt="Taskly's paper prototype - Task's Team Member" />
                </figure>
                <figure>
                  <figcaption>Conversations</figcaption>
                  <img src="../medias/taskly/paper-prototype-11-conversations.jpg" alt="Taskly's paper prototype - Conversations" />
                </figure>
                <figure>
                  <figcaption>Create a Conversation</figcaption>
                  <img src="../medias/taskly/paper-prototype-12-create-new-conversation.jpg" alt="Taskly's paper prototype - Create a Conversation" />
                </figure>
                <figure>
                  <figcaption>New Conversation</figcaption>
                  <img src="../medias/taskly/paper-prototype-13-new-conversation.jpg" alt="Taskly's paper prototype - New Conversation" />
                </figure>
                <figure>
                  <figcaption>Conversation</figcaption>
                  <img src="../medias/taskly/paper-prototype-14-conversation.jpg" alt="Taskly's paper prototype - Conversation" />
                </figure>
                <figure>
                  <figcaption>Dashboard</figcaption>
                  <img src="../medias/taskly/paper-prototype-15-files.jpg" alt="Taskly's paper prototype - " />
                </figure>
                <figure>
                  <figcaption>Dashboard</figcaption>
                  <img src="../medias/taskly/paper-prototype-16-new-files.jpg" alt="Taskly's paper prototype - " />
                </figure>
                <figure>
                  <figcaption>Dashboard</figcaption>
                  <img src="../medias/taskly/paper-prototype-17-file-history.jpg" alt="Taskly's paper prototype - " />
                </figure>
              </Slider>

              <h3>
                Wireframes
              </h3>
              <p>
                After initial usability testing on the sketches, I move onto wireframes to outline the layout of the application without worrying about the aesthetic design. This way I can keep testing my ideas on potential users to continually improve the product without wasting time tweaking colors and drop shadows.
              </p>

              <Slider {...sliderSettings}>
                <div>
                  <img src="../medias/taskly/wireframes-mobile-01-login.png" alt="" />
                </div>
                <div>
                  <img src="../medias/taskly/wireframes-mobile-02-navigation.png" alt="" />
                </div>
                <div>
                  <img src="../medias/taskly/wireframes-mobile-03-new-project.png" alt="" />
                </div>
                <div>
                  <img src="../medias/taskly/wireframes-mobile-04-new-task.png" alt="" />
                </div>
                <div>
                  <img src="../medias/taskly/wireframes-mobile-05-new-file.png" alt="" />
                </div>
                <div>
                  <img src="../medias/taskly/wireframes-mobile-06-add-team-member.png" alt="" />
                </div>
                <div>
                  <img src="../medias/taskly/wireframes-tablet-01-navigation.png" alt="" />
                </div>
                <div>
                  <img src="../medias/taskly/wireframes-tablet-02-new-project.png" alt="" />
                </div>
                <div>
                  <img src="../medias/taskly/wireframes-tablet-03-new-task.png" alt="" />
                </div>
                <div>
                  <img src="../medias/taskly/wireframes-tablet-04-new-file.png" alt="" />
                </div>
                <div>
                  <img src="../medias/taskly/wireframes-desktop-01-navigation.png" alt="" />
                </div>
                <div>
                  <img src="../medias/taskly/wireframes-desktop-02-new-project.png" alt="" />
                </div>
                <div>
                  <img src="../medias/taskly/wireframes-desktop-03-new-task.png" alt="" />
                </div>
                <div>
                  <img src="../medias/taskly/wireframes-desktop-04-new-file.png" alt="" />
                </div>
              </Slider>

              <h3>
                UI Design
              </h3>

              <img src="../medias/taskly/ui-demo.jpg" alt="" />

              <h3>
                Final product design
              </h3>

              <p className="text-center">
                <a href="https://xd.adobe.com/view/3407161d-d084-400b-4519-c846437a2a9e/" target="_blank" className="btn">View mobile prototype</a>
              </p>
            </div>
          </div>
          <Navigation prev="kashflow" next="ux-ui-design" />
          <Footer />
        </div>
      </div>
    );
  }
});

export default Taskly;
