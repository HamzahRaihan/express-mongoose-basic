const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  todos: { type: Schema.Types.ObjectId, ref: 'Todos' },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
