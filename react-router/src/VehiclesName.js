import React, {useEffect, useState} from 'react';
import './App.css';

function VehiclesName( { match } ){

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [items, setItems] = useState([]);

    const fetchItem = async () => {
        const data = await fetch(`https://swapi.dev/api/vehicles/?search=${match.params.name}`);

        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };
    return(
        <div className="vehicles-data">
            {items.map((item, index) => (
                <>
                <h1 key={index}>{item.name}</h1>
                <table>
                    <tbody>
                        <tr>
                            <td className='name'>Model:</td>
                            <td className='value'>{item.model}</td>
                        </tr>
                        <tr>
                            <td className='name'>Manufacturer:</td>
                            <td className='value'>{item.manufacturer}</td>
                        </tr>
                        <tr>
                            <td className='name'>Cost In Credits:</td>
                            <td className='value'>{item.cost_in_credits}</td>
                        </tr>
                        <tr>
                            <td className='name'>Length:</td>
                            <td className='value'>{item.length}</td>
                        </tr>
                        <tr>
                            <td className='name'>Max Atmosphering Speed:</td>
                            <td className='value'>{item.max_atmosphering_speed}</td>
                        </tr>
                        <tr>
                            <td className='name'>Crew:</td>
                            <td className='value'>{item.crew}</td>
                        </tr>
                        <tr>
                            <td className='name'>Passengers:</td>
                            <td className='value'>{item.passengers}</td>
                        </tr>
                        <tr>
                            <td className='name'>Cargo Capacity:</td>
                            <td className='value'>{item.cargo_capacity}</td>
                        </tr>
                        <tr>
                            <td className='name'>Consumables:</td>
                            <td className='value'>{item.consumables}</td>
                        </tr>
                        <tr>
                            <td className='name'>Vehicle Class:</td>
                            <td className='value'>{item.vehicle_class}</td>
                        </tr>
                    </tbody>
                </table>
                </>
            ))}
        </div>
    );
}

export default VehiclesName;