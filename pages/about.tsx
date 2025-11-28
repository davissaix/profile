'use client';

import React from 'react';
import Layout from '../src/app/layout';
import Image from 'next/image';
import '../src/app/globals.css';
import { 
  AnimatedSection, 
  AnimatedText,
  TiltCard, 
  ScrollProgress,
  StaggeredContainer,
  StaggeredItem
} from '../src/app/components/animations';

const About: React.FC = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "JavaScript", "APIs"] },
    { category: "Finance", items: ["Portfolio Management", "Data Analysis", "Corporate Finance", "Value Investing"] },
    { category: "Languages", items: ["Spanish", "French", "English", "Portuguese", "German"] }
  ];

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "5", label: "Languages Spoken" },
    { value: "2+", label: "Years Web Development" }
  ];

  return (
    <Layout>
      <ScrollProgress />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <AnimatedSection direction="up">
            <p className="text-gray-600 text-sm font-medium mb-2">● ABOUT</p>
          </AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <AnimatedText text="About Me" delay={0.2} staggerDelay={0.05} />
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <AnimatedSection direction="left">
            <TiltCard tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.01}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/david.jpg"
                  alt="David Ávila"
                  fill
                  className="object-cover"
                />
              </div>
            </TiltCard>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I blend finance with technology. Over five years in the stock market, I&apos;ve honed skills in portfolio management and data analysis. Now, as an <span className="font-semibold">indie dev</span>, I&apos;m channeling this analytical mindset into building innovative web solutions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Currently launching <span className="font-semibold">PolylanGo</span>, a <span className="font-semibold">SaaS</span> combining my passion for languages and web development.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Fluent in 5 languages, I thrive in diverse environments. My unique perspective allows me to build solutions that are technically elegant, business-minded, and culturally aware. When not coding, I explore cultures and capture moments through street photography.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="up">
          <div className="bg-gray-50 p-12 rounded-2xl mb-20 shadow-inner">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
            <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.1}>
              {skills.map((skillGroup) => (
                <StaggeredItem key={skillGroup.category}>
                  <h3 className="font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, index) => (
                      <span 
                        key={skill} 
                        className="skill-tag bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-300 cursor-default"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          </div>
        </AnimatedSection>

        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {stats.map((stat) => (
            <StaggeredItem key={stat.label}>
              <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <p className="text-5xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </StaggeredItem>
          ))}
        </StaggeredContainer>
      </div>
    </Layout>
  );
};

export default About;
