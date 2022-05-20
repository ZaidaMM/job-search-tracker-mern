const createJob = async (req, res) => {
  await res.send('Create Job');
};

const getAllJobs = async (req, res) => {
  await res.send('Get all jobs');
};

const updateJob = async (req, res) => {
  await res.send('Update job');
};

const deleteJob = async (req, res) => {
  await res.send('Delete Job');
};

const showStats = async (req, res) => {
  await res.send('Show stats');
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
