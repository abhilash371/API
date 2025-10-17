const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');

const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
const productRoutes = require('./routes/products');
app.use('/products', productRoutes);
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
  console.log('--- System Info ---');
  console.log('Platform:', os.platform());
  console.log('Architecture:', os.arch());
  console.log('CPU Cores:', os.cpus().length);
  console.log('Hostname:', os.hostname());
});
