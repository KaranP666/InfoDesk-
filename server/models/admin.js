import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    username: {
      type: String,
    },
    department: {
      type: String,
    },
    dob: {
      type: String,
    },
    joiningYear: {
      type: String,
    },
    avatar: {
      type: String,
    },
    contactNumber: {
      type: Number,
    },
    passwordUpdated: {
      type: Boolean,
      default: false,
    },
  },
  { strict: false }
);

export default mongoose.model("admin", adminSchema);

// name: "Karan Panchal",
// email: "karanh20ite@student.mes.ac.in",
//  password: "abcc",
//  username: "2021PE0832",
//    department: "IT",
//    dob: "09-10-2001",
//    joiningYear: "2021",
//    avatar: "NULL",
//    contactNumber: "202020202020",
//    passwordUpdated: false