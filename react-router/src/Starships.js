import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Starships(){

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(`https://swapi.dev/api/starships/?page=1`);

        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    }

    return(
        <div className="name-container">
            {items.map((item, index) => (
                <p key={index}>
                    <Link className='names-style' to={`/starships/${item.name}`}>
                        {item.name}
                    </Link>
                </p>
            ))}
        </div>
    );
}

export default Starships;