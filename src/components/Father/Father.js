import React, { useContext } from 'react';
import { Ornaments } from '../Grandpa/Grandpa';

const Father = () => {
    const [, , car, setCar] = useContext(Ornaments)
    return (
        <div style={{ border: '2px solid green ', margin: '10px' }}>
            <h2>Total Father Car: {car}</h2>
            <button onClick={() => setCar(car + 1)}>Buy Car from father</button>

        </div>
    );
};

export default Father;