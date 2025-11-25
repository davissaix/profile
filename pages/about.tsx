import React from 'react';
import Layout from '../src/app/layout';
import Image from 'next/image';

const About: React.FC = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "JavaScript", "APIs"] },
    { category: "Finance", items: ["Portfolio Management", "Data Analysis", "Corporate Finance", "Value Investing"] },
    { category: "Languages", items: ["Spanish", "French", "English", "Portuguese", "German"] }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm font-medium mb-2">● ABOUT</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">About Me</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src="/david.jpg"
              alt="David Ávila"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I blend finance with technology. Over five years in the stock market, I&apos;ve honed skills in portfolio management and data analysis. Now, I&apos;m an indie developer channeling this analytical mindset into building innovative web solutions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Currently, I&apos;m launching <span className="font-semibold">PolylanGo</span>, a SaaS platform that combines my passion for languages with web development expertise. PolylanGo makes translation seamless and accessible, bridging cultures through technology.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Fluent in 5 languages, I thrive in diverse environments. My unique perspective allows me to build solutions that are technically elegant, business-minded, and culturally aware. When not coding, I explore cultures and capture moments through street photography.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-2xl mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 mb-2">200+</p>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 mb-2">5</p>
            <p className="text-gray-600">Languages Spoken</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 mb-2">2+</p>
            <p className="text-gray-600">Years Web Development</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
