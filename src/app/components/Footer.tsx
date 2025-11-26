import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">David Ávila</h3>
            <p className="text-gray-600 text-sm">Full-stack developer crafting digital experiences.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900">Portfolio</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/david-a-paris/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm">LinkedIn</a>
              <a href="https://github.com/davissaix/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm">GitHub</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-xs text-gray-500">© 2025 DAVID ÁVILA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
