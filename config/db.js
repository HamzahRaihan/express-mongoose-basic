const mongoose = require('mongoose');

const DB_URL = `mongodb+srv://hamzahraihan6:${process.env.DB_PASSWORD}@cluster0.beb2n5s.mongodb.net/express-mongoose`;

const db = mongoose.connect(DB_URL);

module.exports = db;
