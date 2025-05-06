import { User, type InsertUser } from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";
import MongoStore from "connect-mongo";
import { User as UserModel } from "./db";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: string, userData: Partial<User>): Promise<User>;
  sessionStore: session.Store;
}

// Memory storage implementation
const MemoryStore = createMemoryStore(session);

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  sessionStore: session.Store;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
    
    // Add a demo user
    this.users.set('1', {
      _id: '1',
      username: 'dr.yuvaraj',
      password: 'password123',
      name: 'Dr. S. Yuvaraj',
      email: 'yuvaraj@gmail.com',
      phone: '123567890',
      organization: 'Yuvaraj Hospitals',
      dob: '09.06.2003',
      gender: 'Male',
      nationality: 'Indian',
      state: 'TamilNadu',
      city: 'Chennai',
      memberSince: 'January 17, 2023',
      lastLogin: 'Today at 10:56 am'
    } as User);
    this.currentId = 2;

    // Initialize the session store
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000, // prune expired entries every 24h
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId.toString();
    this.currentId++;
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const user: User = { 
      _id: id,
      ...insertUser, 
      name: insertUser.name || null,
      email: insertUser.email || null,
      phone: insertUser.phone || null,
      organization: insertUser.organization || null,
      dob: null,
      gender: null,
      nationality: null,
      state: null,
      city: null, 
      memberSince: formattedDate,
      lastLogin: 'Just now'
    } as User;
    
    this.users.set(id, user);
    return user;
  }

  async updateUser(id: string, userData: Partial<User>): Promise<User> {
    const user = this.users.get(id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    
    const updatedUser = { ...user, ...userData };
    this.users.set(id, updatedUser);
    return updatedUser;
  }
}

// Database storage implementation
export class DatabaseStorage implements IStorage {
  sessionStore: session.Store;

  constructor() {
    // Create session store with MongoDB
    this.sessionStore = MongoStore.create({
      mongoUrl: process.env.DATABASE_URL,
      collectionName: 'sessions'
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return UserModel.findById(id).exec();
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return UserModel.findOne({ username }).exec();
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const user = new UserModel({
      ...insertUser,
      name: insertUser.name || null,
      email: insertUser.email || null,
      phone: insertUser.phone || null,
      organization: insertUser.organization || null,
      dob: null,
      gender: null,
      nationality: null,
      state: null,
      city: null,
      memberSince: formattedDate,
      lastLogin: 'Just now'
    });

    return user.save();
  }

  async updateUser(id: string, userData: Partial<User>): Promise<User> {
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { $set: userData },
      { new: true }
    ).exec();
    
    if (!updatedUser) {
      throw new Error(`User with id ${id} not found`);
    }
    
    return updatedUser;
  }
}

// Use the database storage in production
export const storage = new DatabaseStorage();
