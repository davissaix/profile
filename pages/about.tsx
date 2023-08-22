import React from 'react';
import Layout from '../src/app/layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-0 mt-10">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md m-4">
          <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
          <p className="mb-4 text-justify">From getting to grips with finance to exploring the world of web development, my journey blends logic with creativity. Over five years in the stock market, I've honed my skills in Portfolio Management, Corporate Finance, and Data Analysis. With a Value Investing strategy guiding me, I've excelled in managing risk and making data-driven decisions</p>
          <p className="mb-4 text-justify">Beyond the realm of web development, I have a keen interest in Data Science. I predominantly use Python, and I'm particularly captivated by language models, especially those like Lang Chain.</p>
          <p className="mb-4 text-justify">Today, I find myself at the exciting crossroads of finance and technology. I am eager to join a team that values a unique blend of number-crunching prowess and coding. If you're seeking someone skilled in web development and programming, let's connect. Together, we can craft solutions that are both functional and innovative.</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
