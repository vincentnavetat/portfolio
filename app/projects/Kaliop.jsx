import React from 'react';
import { Link } from 'react-router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Slider from 'react-slick';

const Kaliop = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },

  render() {
    const tools = [
      'PHP',
      'eZ Publish',
      'Symfony2',
      'SASS',
      'jQuery'
    ];

    var sliderSettings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1
    };

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
                Kaliop is a digital agency employing over 160 people in 8 locations between France, the UK, Australia, Poland and Canada.
                I have worked as a Full-Stack Developer there between Oct 2013 and Dec 2015.
              </p>

              <Slider {...sliderSettings}>
                <figure>
                  <figcaption>Destination Sud de France</figcaption>
                  <img src="../medias/kaliop/project-tourism-south-france.jpg" alt="Project - Destination Sud de France"/>
                </figure>
                <figure>
                  <figcaption>Financial Times Live</figcaption>
                  <img src="../medias/kaliop/project-ft-live.jpg" alt="Project - Financial Times Live"/>
                </figure>
                <figure>
                  <figcaption>French Healthcare Portal</figcaption>
                  <img src="../medias/kaliop/project-healthcare-france.jpg" alt="Project - French Healthcare Portal"/>
                </figure>
                <figure>
                  <figcaption>Financial Times Live</figcaption>
                  <img src="../medias/kaliop/project-alcool-info-service.jpg" alt="Project - Alcool Info Service"/>
                </figure>
              </Slider>
            </div>
          </div>
          <Navigation prev="portfolio" next="taskly"/>
          <Footer/>
        </div>
      </div>
    );
  }
});

export default Kaliop;
