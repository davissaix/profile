import './globals.css';
import React, { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white min-h-screen text-gray-800 flex flex-col">
      <Header />
      <div className="container mx-auto px-4 md:px-0 mt-10 bg-gray-100 p-6 rounded-lg shadow-md flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

