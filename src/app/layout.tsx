import './globals.css';
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <div className="bg-white min-h-screen text-gray-800 flex flex-col">
        <Header />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

