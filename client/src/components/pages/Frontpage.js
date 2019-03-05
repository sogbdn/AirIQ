// THIS PAGE ISNT BEING USED


import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AirCard from '../partials/_AirCard'

export default class FrontPage extends Component {
  componentDidMount() {
    console.log("Frontpage Mounted");
  }
  render() {
    return (
      <div id="home">
      <Router>
      <Switch>
        <Route exact path='/' component={AirCard} />
        <Route path='/about' component={About} />
        <Route path='/concerns' component={About} />
      </Switch>
      </Router>
      </div>
    );
  }
}
