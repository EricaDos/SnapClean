import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
  item: {type: String, required: true},
});

const todo = mongoose.model('todo', todoSchema);

export default todo;
