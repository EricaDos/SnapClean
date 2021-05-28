import express from 'express';
import { getTodos , createTodo, deleteTodo } from '../controllers/todo.js';
import todo from '../models/todo.js';
const router = express.Router();

//Path and callback parameter
//these routes will require authorization to be able to get , create and delete their todo list
router.get('/', getTodos);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);


export default router;
