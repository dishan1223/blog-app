import React from 'react';
import { Link } from 'next-view-transitions';
import ModeToggle from "@/components/DarkLightToggle";
import Hamburger from './Hamburger';
import siteConfig from "@/lib/siteConfig"

import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
    return (
        <header className="w-full py-12 h-14 sticky top-0 border-b border-cyan-400 dark:border-orange-500/40 backdrop-blur-md">
            <div className='flex justify-between items-center h-full mx-auto w-[90%] md:w-[736px]'>
                
                <div>
                    <Link href={' / '}><h1 className='font-bold text-xl'>{siteConfig.title}</h1></Link>
                </div>
                
                <div className="flex items-center gap-5">
                    <ul className='gap-5 hidden font-ibm md:flex md:justify-center md:items-center'>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/posts'}>Posts</Link></li> 
                        <li><ModeToggle/></li>
                    </ul>
                    <div className='md:hidden flex gap-3'>
                        <ModeToggle/>
                        <Hamburger className="flex"/>
                    </div>
                    <div className="flex">
                        <SignedOut>
                            <div className='flex gap-5'>
                                <div className='dark:bg-white bg-slate-950 text-white dark:text-slate-950 py-1 px-2 rounded-md text-xs md:font-bold'>
                                    <SignInButton />
                                </div>
                            </div>
                        </SignedOut>
                        <SignedIn><UserButton /></SignedIn>
                    </div>
                    
                </div>
            </div>
        </header>
    );
};

export default Navbar;
