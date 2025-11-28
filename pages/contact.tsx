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
  MagneticButton
} from '../src/app/components/animations';

const Contact: React.FC = () => {
  return (
    <Layout>
      <ScrollProgress />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <AnimatedSection direction="up">
            <p className="text-gray-600 text-sm font-medium mb-2">● CONTACT</p>
          </AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <AnimatedText text="Let's Connect" delay={0.2} staggerDelay={0.04} />
          </h1>
          <AnimatedSection delay={0.6} direction="up">
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out through any of my channels.
            </p>
          </AnimatedSection>
        </div>

        <div className="max-w-2xl mx-auto">
          <AnimatedSection delay={0.8} direction="up">
            <TiltCard tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.01}>
              <div className="bg-gray-50 rounded-2xl p-12 mb-12 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Connect on Social</h2>
                <div className="flex gap-6 justify-center">
                  <MagneticButton strength={0.2}>
                    <a 
                      href="https://www.linkedin.com/in/david-a-paris/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <Image src="/linked.svg" width={20} height={20} alt="LinkedIn" />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                  </MagneticButton>
                  <MagneticButton strength={0.2}>
                    <a 
                      href="https://github.com/davissaix/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <Image src="/github.svg" width={20} height={20} alt="GitHub" />
                      <span className="font-medium">GitHub</span>
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </TiltCard>
          </AnimatedSection>

          <AnimatedSection delay={1} direction="up">
            <div className="text-center">
              <p className="text-gray-600 mb-6">Available for freelance projects and full-time opportunities</p>
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                </span>
                Ready to collaborate
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
