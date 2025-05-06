import { apiRequest } from './queryClient';

/**
 * Interface for the AI segmentation response
 */
export interface SegmentationResult {
  processedImageUrl: string;
  confidenceScore: number;
}

/**
 * Send an image to the server for nerve segmentation
 * @param imageFile The ultrasound image file to process
 */
export async function segmentNerve(imageFile: File): Promise<SegmentationResult> {
  // Create form data to send the image
  const formData = new FormData();
  formData.append('image', imageFile);
  
  try {
    // Send the image to the API
    const response = await fetch('/api/segment', {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });
    
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error in nerve segmentation:', error);
    throw error;
  }
}

/**
 * Mock function to simulate AI processing for development
 * This will be replaced by the actual API call in production
 */
export async function mockSegmentNerve(imageDataUrl: string): Promise<SegmentationResult> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Create a mock processed image - in a real app this would be the result from the AI
  // For demonstration purposes, we'll create a simple mock result
  const mockResult: SegmentationResult = {
    processedImageUrl: createMockSegmentation(imageDataUrl),
    confidenceScore: 96,
  };
  
  return mockResult;
}

/**
 * Create a mock segmentation for demonstration
 * In production, this would be replaced by the actual AI processing
 */
function createMockSegmentation(imageDataUrl: string): string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    throw new Error('Could not create canvas context');
  }
  
  // Load the original image
  const img = new Image();
  img.src = imageDataUrl;
  
  return new Promise<string>((resolve) => {
    img.onload = () => {
      // Set canvas size to match image
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw the original image
      ctx.drawImage(img, 0, 0);
      
      // Create a simple mock segmentation - a white blob in the center
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.beginPath();
      
      // Create an irregular shape to simulate nerve segmentation
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      ctx.moveTo(centerX, centerY - 30);
      ctx.bezierCurveTo(
        centerX + 40, centerY - 40, 
        centerX + 60, centerY, 
        centerX + 40, centerY + 40
      );
      ctx.bezierCurveTo(
        centerX + 20, centerY + 60, 
        centerX - 20, centerY + 60, 
        centerX - 40, centerY + 40
      );
      ctx.bezierCurveTo(
        centerX - 60, centerY, 
        centerX - 40, centerY - 40, 
        centerX, centerY - 30
      );
      
      ctx.closePath();
      ctx.fill();
      
      // Add a grid to the background (black with green lines)
      // Create the grid canvas
      const gridCanvas = document.createElement('canvas');
      gridCanvas.width = canvas.width;
      gridCanvas.height = canvas.height;
      const gridCtx = gridCanvas.getContext('2d');
      
      if (gridCtx) {
        // Draw black background
        gridCtx.fillStyle = 'black';
        gridCtx.fillRect(0, 0, gridCanvas.width, gridCanvas.height);
        
        // Draw grid lines
        gridCtx.strokeStyle = 'rgba(0, 255, 0, 0.3)';
        gridCtx.lineWidth = 1;
        
        // Horizontal lines
        const stepY = gridCanvas.height / 10;
        for (let y = 0; y <= gridCanvas.height; y += stepY) {
          gridCtx.beginPath();
          gridCtx.moveTo(0, y);
          gridCtx.lineTo(gridCanvas.width, y);
          gridCtx.stroke();
          
          // Add y-axis labels
          if (y > 0) {
            gridCtx.fillStyle = 'rgba(0, 255, 0, 0.7)';
            gridCtx.font = '10px Arial';
            gridCtx.fillText(`${Math.round(y)}`, 5, y - 2);
          }
        }
        
        // Vertical lines
        const stepX = gridCanvas.width / 10;
        for (let x = 0; x <= gridCanvas.width; x += stepX) {
          gridCtx.beginPath();
          gridCtx.moveTo(x, 0);
          gridCtx.lineTo(x, gridCanvas.height);
          gridCtx.stroke();
          
          // Add x-axis labels on bottom
          if (x > 0) {
            gridCtx.fillStyle = 'rgba(0, 255, 0, 0.7)';
            gridCtx.font = '10px Arial';
            gridCtx.fillText(`${Math.round(x)}`, x + 2, gridCanvas.height - 5);
          }
        }
        
        // Draw the white blob on grid
        gridCtx.fillStyle = 'white';
        gridCtx.beginPath();
        gridCtx.moveTo(centerX, centerY - 30);
        gridCtx.bezierCurveTo(
          centerX + 40, centerY - 40, 
          centerX + 60, centerY, 
          centerX + 40, centerY + 40
        );
        gridCtx.bezierCurveTo(
          centerX + 20, centerY + 60, 
          centerX - 20, centerY + 60, 
          centerX - 40, centerY + 40
        );
        gridCtx.bezierCurveTo(
          centerX - 60, centerY, 
          centerX - 40, centerY - 40, 
          centerX, centerY - 30
        );
        gridCtx.closePath();
        gridCtx.fill();
        
        resolve(gridCanvas.toDataURL('image/png'));
      } else {
        resolve(canvas.toDataURL('image/png'));
      }
    };
  });
}
