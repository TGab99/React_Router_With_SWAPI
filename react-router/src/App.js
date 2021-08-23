import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import People from './People';
import PeopleName from './PeopleName';
import Planets from './Planets';
import PlanetsName from './PlanetsName';
import Starships from './Starships';
import StarshipsName from './StarshipsName';
import Vehicles from './Vehicles';
import VehiclesName from './VehiclesName';
import Species from './Species';
import SpeciesName from './SpeciesName';
import Films from './Films';

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
        <Route path='/starships' exact component={Starships}/>
        <Route path='/starships/:name' component={StarshipsName}/>
        <Route path='/vehicles' exact component={Vehicles}/>
        <Route path='/vehicles/:name' component={VehiclesName}/>
        <Route path='/species' exact component={Species}/>
        <Route path='/species/:name' component={SpeciesName}/>
        <Route path='/films' component={Films}/>
      </Switch>
    </Router>
  );
}

export default App;
