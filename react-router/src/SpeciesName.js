import React, {useEffect, useState} from 'react';
import './App.css';

function SpeciesName({ match }) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [items, setItems] = useState([]);

    const fetchItem = async () => {
        const data = await fetch(`https://swapi.dev/api/species/?search=${match.params.name}`);

        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };
    return(
        <div className="species-data">
            {items.map((item, index) => (
                <>
                <h1 key={index}>{item.name}</h1>
                <table>
                    <tbody>
                        <tr>
                            <td className='name'>Classification:</td>
                            <td className='value'>{item.classification}</td>
                        </tr>
                        <tr>
                            <td className='name'>Designation:</td>
                            <td className='value'>{item.designation}</td>
                        </tr>
                        <tr>
                            <td className='name'>Average Height:</td>
                            <td className='value'>{item.average_height}</td>
                        </tr>
                        <tr>
                            <td className='name'>Skin Colors:</td>
                            <td className='value'>{item.skin_colors}</td>
                        </tr>
                        <tr>
                            <td className='name'>Hair Colors:</td>
                            <td className='value'>{item.hair_colors}</td>
                        </tr>
                        <tr>
                            <td className='name'>Eye Colors:</td>
                            <td className='value'>{item.eye_colors}</td>
                        </tr>
                        <tr>
                            <td className='name'>Average Lifespan:</td>
                            <td className='value'>{item.average_lifespan}</td>
                        </tr>
                        <tr>
                            <td className='name'>Language:</td>
                            <td className='value'>{item.language}</td>
                        </tr>
                    </tbody>
                </table>
                </>
            ))}
        </div>
    );
}

export default SpeciesName;