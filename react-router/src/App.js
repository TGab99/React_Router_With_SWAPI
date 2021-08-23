import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import People from './People';
import PeopleName from './PeopleName';
import Planets from './Planets';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/people' exact component={People}/>
        <Route path='/people/:name' component={PeopleName}/>
        <Route path='/planets' component={Planets}/>
      </Switch>
    </Router>
  );
}

export default App;
