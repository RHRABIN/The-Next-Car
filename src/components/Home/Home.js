import React, { useState } from 'react';
import useShirt from '../../hooks/useShirt';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart'
import './Home.css'

const Home = () => {
    const [shirts, setShirts] = useShirt();

    const [carts, setCarts] = useState([]);
    // add handler for add to cart
    const handleToAddCart = (selectedItem) => {
        const exist = carts.find(cart => cart._id === selectedItem._id);
        if (!exist) {
            const newCart = [...carts, selectedItem];
            setCarts(newCart);
        }
        else {
            alert('Hey item already added.')
        }

    }
    // add handler for remove from cart
    const handleToRemove = (selectedItem) => {
        const rest = carts.filter(cart => cart._id !== selectedItem._id);
        setCarts(rest);
    }
    return (
        <div className='shirt-parent-container'>
            <div className='shirt-container'>
                {
                    shirts.map(shirt => <TShirt
                        key={shirt._id}
                        shirt={shirt}
                        handleToAddCart={handleToAddCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={carts}
                    handleToRemove={handleToRemove}
                ></Cart>
            </div>
        </div>

    );
};

export default Home;