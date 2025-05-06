// Simple image processing utility for working with the uploaded images
// In a production app, this would interact with the backend AI system

/**
 * Process an image file and return a data URL
 */
export async function readImageFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to read image file'));
      }
    };
    reader.onerror = () => {
      reject(new Error('Error reading file'));
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Check if file is a valid image type
 */
export function isValidImageType(file: File): boolean {
  const validTypes = ['image/jpeg', 'image/png', 'image/dicom', 'application/dicom'];
  return validTypes.includes(file.type);
}

/**
 * Download image from a data URL
 */
export function downloadImage(dataUrl: string, filename: string = 'segmented-nerve.png'): void {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
