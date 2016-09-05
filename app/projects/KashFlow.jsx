import React from 'react';
import { Link } from 'react-router';
import Footer from '../components/Footer';

const KashFlow = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },

  render() {
    const tools = [
      'UX Design'
    ];

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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum sine causa fieri nihil putandum est. Duo Reges: constructio interrete. Si stante, hoc natura videlicet vult, salvam esse se, quod concedimus; Hoc enim constituto in philosophia constituta sunt omnia. Ex rebus enim timiditas, non ex vocabulis nascitur. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Huius, Lyco, oratione locuples, rebus ipsis ielunior. Vos autem cum perspicuis dubia debeatis illustrare, dubiis perspicua conamini tollere. Non igitur de improbo, sed de callido improbo quaerimus, qualis Q. Ita relinquet duas, de quibus etiam atque etiam consideret.
              </p>
            </div>

            <div className="nav-arrows">
              <Link to={'ux-ui-design'} className="nav-arrow nav-arrow__prev">
                Prev
              </Link>
              <Link to={'taskly'} className="nav-arrow nav-arrow__next">
                Next
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
});

export default KashFlow;
