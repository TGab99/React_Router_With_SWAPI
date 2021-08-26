import React, { useEffect, useState } from "react";
import './App.css';

function PlanetsName({ match }) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [items, setItems] = useState([]);

    const fetchItem = async () => {
        const data = await fetch(`https://swapi.dev/api/planets/?search=${match.params.name}`);

        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    }

    return(
        <div className="planets-data">
            {items.map((item, index) => (
                <>
                <h1 key={index}>{item.name}</h1>
                <table>
                    <tbody>
                        <tr>
                            <td className='name'>Rotation Period:</td>
                            <td className='value'>{item.rotation_period}</td>
                        </tr>
                        <tr>
                            <td className='name'>Orbital Period:</td>
                            <td className='value'>{item.orbital_period}</td>
                        </tr>
                        <tr>
                            <td className='name'>Diameter:</td>
                            <td className='value'>{item.diameter}</td>
                        </tr>
                        <tr>
                            <td className='name'>Climate:</td>
                            <td className='value'>{item.climate}</td>
                        </tr>
                        <tr>
                            <td className='name'>Gravity:</td>
                            <td className='value'>{item.gravity}</td>
                        </tr>
                        <tr>
                            <td className='name'>Terrain:</td>
                            <td className='value'>{item.terrain}</td>
                        </tr>
                        <tr>
                            <td className='name'>Surface Water:</td>
                            <td className='value'>{item.surface_water}</td>
                        </tr>
                        <tr>
                            <td className='name'>Population:</td>
                            <td className='value'>{item.population}</td>
                        </tr>
                    </tbody>
                </table>
                </>
            ))}
        </div>
    );
}

export default PlanetsName;