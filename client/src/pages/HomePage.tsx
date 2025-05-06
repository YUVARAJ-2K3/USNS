import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-secondary bg-opacity-70 rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Ultrasonic Nerve Segmentation</h1>
          <p className="text-lg text-center mb-8">Detects and highlights nerves from ultrasound images using AI</p>
          
          <div className="flex justify-center">
            <Link href="/upload">
              <Button className="bg-primary hover:bg-primary/90 text-dark font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                <span>Upload image</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="bg-white bg-opacity-90 rounded-xl shadow-md p-6 transition-transform hover:transform hover:scale-105">
          <div className="text-secondary text-center text-4xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12 mx-auto"
            >
              <path d="M12 2a2 2 0 0 0-2 2c0 .74.4 1.39 1 1.73V7h-3v2h3v2H7v2h3v2H5v2h3v2a2 2 0 1 0 2 2v-4h4a2 2 0 1 0 2-2h-4v-2h4a2 2 0 1 0 2-2h-4V9h3V7h-3V5.73c.6-.34 1-.99 1-1.73a2 2 0 0 0-2-2z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">AI-Powered Analysis</h3>
          <p className="text-center">Advanced neural networks for precision nerve detection in ultrasound images.</p>
        </div>
        
        {/* Feature 2 */}
        <div className="bg-white bg-opacity-90 rounded-xl shadow-md p-6 transition-transform hover:transform hover:scale-105">
          <div className="text-secondary text-center text-4xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12 mx-auto"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">Instant Results</h3>
          <p className="text-center">Get segmentation results within seconds, saving valuable clinical time.</p>
        </div>
        
        {/* Feature 3 */}
        <div className="bg-white bg-opacity-90 rounded-xl shadow-md p-6 transition-transform hover:transform hover:scale-105">
          <div className="text-secondary text-center text-4xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12 mx-auto"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">Easy Export</h3>
          <p className="text-center">Download processed images for reports, presentations, or patient records.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
