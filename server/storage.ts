import { users, type User, type InsertUser, type Contact, type NewsletterSubscriber } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contactData: any): Promise<Contact>;
  createNewsletterSubscriber(subscriberData: any): Promise<NewsletterSubscriber>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private newsletterSubscribers: Map<number, NewsletterSubscriber>;
  currentId: number;
  contactId: number;
  subscriberId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsletterSubscribers = new Map();
    this.currentId = 1;
    this.contactId = 1;
    this.subscriberId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContact(contactData: any): Promise<Contact> {
    const id = this.contactId++;
    const createdAt = new Date();
    const contact = { 
      ...contactData, 
      id,
      createdAt 
    } as Contact;
    this.contacts.set(id, contact);
    return contact;
  }
  
  async createNewsletterSubscriber(subscriberData: any): Promise<NewsletterSubscriber> {
    const id = this.subscriberId++;
    const createdAt = new Date();
    const subscriber = { 
      ...subscriberData, 
      id,
      active: true,
      createdAt
    } as NewsletterSubscriber;
    this.newsletterSubscribers.set(id, subscriber);
    return subscriber;
  }
}

export const storage = new MemStorage();
