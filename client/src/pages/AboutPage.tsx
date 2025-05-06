import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-secondary bg-opacity-70 rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-8">About</h1>
          
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">👥</span>
              <h2 className="text-2xl font-semibold">Who We Are</h2>
            </div>
            <p className="mb-4">
              We are a team of passionate innovators aiming to bridge the gap between medical imaging and artificial
              intelligence. Our primary goal is to create smarter tools for faster, more accurate diagnoses, making
              healthcare more accessible and efficient.
            </p>
            <hr className="border-gray-300 my-4" />
          </div>
          
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🎯</span>
              <h2 className="text-2xl font-semibold">Our Mission</h2>
            </div>
            <p className="mb-4">To develop AI-powered medical imaging tools that:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Enhance diagnosis speed and precision</li>
              <li>Reduce manual errors</li>
              <li>Empower healthcare professionals with smart, user-friendly solutions</li>
            </ul>
            <hr className="border-gray-300 my-4" />
          </div>
          
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">❓</span>
              <h2 className="text-2xl font-semibold">What We Do</h2>
            </div>
            <p className="mb-4">
              This project focuses on nerve segmentation from ultrasound images using the U-Net convolutional neural
              network architecture. The system takes an ultrasound scan as input and automatically identifies and
              segments the nerve region.
            </p>
            <hr className="border-gray-300 my-4" />
          </div>
          
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">💡</span>
              <h2 className="text-2xl font-semibold">Why It Matters</h2>
            </div>
            <p>
              Manual segmentation is time-consuming and prone to errors. Our tool offers a fast, automated solution to
              segment nerves in ultrasound images — potentially improving the workflow for radiologists and medical
              researchers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
