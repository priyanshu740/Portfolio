import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(prevState => !prevState);
    };

    const closeToggleMenu = () => {
        setShowMenu(false);
    }

    return (
        <div className='w-full bg-[#121f56] top-0 h-[12vh] text-white'>
            <div className={`relative flex items-center justify-between w-[90%] mx-auto h-full transition-transform duration-300 transform ${showMenu && 'w-[100%]'}`}>
                <h1 className='flex items-center'>Port
                    <span>folio</span>
                </h1>
                <ul className={`md:flex items-center space-x-4 ${showMenu ? 'flex flex-col bars-menu' : 'hidden md:flex'}`}>
                    <li className='nav-link'>Home</li>
                    <li className='nav-link'>About</li>
                    <li className='nav-link'>Project</li>
                    <li className='nav-link'>Blog</li>
                    <li className='nav-link'>Contact</li>
                </ul>
                <div className='md:hidden'>
                    <Bars3Icon className='h-[2rem] cursor-pointer text-yellow-200' onClick={toggleMenu} />
                </div>
                {
                    showMenu &&
                    <XMarkIcon className={`bg-yellow-300 absolute top-5 cursor-pointer right-3 bottom-0 h-[2rem] transition-transform duration-900 transform hover:scale-110 
                     ${showMenu ? 'translate-x-0 w-[100%]' : 'translate-x-full'}`} onClick={closeToggleMenu} />
                }
            </div>
        </div>
    );
};

export default Navbar;
