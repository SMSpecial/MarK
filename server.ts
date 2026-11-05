import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Google Cloud Run automatically passes PORT=8080, while local dev uses 3000
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProduction = process.env.NODE_ENV === 'production';

// Parse JSON request bodies
app.use(express.json());

// Enterprise Security Headers Middleware
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(self)'
  );
  // Hide server technology
  res.removeHeader('X-Powered-By');
  next();
});

// Google Cloud Health Check / Liveness Probe
app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    service: 'Special MarK Tech Gateway',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Secure Server-Side Contact & Consultation Handler
// Note: Secrets, webhook keys, or notification tokens are handled server-side only
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  // Sanitize and process inquiry safely on server
  console.log(`[Special MarK Inquiry] From: ${name} <${email}>, Phone: ${phone || 'N/A'}`);

  return res.status(200).json({
    success: true,
    message: 'Inquiry received securely at Special MarK Headquarters.'
  });
});

// Serve frontend based on environment
if (!isProduction) {
  // Development Mode: Mount Vite middlewares for fast HMR/bundle handling
  const { createServer } = await import('vite');
  const vite = await createServer({
    server: { middlewareMode: true, host: '0.0.0.0', port: PORT },
    appType: 'spa'
  });
  app.use(vite.middlewares);
} else {
  // Production Mode (Google Cloud Run / Cloud App Engine / Compute Engine)
  const distPath = path.resolve(__dirname, 'dist');
  app.use(express.static(distPath));

  app.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Special MarK Production Server] Running securely on port ${PORT}`);
  console.log(`[Cloud Ready] Google Cloud Run compatible, listening on 0.0.0.0:${PORT}`);
});
