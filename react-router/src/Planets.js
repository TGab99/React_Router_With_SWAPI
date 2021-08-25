import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Planets() {
    useEffect(() => {
        fetchItems()
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://swapi.dev/api/planets/?page=1');

        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };

  return (
    <div className="name-container">
        {items.map((item, index) => (
          <p key={index}>
            <Link className='names-style' to={`/planets/${item.name}`}>
            {item.name}
            </Link>
          </p>
        ))}
    </div>
  );
}

export default Planets;
