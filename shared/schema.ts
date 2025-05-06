import mongoose from 'mongoose';
import { z } from 'zod';

// Define the user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  organization: { type: String },
  dob: { type: String },
  gender: { type: String },
  nationality: { type: String },
  state: { type: String },
  city: { type: String },
  memberSince: { type: String },
  lastLogin: { type: String }
}, { timestamps: true });

// Create and export the User model
export const User = mongoose.model('User', userSchema);

// Zod schema for user validation
export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  organization: z.string().optional()
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = mongoose.Document & {
  username: string;
  password: string;
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  dob?: string;
  gender?: string;
  nationality?: string;
  state?: string;
  city?: string;
  memberSince?: string;
  lastLogin?: string;
};
