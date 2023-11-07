import mongoose from "mongoose";
const { Schema } = mongoose;
const committeeMemberSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: Number,
    required: true,
  },
  // committee: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "committees",
  //   },
  // ], 
  committee: {
    type: String,
  },
//   gender: {
//     type: String,
//   },
  department: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
});

export default mongoose.model("committeemembers", committeeMemberSchema);
