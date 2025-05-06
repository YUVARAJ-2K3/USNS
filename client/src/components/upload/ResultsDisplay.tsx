import React from 'react';
import { Button } from '@/components/ui/button';
import { downloadImage } from '@/lib/imageProcessor';

interface ResultsDisplayProps {
  originalImageUrl: string;
  processedImageUrl: string;
  confidenceScore: number;
  onReset: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  originalImageUrl,
  processedImageUrl,
  confidenceScore,
  onReset
}) => {
  const handleDownload = () => {
    downloadImage(processedImageUrl, 'segmented-nerve.png');
  };
  
  return (
    <div className="bg-secondary bg-opacity-70 rounded-xl shadow-lg p-6 mb-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Original Image */}
        <div className="bg-white bg-opacity-90 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Image uploaded</h3>
          <div className="bg-gray-100 rounded overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <img 
              src={originalImageUrl} 
              alt="Original ultrasound image" 
              className="object-contain w-full h-full" 
            />
          </div>
        </div>
        
        {/* Processed Image */}
        <div className="bg-white bg-opacity-90 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Output</h3>
            <Button 
              onClick={handleDownload}
              className="bg-accent text-white py-1 px-3 rounded hover:bg-accent/90 flex items-center gap-1"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4 mr-1"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </Button>
          </div>
          <div className="bg-gray-100 rounded overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <img 
              src={processedImageUrl} 
              alt="Processed image with highlighted nerves" 
              className="object-contain w-full h-full" 
            />
          </div>
        </div>
      </div>
      
      {/* Processing Controls & Information */}
      <div className="mt-6 bg-white bg-opacity-90 rounded-lg p-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-2 md:mb-0">
            <h4 className="font-semibold">Processing Information</h4>
            <p className="text-sm text-gray-600">
              Model: U-Net Neural Network | Confidence: <span>{confidenceScore}%</span>
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              className="bg-primary text-dark py-2 px-4 rounded hover:bg-primary/90 flex items-center"
              onClick={() => {/* Reprocess functionality would go here */}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-1"
              >
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
              </svg>
              Reprocess
            </Button>
            <Button 
              variant="outline"
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 flex items-center"
              onClick={onReset}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-1"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
