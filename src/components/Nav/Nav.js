import React, { useState } from 'react';
import Li from '../Li/Li';
import { MenuIcon, XIcon } from '@heroicons/react/solid'


const Nav = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', route: '/home' },
        { id: 2, name: 'Contact', route: '/contact' },
        { id: 3, name: 'Copons', route: '/copons' },
        { id: 4, name: 'Save mone', route: '/save-money' },
    ]
    return (
        <nav className='bg-indigo-300'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute duration-300 ease-in bg-indigo-300 w-full md:static ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Li key={route.id} route={route}></Li>)
                }

            </ul>
        </nav>
    );
};

export default Nav;