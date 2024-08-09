import React from 'react';
import Link from 'next/link';

interface SideLinkProps {
  href: string;
  children: React.ReactNode;
}

const SideLink: React.FC<SideLinkProps> = ({ href, children }) => {
  return (
    <li>
      <Link href={href} className="block py-2 px-4 text-black-olive hover:bg-lion hover:text-white rounded transition-colors duration-200">
        {children}
      </Link>
    </li>
  );
};

export default SideLink;
