import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import People from './People';
import PeopleName from './PeopleName';
import Planets from './Planets';
import PlanetsName from './PlanetsName';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/people' exact component={People}/>
        <Route path='/people/:name' component={PeopleName}/>
        <Route path='/planets' exact component={Planets}/>
        <Route path='/planets/:name' component={PlanetsName}/>
      </Switch>
    </Router>
  );
}

export default App;
