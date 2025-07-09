import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `;

      const emailText = `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `;

      if (process.env.SENDGRID_API_KEY) {
        const result = await sendEmail({
          to: "panditsanket2211@gmail.com",
          from: "noreply@portfolio.com", // This should be a verified sender in SendGrid
          subject: `Portfolio Contact: ${subject}`,
          text: emailText,
          html: emailHtml,
        });

        if (result.success) {
          res.json({ success: true, message: "Message sent successfully" });
        } else {
          res.status(500).json({ error: result.error || "Failed to send email" });
        }
      } else {
        // For demo purposes, log the message and return success
        console.log("=== CONTACT FORM SUBMISSION ===");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Subject: ${subject}`);
        console.log(`Message: ${message}`);
        console.log("===============================");
        
        res.json({ 
          success: true, 
          message: "Message received! (Email service not configured - check server logs)" 
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
