import React from 'react';
import Layout from '../src/app/layout';
import Image from 'next/image';  // Import the Image component

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-0 mt-10">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md m-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Let's talk</h1>
          <p className="mb-4 text-justify">If you're interested in collaborating or just want to chat, feel free to reach out! You can find more about my professional journey on the platforms below:</p>
        
          <div className="flex justify-center space-x-6 mt-4">
            {/* LinkedIn SVG Icon */}
            <a href="https://www.linkedin.com/in/david-a-paris/" target="_blank" rel="noopener noreferrer">
              <Image src="/linked.svg" width={32} height={32} alt="LinkedIn Icon" />
            </a>
          
            {/* GitHub SVG Icon */}
            <a href="https://github.com/davissaix/" target="_blank" rel="noopener noreferrer">
              <Image src="/github.svg" width={32} height={32} alt="GitHub Icon" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
