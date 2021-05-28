import React, { useEffect, useState } from 'react';
import './PeopleName.css';

function PeopleName( { match } ) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [items, setItems] = useState([]);

    const fetchItem = async () => {
        const data = await fetch(`https://swapi.dev/api/people/?search=${match.params.name}`);

        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };

    return(
        <div>
            {items.map((item, index) => (
                <>
                <h1 key={index}>{item.name}</h1>
                <hr/>
                <table>
                    <tbody>
                        <tr>
                            <td className='name'>Height:</td>
                            <td className='value'>{item.height}</td>
                        </tr>
                        <tr>
                            <td className='name'>Mass:</td>
                            <td className='value'>{item.mass}</td>
                        </tr>
                        <tr>
                            <td className='name'>Hair Color:</td>
                            <td className='value'>{item.hair_color}</td>
                        </tr>
                        <tr>
                            <td className='name'>Skin Color:</td>
                            <td className='value'>{item.skin_color}</td>
                        </tr>
                        <tr>
                            <td className='name'>Eye Color:</td>
                            <td className='value'>{item.eye_color}</td>
                        </tr>
                        <tr>
                            <td className='name'>Birth Year:</td>
                            <td className='value'>{item.birth_year}</td>
                        </tr>
                        <tr>
                            <td className='name'>Gender:</td>
                            <td className='value'>{item.gender}</td>
                        </tr>
                    </tbody>
                </table>
                </>
            ))}
        </div>
    );
}

export default PeopleName;