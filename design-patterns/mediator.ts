// Behavioral
// middle layer between objects that communicate with each other
// Examples:
// 1. Air traffic controller that sits between the runways & airplains to provide coordination & communication
// 2. Middleware
// 3. Chat

import express from 'express';
const app = express();

// Middleware logic
function mediator(req, res, next) {
  console.log('Request Type:', req.method);
  next();
}

app.use(mediator);

// Mediator runs before each route handler
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About');
});
