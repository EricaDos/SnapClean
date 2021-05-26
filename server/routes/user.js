import express from 'express';
import user from '../models/user.js';
import { signin, signup } from '../controllers/user.js';

const router = express.Router();

//Path and callback parameter, post request to send data
router.post("/signin", (signin));
router.post("/signup", (signup));


export default router;
