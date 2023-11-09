const express = require('express');
const { getAllTodos, addTodo } = require('../controllers/todoController');
const route = express.Router();

route.get('/', getAllTodos);
route.post('/', addTodo);

module.exports = route;
