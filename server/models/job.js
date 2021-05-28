import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
  service: {type: String, required: true},
  description: {type: String, required: true},
  hourlyRate: {type: Number, required: true},
});

const job = mongoose.model('job', jobSchema);

export default job;
