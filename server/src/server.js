/* eslint-disable no-console */
const jsonServer = require('json-server');
const mockData = require('./mock-data');

const PORT = process.env.PORT || 7777;

const server = jsonServer.create();

const data = jsonServer.router(mockData);
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.use('/api', data);
server.listen(PORT, () => console.log(`JSON Server is running on: http://localhost:${PORT}`));
