const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3001;

// Security headers with very relaxed CSP for troubleshooting
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: false
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// Enable gzip compression
app.use(compression());

// Verify build directory exists
const buildPath = path.join(__dirname, 'build');
console.log('Checking build directory:', buildPath);
if (!require('fs').existsSync(buildPath)) {
  console.error('Build directory does not exist!');
  process.exit(1);
}

// Serve static files with proper MIME types and caching
app.use(express.static(buildPath, {
  maxAge: '1y',
  index: false, // Disable auto-serving of index.html
  setHeaders: (res, filePath) => {
    console.log('Serving static file:', filePath);
    
    if (filePath.endsWith('.html')) {
      console.log('Setting HTML headers');
      res.set({
        'Content-Type': 'text/html; charset=UTF-8',
        'Cache-Control': 'no-cache',
        'X-Content-Type-Options': 'nosniff'
      });
    } else if (filePath.endsWith('.js') || filePath.endsWith('.js.map')) {
      console.log('Setting JavaScript headers');
      res.set({
        'Content-Type': 'application/javascript; charset=UTF-8',
        'Cache-Control': 'public, max-age=31536000',
        'X-Content-Type-Options': 'nosniff'
      });
    } else if (filePath.endsWith('.css') || filePath.endsWith('.css.map')) {
      console.log('Setting CSS headers');
      res.set({
        'Content-Type': 'text/css; charset=UTF-8',
        'Cache-Control': 'public, max-age=31536000',
        'X-Content-Type-Options': 'nosniff'
      });
    } else if (filePath.match(/\.(jpg|jpeg|png|gif|ico|svg)$/)) {
      console.log('Setting image headers');
      res.set({
        'Cache-Control': 'public, max-age=31536000',
        'X-Content-Type-Options': 'nosniff'
      });
    }
    
    console.log('Response headers:', res.getHeaders());
  }
}));

// Handle client-side routing
// Debug middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Headers:', res.getHeaders());
  next();
});

app.get('*', (req, res) => {
  const fs = require('fs');
  const indexPath = path.join(__dirname, 'build', 'index.html');
  console.log('Serving index.html from:', indexPath);
  
  fs.readFile(indexPath, 'utf8', (err, html) => {
    if (err) {
      console.error('Error reading index.html:', err);
      return res.status(500).send('Error loading page');
    }

    // Replace absolute paths with relative paths
    const modifiedHtml = html
      .replace(/src="\/static\//g, 'src="static/')
      .replace(/href="\/static\//g, 'href="static/')
      .replace(/href="\/favicon/g, 'href="favicon');

    res.set({
      'Cache-Control': 'no-cache',
      'Content-Type': 'text/html; charset=UTF-8',
      'X-Content-Type-Options': 'nosniff'
    });

    res.send(modifiedHtml);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`Listening on port ${PORT}`);
});