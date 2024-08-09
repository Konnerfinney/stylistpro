'use client'
import { signIn } from 'next-auth/react';

const SignInButton = () => {
    return (
        <button 
            className="px-4 py-2 bg-lion text-white rounded hover:bg-green-600 transition-colors duration-300"
            onClick={() => signIn('google')}
        >
            Sign In
        </button>
    );
};

export default SignInButton;