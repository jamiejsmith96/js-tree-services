const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Set MIME types explicitly
express.static.mime.types['.js'] = 'application/javascript';
express.static.mime.types['.css'] = 'text/css';
express.static.mime.types['.json'] = 'application/json';

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Add middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});