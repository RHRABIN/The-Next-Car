import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='bg-purple-500'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <div>
                <ul className={`md:flex justify-center bg-purple-500 md:h-8 items-center w-full absolute md:static duration-300 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                    <li className='md:mr-10 hover:text-fuchsia-200'><Link to='/'>Home</Link></li>
                    <li className='md:mr-10 hover:text-fuchsia-200' ><Link to='/contact'>Contuct</Link></li>
                    {/* <li className='md:mr-10 hover:text-fuchsia-200'><Link to='/meal'>Meal</Link></li> */}
                    <li className='md:mr-10 hover:text-fuchsia-200'><Link to='/resturant'>Resturant</Link></li>
                    <li className='md:mr-10 hover:text-fuchsia-200'><Link to='/about'>About us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;