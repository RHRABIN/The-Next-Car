import React, { createContext, useState } from 'react';
import Brother from '../Brother/Brother';
import Father from '../Father/Father';
import './Granpa.css'
export const Ornaments = createContext();
const Grandpa = () => {
    const [car, setCar] = useState(1);
    const ring = "Golden";
    const ornament = 'Curi,Cosmetics';
    const addCar = () => { setCar(car + 1) };
    return (
        <div className='parent-class'>
            <Ornaments.Provider value={[ornament, ring, car, setCar]}>
                <h1>Total Car: {car}</h1>
                <button onClick={() => addCar(car + 1)}>Buy new Car</button>

                <Father ></Father>
                <Brother></Brother>

            </Ornaments.Provider>
        </div>
    );
};

export default Grandpa;