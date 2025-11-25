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
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

