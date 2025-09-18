const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // Main route - responds to any path with "ciao bella"
  if (req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ 
      message: 'ciao bella',
      timestamp: new Date().toISOString(),
      path: parsedUrl.pathname 
    }));
  } else {
    // Handle non-GET requests
    res.writeHead(405);
    res.end(JSON.stringify({ error: 'Method not allowed' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Try: curl http://localhost:${PORT}/`);
  console.log(`Or visit: http://localhost:${PORT}/ in your browser`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('\nReceived SIGINT, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
