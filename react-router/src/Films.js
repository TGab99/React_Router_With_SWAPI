import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Films(){

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://swapi.dev/api/films');

        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    }
    return(
        <div>
            {items.map((item, index) => (
                <p key={index}>
                    <Link className='title-style' to={`/films/${item.title}`}>
                        {item.title}
                    </Link>
                </p>
            ))}
        </div>
    );
}

export default Films;