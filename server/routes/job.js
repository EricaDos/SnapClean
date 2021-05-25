import express from 'express';
import { getJobs , createJob, deleteJob } from '../controllers/job.js'

import job from '../models/job.js'
const router = express.Router();

//Path and callback parameter
router.get('/', getJobs);
router.post('/', createJob);
router.delete('/:id', deleteJob);

export default router;
