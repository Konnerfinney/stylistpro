'use client'
import React from 'react';
import SideLink from '../components/SideLink';
import Link from 'next/link';
import  SignInButton from './SignInButton';
import  SignOutButton from './SignOutButton'
import { useSession } from 'next-auth/react';



const Sidebar: React.FC = () => {
    const { data: session } = useSession();
  return (
    <aside className="w-64 bg-ash-gray p-6 flex flex-col justify-between">
      <div>
        <Link href="/dashboard">
            <div className="text-2xl font-bold mb-6">Stylist Pro</div>
        </Link>
        
        <nav>
          <ul className="space-y-4">
            <SideLink href="/overview">Overview</SideLink>
            <SideLink href="/transactions">Transactions</SideLink>
            <SideLink href="/customers">Customers</SideLink>
            <SideLink href="/reports">Reports</SideLink>
            <SideLink href="/settings">Settings</SideLink>
            <SideLink href="/developer">Developer</SideLink>
          </ul>
        </nav>
      </div>
      {session ? (
        <SignOutButton />
      ) : (
        <SignInButton />
      )}
    </aside>
  );
};

export default Sidebar;