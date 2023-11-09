const express = require('express');
const route = express.Router();
const userRoutes = require('./userRoutes.js');
const todoRoutes = require('./todoRoutes.js');

route.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'succeed',
  });
});

route.use('/users', userRoutes);
route.use('/todos', todoRoutes);

module.exports = route;
