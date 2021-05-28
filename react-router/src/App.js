import Nav from './Nav';
import Home from './Home';
import People from './People';
import PeopleName from './PeopleName';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/people' exact component={People}/>
        <Route path='/people/:name' component={PeopleName}/>
      </Switch>
    </Router>
  );
}

export default App;
