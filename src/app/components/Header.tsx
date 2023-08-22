import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-6 shadow-md">
      <div className="container mx-auto">
        <nav className="flex justify-center space-x-4">
          <Link href="/" className="hover:text-gray-300 transition duration-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition duration-200">
            About
          </Link>
          <Link href="/portfolio" className="hover:text-gray-300 transition duration-200">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition duration-200">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
