import React from 'react';
import Link from 'next/link';
import UserAvatar from './avatar';
import Hamburger from './Hamburger';

const Navbar = () => {
    return (
        <header className="w-full h-14 sticky top-0 backdrop-blur-3xl">
            <div className='flex justify-between items-center h-full mx-auto w-5/6'>
                <div>
                    <h1 className='font-bold text-2xl'>Blog</h1>
                </div>
                <div className="flex items-center gap-5">
                    <ul className='gap-5 hidden md:flex'>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/blogs'}>Blogs</Link></li>
                    </ul>
                    <UserAvatar /> {/* Use it with an uppercase name */}
                    <Hamburger />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
