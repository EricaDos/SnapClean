import JobData from '../models/job.js'


export const getJobs = async(req, res) => {
  try{
      const allJobs = await JobData.find(); //Goes through job models and saves in allJobs

      res.status(200).json(allJobs); //Sends jobs through the client
  } catch (error){
      res.status(404).json({ message: error.message });
  }
}


export const createJob = async (req, res) => {
  const job = req.body;

  const newJob = new JobData(job)

  try {

    await newJob.save();
      res.status(201).json(newJob);
  } catch (error) {
      res.status(404).json({ message: error.message });

    }

}

export const deleteJob = async (req, res) => {
  const id = req.params.id;

  try {
      await JobData.findByIdAndRemove(id).exec();
      res.send('Successfully Deleted')
  } catch (error) {
      console.log(error);
    }

}
