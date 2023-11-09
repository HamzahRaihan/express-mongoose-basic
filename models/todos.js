const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new mongoose.Schema({
  todo: String,
  isComplete: Boolean,
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Todos = mongoose.model('Todos', TodoSchema);

module.exports = Todos;
