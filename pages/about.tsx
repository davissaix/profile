import React from 'react';
import Layout from '../src/app/layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-0 mt-10">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md m-4">
          <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
          <p className="mb-4 text-justify">From getting to grips with finance to exploring the world of web development, my journey blends logic with creativity. Over five years in the stock market, I&apos;ve honed my skills in Portfolio Management, Corporate Finance, and Data Analysis. With a Value Investing strategy guiding me, I&apos;ve excelled in managing risk and making data-driven decisions.</p>
          <p className="mb-4 text-justify">Beyond the realm of web development, I am interested in single web application development, making simple web app to solve specific problems</p>
          <p className="mb-4 text-justify">Today, I find myself at the exciting crossroads of finance and technology. I am eager to join a team that values a unique blend of number-crunching prowess and coding. If you&apos;re seeking someone skilled in web development and programming, let&apos;s connect. Together, we can craft solutions that are both functional and innovative.</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
