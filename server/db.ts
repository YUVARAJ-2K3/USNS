import mongoose from 'mongoose';
import { User } from '@shared/schema';

// Use a default local MongoDB URL if DATABASE_URL is not set
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/usns';

// Connect to MongoDB
mongoose.connect(DATABASE_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

export { User };