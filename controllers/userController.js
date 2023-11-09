const User = require('../models/users');

const getAllUser = async (req, res) => {
  const getUsers = await User.find();
  res.status(200).json({
    status: true,
    data: getUsers,
  });
};

const register = async (req, res) => {
  const data = req.body;
  const createUser = await User.create(data);

  res.status(201).json({
    status: true,
    message: 'succesfully registered',
    data: createUser,
  });
};

module.exports = { getAllUser, register };
