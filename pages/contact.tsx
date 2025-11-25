import React from 'react';
import Layout from '../src/app/layout';
import Image from 'next/image';

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm font-medium mb-2">● CONTACT</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Let&apos;s Connect</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out through any of my channels.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-12 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Connect on Social</h2>
            <div className="flex gap-6 justify-center">
              <a 
                href="https://www.linkedin.com/in/david-a-paris/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition"
              >
                <Image src="/linked.svg" width={20} height={20} alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/davissaix/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition"
              >
                <Image src="/github.svg" width={20} height={20} alt="GitHub" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">Available for freelance projects and full-time opportunities</p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Ready to collaborate
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
