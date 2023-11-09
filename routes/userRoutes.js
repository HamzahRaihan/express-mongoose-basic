const express = require('express');
const { getAllUser, register } = require('../controllers/userController');
const route = express.Router();

route.get('/', getAllUser);
route.post('/', register);

module.exports = route;
