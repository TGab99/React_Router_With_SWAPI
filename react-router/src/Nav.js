import './App.css';
import { Link } from 'react-router-dom';
import StarWarsLogo from './logo.svg';

function App() {
  return (
    <div className="nav-container">
        <nav>
            <Link className='logo-style' to='/'><img src={StarWarsLogo} alt="Star Wars Logo"/></Link>
            <ul className='nav-items'>
                <li>
                    <Link className='links-style' to="/people">People</Link>
                </li>
                <li>
                    <Link className='links-style' to="/planets">Planet</Link>
                </li>
                <li>
                    <Link className='links-style' to="/starships">Starships</Link>
                </li>
                <li>
                    <Link className='links-style' to="/vehicles">Vehicles</Link>
                </li>
                <li>
                    <Link className='links-style' to="/species">Species</Link>
                </li>
                <li>
                    <Link className='links-style' to="/films">Films</Link>
                </li>
            </ul>
        </nav>
        <hr/>
    </div>
  );
}

export default App;
