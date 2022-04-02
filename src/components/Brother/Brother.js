import React, { useContext } from 'react';
import { Ornaments } from '../Grandpa/Grandpa';
import Son from '../Son/Son';

const Brother = () => {
    const [, , car] = useContext(Ornaments)
    return (
        <div style={{ border: '1px solid red', margin: '10px' }}>
            <h3>brother has car: {car}</h3>
            <Son></Son>
        </div>
    );
};

export default Brother;