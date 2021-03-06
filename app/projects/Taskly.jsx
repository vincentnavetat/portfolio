import React from 'react';
import { Link } from 'react-router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';

var images = [
  '../medias/taskly/persona-designer.jpg',
  '../medias/taskly/persona-entrepreneur.jpg',
  '../medias/taskly/persona-project-manager.jpg'
];


var captions = [
  'Persona: Designer',
  'Persona: Entrepreneur',
  'Persona: Project Manager'
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
      'UXPin',
      'inVision',
      'Adobe XD'
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
            <h1>
              {this.props.route.title}
            </h1>

            <div className="tags-wrapper">
              <div className="tags">
                <div className="tag__category">
                  Type
                </div>
                <div className="tag">
                  Web + Mobile App Design
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
              <p>
                Taskly is a concept app I have designed as part of the UX Design course from CareerFoundry, I lead all the steps of the project from market research to interface design.
              </p>

              <p>
                The start-up Taskly aims at proposing a new take on project management apps. Their goal is to create a simple and seamless collaborative experience for teams in the creative and technology sectors.
              </p>

              <p>
                <a href="https://xd.adobe.com/view/3407161d-d084-400b-4519-c846437a2a9e/" target="_blank" className="btn">View mobile prototype</a>
              </p>

              <h2>
                Competitive Research
              </h2>

              <p>
                First, I analysed the main companies in the market for online project management: Basecamp, Asana and Trello: what they offer, their limits and what opportunities are there for Taskly.
              </p>

              <a className="text-center file-download" href="../medias/taskly/taskly-competitive-research.pdf" target="_blank">
                <img src="../medias/taskly/competitive-research.png" alt="Competitive research: Basecamp vs Trello vs Asana"/>
                Download the competitive research (pdf)
              </a>

              <h2>
                User Research
              </h2>

              <p>
                Based on surveys and interviews, I could make a decision on features that would be included in the Minimum Viable Product (MVP) for Taskly.
                It seemed that users of existing project management apps had the most problems with consolidating information from different modes of communication, as well as juggling multiple projects at the same time.
              </p>

              <h2>
                User Personas
              </h2>

              <p>
                In order to target specific user needs, I set up 3 different personas: the Creative Employee, the Entrepreneur and the Project Manager.
              </p>

              <div className="personas">
                <a className="persona lightbox-link" href="javascript:void(0)" onClick={() => this.openLightbox(0)}>
                  <div className="lightbox-link__overlay"></div>
                  <img src="../medias/taskly/persona-mini-designer.jpg" alt=""/>
                </a>
                <a className="persona lightbox-link" href="javascript:void(0)" onClick={() => this.openLightbox(1)}>
                  <div className="lightbox-link__overlay"></div>
                  <img src="../medias/taskly/persona-mini-entrepreneur.jpg" alt=""/>
                </a>
                <a className="persona lightbox-link" href="javascript:void(0)" onClick={() => this.openLightbox(2)}>
                  <div className="lightbox-link__overlay"></div>
                  <img src="../medias/taskly/persona-mini-project-manager.jpg" alt=""/>
                </a>
              </div>

              {lightbox}

              <h2>
                Task Model
              </h2>

              <p>
                After defining the features contained in the MVP for Taskly, I designed a Task Model for the Project Setup:
              </p>

              <img src="../medias/taskly/task-model.png" alt="Task Model for Taskly"/>

              <h2>
                Customer Experience Map
              </h2>

              <p>
                Based on the Project Manager persona, I designed a Customer Experience Map which helped me going though all the steps of a project and have a clear understanding of all the processes involved.
              </p>

              <img src="../medias/taskly/customer-experience-map.png" alt="Customer Experience Map for Taskly"/>

              <h2>
                Site Maps
              </h2>

              <p>
                In order to create site maps for the different parts of Taskly's website and the application, I gathered insights from:
              </p>

              <ul>
                <li>
                  A card sorting exercise completed by potential users.
                </li>
                <li>
                  A content audit of two of Taskly's main competitors: Asana and Basecamp.
                </li>
              </ul>

              <h3>
                Corporate Website
              </h3>

              <img src="../medias/taskly/sitemap-corporate.png" alt="Sitemap for Taskly's Corporate Website"/>

              <h3>
                App / General
              </h3>

              <img src="../medias/taskly/sitemap-general.png" alt="Sitemap for Taskly's App"/>

              <h3>
                App / Projects
              </h3>

              <img src="../medias/taskly/sitemap-projects.png" alt="Sitemap for Taskly's App - Projects Side"/>

              <h2>
                Sketches
              </h2>
              <p>
                Once the site maps were created and validated by my mentor, I could start working on a paper prototype.
                Sketching was the best way to define my initial vision of the app. I could draw different ideas and make changes quicker than if I had started with a wireframe software from the beginning.
              </p>
              <p>
                Another advantage is that I was able to have a first round of usability testing, so I could have feedback on my initial ideas and make adjustments before building more detailed wireframes.
              </p>
              <p>
                This first usability testing was done by showing the screens on paper to a user. I would start by showing only the Dashboard, brief the user on a task to perform (for example: set up a new project) and depending on where the user tells me they would click, I show them the following screen.
              </p>

              <Slider {...sliderSettings}>
                <figure>
                  <figcaption>Dashboard</figcaption>
                  <img src="../medias/taskly/paper-prototype-01-dashboard.jpg" alt="Taskly's Paper Prototype - Dashboard"/>
                </figure>
                <figure>
                  <figcaption>Navigation Dropdowns</figcaption>
                  <img src="../medias/taskly/paper-prototype-02-navigation.jpg" alt="Taskly's Paper Prototype - Navigation Dropdowns"/>
                </figure>
                <figure>
                  <figcaption>Create a New Project</figcaption>
                  <img src="../medias/taskly/paper-prototype-03-create-new-project.jpg" alt="Taskly's Paper Prototype - Create a New Project"/>
                </figure>
                <figure>
                  <figcaption>New Project</figcaption>
                  <img src="../medias/taskly/paper-prototype-04-new-project.jpg" alt="Taskly's Paper Prototype - New Project"/>
                </figure>
                <figure>
                  <figcaption>Project Menu</figcaption>
                  <img src="../medias/taskly/paper-prototype-05-project-menu.jpg" alt="Taskly's Paper Prototype - Project Menu"/>
                </figure>
                <figure>
                  <figcaption>Create a New Task</figcaption>
                  <img src="../medias/taskly/paper-prototype-06-create-new-task.jpg" alt="Taskly's Paper Prototype - Create a New Task"/>
                </figure>
                <figure>
                  <figcaption>Task</figcaption>
                  <img src="../medias/taskly/paper-prototype-07-task.jpg" alt="Taskly's Paper Prototype - Task"/>
                </figure>
                <figure>
                  <figcaption>Project</figcaption>
                  <img src="../medias/taskly/paper-prototype-08-project.jpg" alt="Taskly's Paper Prototype - Project"/>
                </figure>
                <figure>
                  <figcaption>Project Sprint</figcaption>
                  <img src="../medias/taskly/paper-prototype-09-sprint.jpg" alt="Taskly's Paper Prototype - Project Sprint"/>
                </figure>
                <figure>
                  <figcaption>Task's Team Member</figcaption>
                  <img src="../medias/taskly/paper-prototype-10-team-member.jpg" alt="Taskly's Paper Prototype - Task's Team Member"/>
                </figure>
                <figure>
                  <figcaption>Conversations</figcaption>
                  <img src="../medias/taskly/paper-prototype-11-conversations.jpg" alt="Taskly's Paper Prototype - Conversations"/>
                </figure>
                <figure>
                  <figcaption>Create a Conversation</figcaption>
                  <img src="../medias/taskly/paper-prototype-12-create-new-conversation.jpg" alt="Taskly's Paper Prototype - Create a Conversation"/>
                </figure>
                <figure>
                  <figcaption>New Conversation</figcaption>
                  <img src="../medias/taskly/paper-prototype-13-new-conversation.jpg" alt="Taskly's Paper Prototype - New Conversation"/>
                </figure>
                <figure>
                  <figcaption>Conversation</figcaption>
                  <img src="../medias/taskly/paper-prototype-14-conversation.jpg" alt="Taskly's Paper Prototype - Conversation"/>
                </figure>
                <figure>
                  <figcaption>Files</figcaption>
                  <img src="../medias/taskly/paper-prototype-15-files.jpg" alt="Taskly's Paper Prototype - Files"/>
                </figure>
                <figure>
                  <figcaption>New File</figcaption>
                  <img src="../medias/taskly/paper-prototype-16-new-file.jpg" alt="Taskly's Paper Prototype - New File"/>
                </figure>
                <figure>
                  <figcaption>File History</figcaption>
                  <img src="../medias/taskly/paper-prototype-17-file-history.jpg" alt="Taskly's Paper Prototype - File History"/>
                </figure>
              </Slider>

              <h2>
                Wireframes
              </h2>

              <p>
                Based on the paper prototype and first round of usability testing, I created wireframes for mobile, tablet and desktop devices with UXPin.
                With these wireframes, I could create interactive prototypes for each device using inVision.
              </p>
              <p>
                I could then organise a second round of usability testing and get a more accurate feedback.
                Testers could navigate autonomously throughout the app to reach the goals that I defined.
                I could observe their behavoirs and make further adjustments afterwards.
              </p>

              <Slider {...sliderSettings}>
                <figure>
                  <figcaption>Mobile - Login</figcaption>
                  <img src="../medias/taskly/wireframes-mobile-01-login.png" alt="Taskly's Wireframes - Mobile Login"/>
                </figure>
                <figure>
                  <figcaption>Mobile - Navigation</figcaption>
                  <img src="../medias/taskly/wireframes-mobile-02-navigation.png" alt="Taskly's Wireframes - Mobile Navigation"/>
                </figure>
                <figure>
                  <figcaption>Mobile - New Project</figcaption>
                  <img src="../medias/taskly/wireframes-mobile-03-new-project.png" alt="Taskly's Wireframes - Mobile New Project"/>
                </figure>
                <figure>
                  <figcaption>Mobile - New Task</figcaption>
                  <img src="../medias/taskly/wireframes-mobile-04-new-task.png" alt="Taskly's Wireframes - Mobile New Task"/>
                </figure>
                <figure>
                  <figcaption>Mobile - New File</figcaption>
                  <img src="../medias/taskly/wireframes-mobile-05-new-file.png" alt="Taskly's Wireframes - Mobile New File"/>
                </figure>
                <figure>
                  <figcaption>Mobile - Add a Team Member</figcaption>
                  <img src="../medias/taskly/wireframes-mobile-06-add-team-member.png" alt="Taskly's Wireframes - Mobile Add a Team Member"/>
                </figure>
                <figure>
                  <figcaption>Tablet - Navigation</figcaption>
                  <img src="../medias/taskly/wireframes-tablet-01-navigation.png" alt="Taskly's Wireframes - Tablet Navigation"/>
                </figure>
                <figure>
                  <figcaption>Tablet - New Project</figcaption>
                  <img src="../medias/taskly/wireframes-tablet-02-new-project.png" alt="Taskly's Wireframes - Tablet New Project"/>
                </figure>
                <figure>
                  <figcaption>Tablet - New Task</figcaption>
                  <img src="../medias/taskly/wireframes-tablet-03-new-task.png" alt="Taskly's Wireframes - Tablet New Task"/>
                </figure>
                <figure>
                  <figcaption>Tablet - New File</figcaption>
                  <img src="../medias/taskly/wireframes-tablet-04-new-file.png" alt="Taskly's Wireframes - Tablet New File"/>
                </figure>
                <figure>
                  <figcaption>Desktop - Navigation</figcaption>
                  <img src="../medias/taskly/wireframes-desktop-01-navigation.png" alt="Taskly's Wireframes - Desktop Navigation"/>
                </figure>
                <figure>
                  <figcaption>Desktop - New Project</figcaption>
                  <img src="../medias/taskly/wireframes-desktop-02-new-project.png" alt="Taskly's Wireframes - Desktop New Project"/>
                </figure>
                <figure>
                  <figcaption>Desktop - New Task</figcaption>
                  <img src="../medias/taskly/wireframes-desktop-03-new-task.png" alt="Taskly's Wireframes - Desktop New Task"/>
                </figure>
                <figure>
                  <figcaption>Desktop - New File</figcaption>
                  <img src="../medias/taskly/wireframes-desktop-04-new-file.png" alt="Taskly's Wireframes - Desktop New File"/>
                </figure>
              </Slider>

              <h2>
                UI Design
              </h2>

              <p>
                I finally designed the User Interface for each screen of the mobile app, based on the wireframes. It resulted in the creation of a final prototype.
              </p>

              <img src="../medias/taskly/ui-demo.jpg" alt=""/>

              <p className="project__footer text-center">
                <a href="https://xd.adobe.com/view/3407161d-d084-400b-4519-c846437a2a9e/" target="_blank" className="btn">View mobile prototype</a>
              </p>
            </div>
          </div>
          <Navigation prev="kaliop" next="ux-ui-design"/>
          <Footer/>
        </div>
      </div>
    );
  }
});

export default Taskly;
