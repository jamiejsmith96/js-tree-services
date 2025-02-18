const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Verify build directory and static files
const buildPath = path.join(__dirname, 'build');
const staticPath = path.join(buildPath, 'static');

if (!fs.existsSync(buildPath)) {
  console.error('Build directory does not exist:', buildPath);
  process.exit(1);
}

if (!fs.existsSync(staticPath)) {
  console.error('Static directory does not exist:', staticPath);
  process.exit(1);
}

// Set up CSP headers
app.use((req, res, next) => {
  res.set({
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:;",
  });
  next();
});

// Debug request logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Serve static files from build directory
app.use('/static', (req, res, next) => {
  const filePath = path.join(__dirname, 'build', 'static', req.path);
  console.log('Static file request:', req.path);
  console.log('Full path:', filePath);

  if (req.path.endsWith('.js')) {
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        console.error('Error reading JS file:', err);
        return next(err);
      }
      console.log('JS file content preview:', content.slice(0, 200));
      res.set('Content-Type', 'application/javascript; charset=utf-8');
      res.send(content);
    });
  } else {
    next();
  }
}, express.static(path.join(__dirname, 'build', 'static')));

// Serve other static files
app.use(express.static(buildPath));

// Handle client-side routing
app.get('*', (req, res) => {
  console.log('Serving index.html for:', req.url);
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Serving build from: ${buildPath}`);
  console.log(`Serving static files from: ${staticPath}`);
});