import React, { useState } from 'react';
import UploadArea from '@/components/upload/UploadArea';
import ResultsDisplay from '@/components/upload/ResultsDisplay';
import { readImageFile } from '@/lib/imageProcessor';
import { mockSegmentNerve, segmentNerve } from '@/lib/nerveSegmentation';
import { useToast } from '@/hooks/use-toast';

const UploadPage: React.FC = () => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [originalImageUrl, setOriginalImageUrl] = useState<string>('');
  const [processedImageUrl, setProcessedImageUrl] = useState<string>('');
  const [confidenceScore, setConfidenceScore] = useState<number>(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleFileSelect = async (file: File) => {
    try {
      setIsProcessing(true);
      setSelectedFile(file);
      
      // Read the file and display it
      const imageUrl = await readImageFile(file);
      setOriginalImageUrl(imageUrl);
      
      // Process the image with the AI model
      try {
        // In production, this would call the actual API
        // const result = await segmentNerve(file);
        
        // For development, use the mock function
        const result = await mockSegmentNerve(imageUrl);
        
        setProcessedImageUrl(result.processedImageUrl);
        setConfidenceScore(result.confidenceScore);
        setShowResults(true);
      } catch (error) {
        toast({
          title: "Processing Error",
          description: "Failed to process the image. Please try again.",
          variant: "destructive"
        });
        console.error("Error processing image:", error);
      }
    } catch (error) {
      toast({
        title: "File Error",
        description: "Failed to read the image file. Please try a different file.",
        variant: "destructive"
      });
      console.error("Error reading file:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setOriginalImageUrl('');
    setProcessedImageUrl('');
    setConfidenceScore(0);
    setSelectedFile(null);
    setShowResults(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Upload Area - Show when no file is selected */}
        {!showResults && (
          <div className="bg-secondary bg-opacity-70 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">Upload Ultrasound Image</h2>
            <UploadArea onFileSelect={handleFileSelect} />
          </div>
        )}
        
        {/* Results Area - Show after processing */}
        {showResults && (
          <ResultsDisplay
            originalImageUrl={originalImageUrl}
            processedImageUrl={processedImageUrl}
            confidenceScore={confidenceScore}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
};

export default UploadPage;
