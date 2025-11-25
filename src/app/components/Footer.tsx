import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-bold">DA</div>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">© 2024 DAVID ÁVILA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
