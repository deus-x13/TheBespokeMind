import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema, newsletterSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";

// For demonstration purposes, using a memory-based transporter
const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "user@example.com",
    pass: process.env.EMAIL_PASSWORD || "password",
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // Store contact in database
      const contact = await storage.createContact(validatedData);
      
      // Send email notification 
      // This would typically send a real email in production
      // but we'll just log it for now
      console.log(`New contact submission from: ${validatedData.name}`);
      
      /*
      await transporter.sendMail({
        from: '"The Bespoke Mind" <noreply@thebespokemind.com>',
        to: "hello@thebespokemind.com",
        subject: `New Contact Form Submission: ${validatedData.interest}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Company:</strong> ${validatedData.company}</p>
          <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
          <p><strong>Interest:</strong> ${validatedData.interest}</p>
          <p><strong>Message:</strong> ${validatedData.message}</p>
        `,
      });
      */
      
      return res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contact.id 
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false,
          message: validationError.message
        });
      }
      
      return res.status(500).json({ 
        success: false,
        message: "Failed to submit contact form" 
      });
    }
  });
  
  // Newsletter signup
  app.post("/api/newsletter", async (req: Request, res: Response) => {
    try {
      const validatedData = newsletterSchema.parse(req.body);
      
      // Store subscriber in database
      const subscriber = await storage.createNewsletterSubscriber(validatedData);
      
      // Send confirmation email 
      // This would typically send a real email in production
      // but we'll just log it for now
      console.log(`New newsletter subscriber: ${validatedData.email}`);
      
      /*
      await transporter.sendMail({
        from: '"The Bespoke Mind" <noreply@thebespokemind.com>',
        to: validatedData.email,
        subject: "Welcome to The Bespoke Mind Community!",
        html: `
          <h2>Welcome to The Bespoke Mind Community!</h2>
          <p>Thank you for subscribing to our newsletter.</p>
          <p>You'll now receive practical leadership and team development insights delivered to your inbox monthly.</p>
          <p>As promised, here's your free guide: <a href="#">10 Ways to Build an Empathetic Team Culture</a>.</p>
          <p>We're excited to have you join our community!</p>
          <p>Best regards,<br>The Bespoke Mind Team</p>
        `,
      });
      */
      
      return res.status(201).json({ 
        success: true, 
        message: "Newsletter subscription successful",
        id: subscriber.id 
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false,
          message: validationError.message
        });
      }
      
      return res.status(500).json({ 
        success: false,
        message: "Failed to subscribe to newsletter" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
