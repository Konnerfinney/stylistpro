// components/Navbar.js
'use client'
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { data: session } = useSession();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`text-white p-4 fixed top-0 w-full transition-all duration-300 ${isScrolled ? 'bg-hookers-green' : 'bg-ash-gray'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl font-bold cursor-pointer">Stylist Pro</h1>
                </Link>
                <nav>
                    <ul className="flex space-x-4 items-center">
                        <li><Link href="/about" className="hover:text-lion">About</Link></li>
                        <li><Link href="/features" className="hover:text-lion">Features</Link></li>
                        <li><Link href="/pricing" className="hover:text-lion">Pricing</Link></li>
                        <li><Link href="/contact" className="hover:text-lion">Contact</Link></li>
                        {session ? (
                            <>
                                <li><Link href="/dashboard" className="bg-lion text-white px-4 py-2 rounded hover: hover:bg-green-600 bg-opacity-90">Dashboard</Link></li>
                                <li><SignOutButton /></li>
                            </>
                        ) : (
                            <li><SignInButton /></li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;