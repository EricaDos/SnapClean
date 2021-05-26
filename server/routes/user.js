import express from 'express';
import user from '../models/user.js';

const router = express.Router();

//Path and callback parameter
router.post("/", (req, res) => {
  res.send("test")
});

export default router;
