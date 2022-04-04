import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='parent-class'>
            <h4 style={{ marginTop: '0px' }}>My Demo Site</h4>
            <nav>
                <NavLink className={({ isActive }) => isActive ? 'active-class' : 'unactive-class'} to='/home'>HOME</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-class' : 'unactive-class'} to='/review'>REVIEW</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-class' : 'unactive-class'} to='/dashboard'>DASHBOARD</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-class' : 'unactive-class'} to='/blogs'>BLOGS</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-class' : 'unactive-class'} to='/about'>ABOUT</NavLink>


            </nav>
        </div>
    );
};

export default Header;