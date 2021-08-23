import './Nav.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <nav>
        <Link className='links-style' to='/'>Logo</Link>
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
  );
}

export default App;
