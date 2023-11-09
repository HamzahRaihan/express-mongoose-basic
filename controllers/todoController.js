const Todo = require('../models/todos');

const getAllTodos = async (req, res) => {
  const getUsers = await Todo.find().populate('userId');

  res.status(200).json({
    status: true,
    data: getUsers,
  });
};

const addTodo = async (req, res) => {
  const data = req.body;
  const createTodo = await Todo.create(data);

  res.status(201).json({
    status: true,
    message: 'succesfully created todo',
    data: createTodo,
  });
};

module.exports = { getAllTodos, addTodo };
