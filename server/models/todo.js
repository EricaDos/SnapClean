import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
  item: String,
});

const todo = mongoose.model('todo', todoSchema);

export default todo;
