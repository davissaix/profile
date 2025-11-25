import React from 'react';
import Layout from '../src/app/layout';
import Image from 'next/image'; // Import the Image component

const Portfolio: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-0 mt-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Portfolio</h1>
        <div className="project-section grid md:grid-cols-3 gap-6">

          {/* Project 1: Multi-language Translator */}
          <div className="project bg-gray-100 p-6 rounded-lg shadow-md">
            <Image src="/trans.png" alt="Multi-language Translator Preview" width={500} height={300} className="w-full mb-4 rounded"/>
            <h2 className="text-2xl font-semibold mb-4">Multi-language Translator</h2>
            <p className="mb-4 text-justify">A web app that translates text into multiple languages at once. Uses asynchronous API calls for translations.</p>
            <a href="https://polylango.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
          </div>

          {/* Project 2: 3D Experience with Three.js */}
          <div className="project bg-gray-100 p-6 rounded-lg shadow-md">
            <Image src="/cora.png" alt="3D Web Experience Preview" width={500} height={300} className="mb-4 rounded"/>
            <h2 className="text-2xl font-semibold mb-4">3D Web Experience</h2>
            <p className="mb-4 text-justify">An interactive 3D environment created with Three.js. Features GPU-accelerated graphics rendering with WebGL.</p>
            <a href="https://myhappyvalentine.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
          </div>

          {/* Project 3: Svelte Music Visualizer */}
          <div className="project bg-gray-100 p-6 rounded-lg shadow-md">
            <Image src="/luces.png" alt="Svelte Music Visualizer Preview" width={500} height={300} className="mb-4 rounded"/>
            <h2 className="text-2xl font-semibold mb-4">Svelte Music Visualizer</h2>
            <p className="mb-4 text-justify">A Svelte project presenting a matrix of colors that can be synchronized to the rhythm of your favorite song, creating a dynamic visualization. </p>
            <a href="https://colorfulboxes.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
