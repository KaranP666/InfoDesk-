import mongoose from "mongoose";
const { Schema } = mongoose;
const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "subject",
    },
  ],
  username: {
    type: String,
  },
  gender: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  department: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
  fatherContactNumber: {
    type: Number,
  },
  dob: {
    type: String,
    required: true,
  },
  passwordUpdated: {
    type: Boolean,
    default: false,
  },
  achievements : {
    type: Buffer,
  },
  skillSets: {
    type: Map,
    of: Number,
    default: {
      ML: 0,
      Blockchain: 0,
      AI: 0,
      Data_Science: 0,
      Cyber_Security: 0,
      App_Dev: 0,
      Web_Dev: 0,
    },
  },
  CGPA: {
    type: Map,
    of: Number,
    default: {
      SEM_ONE: 0,
      SEM_TWO: 0,
      SEM_THREE: 0,
      SEM_FOUR: 0,
      SEM_FIVE: 0,
      SEM_SIX: 0,
      SEM_SEVEN: 0,
      SEM_EIGHT: 0
    },
  },
});

export default mongoose.model("student", studentSchema);
