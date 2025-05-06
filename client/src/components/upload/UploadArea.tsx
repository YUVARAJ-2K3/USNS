import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { isValidImageType } from '@/lib/imageProcessor';
import { cn } from '@/lib/utils';

interface UploadAreaProps {
  onFileSelect: (file: File) => void;
}

const UploadArea: React.FC<UploadAreaProps> = ({ onFileSelect }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (isValidImageType(file)) {
        onFileSelect(file);
      } else {
        alert('Please select a valid image file (TIF, PNG, JPG, NII.GZ, NIfTI).');
      }
    }
  }, [onFileSelect]);
  
  const { getRootProps, getInputProps, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/dicom': [],
      'application/dicom': []
    },
    multiple: false,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
    onDropAccepted: () => setIsDragActive(false)
  });
  
  return (
    <div
      {...getRootProps()}
      className={cn(
        "upload-container bg-white bg-opacity-90 rounded-lg p-8 text-center",
        isDragActive && "active",
        isDragReject && "border-red-500"
      )}
    >
      <div className="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary w-16 h-16 mx-auto mb-2"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
        <h3 className="text-xl font-semibold">Drag and Drop</h3>
        <p className="text-gray-600">or</p>
      </div>
      
      <Button variant="outline" className="bg-primary hover:bg-primary/90 text-dark">
        Browse
        <input {...getInputProps()} className="hidden" />
      </Button>
      
      <p className="mt-4 text-sm text-gray-600">Supported formats: TIF, PNG, JPG, NII.GZ, NIfTI</p>
    </div>
  );
};

export default UploadArea;
