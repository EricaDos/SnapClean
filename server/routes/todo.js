import express from 'express';
import { getTodos , createTodo, deleteTodo } from '../controllers/todo.js';
import todo from '../models/todo.js';
import auth from '../middleware/auth.js';

const router = express.Router();

//Path and callback parameter
//these routes will require authorization to be able to get , create and delete their todo list
router.get('/', auth, getTodos);
router.post('/', auth, createTodo);
router.delete('/:id', auth, deleteTodo);

export default router;
