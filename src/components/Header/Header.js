import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>


            <nav className='nav-class'>
                <Link to={'/home'}>Home</Link>
                <Link to={'/cart'}>Cart</Link>
                <Link to={'/order'}>Order</Link>
                <Link to={'/grandpa'}>Grandpa</Link>

            </nav>

            <h1>this is Header</h1>
        </div>
    );
};

export default Header;