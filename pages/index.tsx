import React from 'react';
import Layout from '../src/app/layout';
import '../src/app/globals.css'

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-0 mt-10">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          
          <div className="flex flex-col items-center justify-center h-400 mb-8 ">
            <h1 className="text-4xl font-bold">David Ávila</h1>
          </div>

          <p className="mb-4 text-justify">Greetings! I am <span className="font-semibold">David</span>, a web developer with a passion for creating dynamic digital experiences. Over the past two years, I&apos;ve immersed myself in web development, mastering technologies such as JavaScript, React, and Next.js. My explorations extend to Python and cloud computing. I also bring a master&apos;s degree in Finance Management to the table, providing me with a unique perspective on projects.</p>

          <p className="mb-4 text-justify">Outside of coding and finance, I am a polyglot fluent in five languages (es, fr, en, pr, de). This linguistic ability underscores my love for diverse cultures and effective communication. And when screens don&apos;t captivate me, the streets do, through the lens of my camera, as I engage in street photography.</p>

          <p className="text-justify">If you are searching for a full-stack developer with a diverse skill set, do take a moment to explore my portfolio. I am open to opportunities and collaborations. Let&apos;s envision and bring to life something remarkable together!</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
