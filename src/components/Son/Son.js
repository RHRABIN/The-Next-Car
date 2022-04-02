import React, { useContext } from 'react';
import { Ornaments } from '../Grandpa/Grandpa';

const Son = () => {
    const [ring, ornament, car, setCar] = useContext(Ornaments)
    return (
        <div style={{ border: '1px solid blue', margin: '10px' }}>
            <h2>Son</h2>
            <p>{ring}</p>
            <p>Orna:{ornament}</p>
            <p>Total Car: {car} <button onClick={() => setCar(car + 1)}>ADD</button></p>
        </div>
    );
};

export default Son;