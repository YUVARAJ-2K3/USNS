import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from 'multer';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { setupAuth } from './auth';
import { User } from "@shared/schema";

// Set up multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (_req, file, callback) => {
    // Accept only image files
    const allowedTypes = ['image/jpeg', 'image/png', 'image/dicom', 'application/dicom'];
    if (allowedTypes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Invalid file type. Only JPEG, PNG and DICOM images are allowed.'));
    }
  }
});

// For development, save uploaded files to a temporary directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadsDir = path.join(__dirname, '..', 'uploads');

// Create uploads directory if it doesn't exist
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Middleware to check if user is authenticated
const isAuthenticated = (req: Request, res: Response, next: Function) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication
  setupAuth(app);

  // API endpoint to segment nerves in ultrasound images
  app.post('/api/segment', isAuthenticated, upload.single('image'), async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      const file = req.file;
      const filename = Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname || 'image.jpg');
      const filepath = path.join(uploadsDir, filename);

      // Save the file temporarily for processing
      fs.writeFileSync(filepath, file.buffer);

      // In a production app, this would call the actual AI model
      // For now, we'll simulate processing with a mock result
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock segmentation result
      const result = {
        processedImageUrl: `/api/images/${filename}`, // In real app, this would be a processed image
        confidenceScore: 96, // Mock confidence score
      };

      return res.status(200).json(result);
    } catch (error) {
      console.error('Error processing image:', error);
      return res.status(500).json({ message: 'Error processing image' });
    }
  });

  // Endpoint to serve processed images
  app.get('/api/images/:filename', (req: Request, res: Response) => {
    try {
      const filename = req.params.filename;
      const filepath = path.join(uploadsDir, filename);
      
      if (fs.existsSync(filepath)) {
        return res.sendFile(filepath);
      } else {
        return res.status(404).json({ message: 'Image not found' });
      }
    } catch (error) {
      console.error('Error serving image:', error);
      return res.status(500).json({ message: 'Error serving image' });
    }
  });

  // User profile endpoint - protected
  app.get('/api/profile', isAuthenticated, (req: Request, res: Response) => {
    try {
      // Since we're using isAuthenticated middleware, we know req.user exists
      const user = req.user as User;
      const { password, ...userWithoutPassword } = user;
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      console.error('Error getting profile:', error);
      res.status(500).json({ message: 'Error getting profile' });
    }
  });
  
  // Update user profile - protected
  app.put('/api/profile', isAuthenticated, async (req: Request, res: Response) => {
    try {
      // Since we're using isAuthenticated middleware, we know req.user exists
      const user = req.user as User;
      const userId = user.id;
      const userData = req.body;
      
      // Don't allow password update through this endpoint
      if (userData.password) {
        delete userData.password;
      }
      
      const updatedUser = await storage.updateUser(userId, userData);
      
      const { password, ...userWithoutPassword } = updatedUser;
      res.status(200).json(userWithoutPassword);
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ message: 'Error updating profile' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
