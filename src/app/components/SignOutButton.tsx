'use client'
import { signOut } from 'next-auth/react';

const SignOutButton = () => {
    return (
        <button 
            className="px-4 py-2 bg-lion text-white rounded hover:bg-red-600 transition-colors duration-300"
            onClick={() => signOut({ callbackUrl: '/'})}
        >
            Sign Out
        </button>
    );
};

export default SignOutButton;