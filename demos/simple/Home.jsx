import React from 'react';
import { Link } from 'react-router';

var src = require('../../src/medias/taskly/preview-taskly.jpg');

const Home = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },

  render() {
    return (
      <div className="lorem" style={this.props.style}>
        <h1>{this.props.route.title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eaedem enim utilitates poterunt eas labefactare atque pervertere. Recte, inquit, intellegis. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Quae si potest singula consolando levare, universa quo modo sustinebit? An eum discere ea mavis, quae cum plane perdidiceriti nihil sciat? Duo Reges: constructio interrete.
        </p>
        <img src={src} alt=""/>
        <p>
          Suam denique cuique naturam esse ad vivendum ducem. Si qua in iis corrigere voluit, deteriora fecit. Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Audeo dicere, inquit. Iam id ipsum absurdum, maximum malum neglegi. Quid ergo hoc loco intellegit honestum? Multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae. Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et luxuriosus eodem modo. An potest cupiditas finiri? Quamvis enim depravatae non sint, pravae tamen esse possunt.
        </p>
        <div className="nav-arrows">
          <Link to={'ux-ui-design'} className="nav-arrow nav-arrow__prev">
            Prev
          </Link>
          <Link to={'taskly'} className="nav-arrow nav-arrow__next">
            Next
          </Link>
        </div>
      </div>
    );
  }
});

export default Home;
