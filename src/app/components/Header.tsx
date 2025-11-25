import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'portfolio' }) => {
  return (
    <header className="bg-white text-gray-900 py-6 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex justify-center space-x-8">
        <Link href="/" className={`flex items-center space-x-2 transition duration-200 ${currentPage === 'portfolio' ? '' : ''}`}>
          <span className="w-3 h-3 bg-black rounded-full"></span>
          <span className="font-medium text-sm">Portfolio</span>
        </Link>
        <Link href="/about" className="flex items-center space-x-2 transition duration-200">
          <span className="w-3 h-3 bg-black rounded-full"></span>
          <span className="font-medium text-sm">About</span>
        </Link>
        <Link href="/contact" className="flex items-center space-x-2 transition duration-200">
          <span className="w-3 h-3 bg-black rounded-full"></span>
          <span className="font-medium text-sm">Contact</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
