import React from 'react';
import Layout from '../src/app/layout';
import Image from 'next/image';
import '../src/app/globals.css'

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Multi-language Translator",
      desc: "A web app that translates text into multiple languages at once. Uses asynchronous API calls for translations.",
      image: "/polylango.png",
      link: "https://polylango.com/",
      gradient: "gradient-card-1",
      tags: ["React", "API", "Web"]
    },
    {
      id: 2,
      title: "3D Web Experience",
      desc: "An interactive 3D environment created with Three.js. Features GPU-accelerated graphics rendering with WebGL.",
      image: "/cora.png",
      link: "https://myhappyvalentine.netlify.app/",
      gradient: "gradient-card-2",
      tags: ["Three.js", "WebGL", "3D"]
    },
    {
      id: 3,
      title: "FlashTable",
      desc: "Create organized tables with custom columns. Perfect for polyglots comparing languages or for students mapping concepts, formulas, or definitions.",
      image: "/photography.png",
      link: "https://flashtable.polylango.com/",
      gradient: "gradient-card-3",
      tags: ["Tables", "Learning", "PolylanGo"]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm font-medium mb-2">● PORTFOLIO</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">My Works</h1>
          <p className="text-gray-600 text-lg">Crafted with passion and precision</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <a href={project.link} key={project.id} target="_blank" rel="noopener noreferrer">
              <div className={`project-card cursor-pointer h-64 mb-6 relative overflow-hidden ${project.gradient} flex items-center justify-center`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition scale-90"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h2>
              <p className="text-gray-600 text-base mb-4">{project.desc}</p>
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-gray-600 hover:text-gray-900 transition inline-flex items-center gap-2">
                View Project
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
