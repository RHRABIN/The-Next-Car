import React from 'react';
import './TShirt.css'
const TShirt = ({ handleToAddCart, shirt }) => {
    const { price, picture, name } = shirt;
    return (
        <div className='shirt-containers'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleToAddCart(shirt)}>Add to cart</button>
        </div>
    );
};

export default TShirt;