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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum sine causa fieri nihil putandum est. Duo Reges: constructio interrete. Si stante, hoc natura videlicet vult, salvam esse se, quod concedimus; Hoc enim constituto in philosophia constituta sunt omnia. Ex rebus enim timiditas, non ex vocabulis nascitur. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Huius, Lyco, oratione locuples, rebus ipsis ielunior. Vos autem cum perspicuis dubia debeatis illustrare, dubiis perspicua conamini tollere. Non igitur de improbo, sed de callido improbo quaerimus, qualis Q. Ita relinquet duas, de quibus etiam atque etiam consideret.
              </p>
            </div>
          </div>
          <Navigation prev="ux-ui-design" next="taskly" />
          <Footer />
        </div>
      </div>
    );
  }
});

export default KashFlow;
