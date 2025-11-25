import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white text-gray-900 py-4 shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          DA
        </Link>
        <nav className="flex justify-center space-x-8">
          <Link href="/" className="hover:text-blue-600 transition duration-200 font-medium">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition duration-200 font-medium">
            About
          </Link>
          <Link href="/portfolio" className="hover:text-blue-600 transition duration-200 font-medium">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition duration-200 font-medium">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
