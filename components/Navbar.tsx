import React from 'react'

const Navbar = () => {
    return (
        <div className='w-[100%] bg-[#121f56] top-0 h-[12vh] text-white'>
            <div className='flex items-center justify-between w-[90%] mx-auto h-[100%]'>
                <h1 className='flex items-center'>Port
                    <span>folio</span>
                </h1>
                <ul className='flex items-center space-x-4 cursor-pointer'>               
                    <li className='nav-link'>Home</li>
                    <li className='nav-link'>Services</li>
                    <li className='nav-link'>About</li>
                    <li className='nav-link'>Project</li>
                    <li className='nav-link'>Blog</li>
                    <li className='nav-link'>Contact</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar