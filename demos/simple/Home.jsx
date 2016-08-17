import React from 'react';
import { Link } from 'react-router';

var imgTaskly = require('../../src/medias/taskly/preview.jpg');
var imgUXUIDesign = require('../../src/medias/ux-ui-design/preview.jpg');

const Home = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },

  render() {
    return (
      <div className="projects" style={this.props.style}>
        <div className="project">
          <h2>Taskly</h2>
          <img src={imgTaskly} alt=""/>
        </div>
        <div className="project">
          <h2>UX/UI Design</h2>
          <img src={imgUXUIDesign} alt=""/>
        </div>
      </div>
    );
  }
});

export default Home;
