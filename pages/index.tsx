import React from 'react';
import Layout from '../src/app/layout';
import Image from 'next/image';
import Link from 'next/link';
import '../src/app/globals.css'

const Home: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Multi-language Translator",
      desc: "A web app that translates text into multiple languages at once.",
      image: "/polylango.png",
      link: "https://polylango.com/",
      gradient: "gradient-card-1"
    },
    {
      id: 2,
      title: "3D Web Experience",
      desc: "An interactive 3D environment created with Three.js.",
      image: "/cora.png",
      link: "https://myhappyvalentine.netlify.app/",
      gradient: "gradient-card-2"
    },
    {
      id: 3,
      title: "FlashTable",
      desc: "Create organized tables with custom columns. Perfect for polyglots comparing languages or for students mapping concepts, formulas, or definitions.",
      image: "/photography.png",
      link: "https://flashtable.polylango.com/",
      gradient: "gradient-card-3"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
                Hello, I&apos;m David
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Full-Stack Developer crafting beautiful digital experiences
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/portfolio" className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium">
                  View Work
                </Link>
                <Link href="/contact" className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-lg hover:border-gray-900 transition font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <p className="text-gray-600 text-sm font-medium mb-2">● PORTFOLIO</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Works</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {projects.map((project) => (
                <Link href={project.link} key={project.id} target="_blank" rel="noopener noreferrer">
                  <div className={`project-card cursor-pointer h-80 mb-4 relative overflow-hidden ${project.gradient} flex items-center justify-center`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition scale-90"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.desc}</p>
                </Link>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/portfolio" className="text-gray-600 hover:text-gray-900 transition flex items-center gap-2">
                Check out More
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <p className="text-gray-600 text-sm font-medium mb-2">● ABOUT</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Who I Am</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                    <Image
                      src="/david.jpg"
                      alt="David Ávila"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    I&apos;m a passionate full-stack developer blending technical expertise with financial knowledge. Over two years of web development, I&apos;ve mastered JavaScript, React, Next.js, and more.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Fluent in 5 languages with a Master&apos;s in Finance Management. When not coding, you&apos;ll find me exploring cultures or capturing moments through street photography.
                  </p>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900 transition flex items-center gap-2 w-fit">
                    Learn More
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
