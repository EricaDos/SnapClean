import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
  service: String,
  cleanerName: String,
  description: String,
  hourlyRate: Number,
});

const job = mongoose.model('job', jobSchema);

export default job;
