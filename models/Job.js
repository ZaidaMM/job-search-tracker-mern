import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: [true, 'Please provide position'],
      maxlength: 50,
    },
    company: {
      type: String,
      required: [true, 'Please provide company name'],
      maxlength: 100,
    },
    jobLocation: {
      type: String,
      default: 'My city',
      required: true,
    },
    status: {
      type: String,
      default: 'pending',
      enum: ['interview', 'declined', 'pending'],
    },
    type: {
      type: String,
      enum: ['full-time', 'part-time', 'remote', 'internship'],
      default: 'full-time',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema);
