import React from 'react';
import Layout from '../src/app/layout';
import Image from 'next/image';
import Link from 'next/link';
import '../src/app/globals.css'

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content */}
              <div className="flex flex-col justify-center">
                <div className="mb-8">
                  <p className="text-blue-600 font-semibold text-sm md:text-base mb-2">WELCOME</p>
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                    Hello, I&apos;m <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">David</span>
                  </h1>
                  <p className="text-xl text-gray-600 font-light">Full-Stack Developer & Polyglot</p>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  I create dynamic digital experiences with JavaScript, React, and Next.js. With a master&apos;s degree in Finance Management and fluency in five languages, I bring unique perspectives to every project.
                </p>

                <div className="flex gap-4 mb-8">
                  <Link href="/portfolio" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                    View My Work
                  </Link>
                  <Link href="/contact" className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-semibold">
                    Get In Touch
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">200+</p>
                    <p className="text-gray-600 text-sm">Projects Done</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">5</p>
                    <p className="text-gray-600 text-sm">Languages</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">2+</p>
                    <p className="text-gray-600 text-sm">Years Exp.</p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <Image
                    src="/david.jpg"
                    alt="David Ávila"
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="flex justify-center py-8">
          <div className="text-center text-gray-500">
            <p className="text-sm mb-2">Scroll down to explore</p>
            <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* About Preview */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I&apos;m a passionate full-stack developer with a unique blend of technical expertise and finance knowledge. Over the past two years, I&apos;ve immersed myself in web development, mastering modern technologies and creating scalable solutions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My journey spans across JavaScript, React, Next.js, Python, and cloud computing. When I&apos;m not coding, you&apos;ll find me exploring diverse cultures through language or capturing moments through street photography.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'Finance Mgmt', '5 Languages'].map((skill) => (
                    <div key={skill} className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700">
                      {skill}
                    </div>
                  ))}
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
