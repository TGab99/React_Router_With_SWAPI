import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Vehicles() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(`https://swapi.dev/api/vehicles/?page=1`);

        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };

    return(
        <div>
            {items.map((item, index) => (
                <p key={index}>
                    <Link className='name-stlye' to={`/vehicles/${item.name}`}>
                        {item.name}
                    </Link>
                </p>
            ))}
        </div>
    );
}

export default Vehicles;