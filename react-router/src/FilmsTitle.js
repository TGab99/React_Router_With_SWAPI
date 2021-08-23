import React, {useEffect, useState} from 'react';

function FilmsTitle({ match }) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [items, setItems] = useState([]);

    const fetchItem = async () => {
        const data = await fetch(`https://swapi.dev/api/films/?search=${match.params.title}`);

        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };

    return(
        <div>
            {items.map((item, index) => (
                <>
                <h1 key={index}>{item.title}</h1>
                <hr/>
                <table>
                    <tbody>
                        <tr>
                            <td className='name'>Episode Id:</td>
                            <td className='value'>{item.episode_id}</td>
                        </tr>
                        <tr>
                            <td className='name'>Director:</td>
                            <td className='value'>{item.director}</td>
                        </tr>
                        <tr>
                            <td className='name'>Producer:</td>
                            <td className='value'>{item.producer}</td>
                        </tr>
                        <tr>
                            <td className='name'>Release Date:</td>
                            <td className='value'>{item.release_date}</td>
                        </tr>
                    </tbody>
                </table>
                </>
            ))}
        </div>
    );
}

export default FilmsTitle;