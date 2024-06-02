import express from "express";
import {
  facultyLogin,
  updatedPassword,
  updateFaculty,
  createTest,
  getTest,
  getStudent,
  uploadMarks,
  markAttendance,
  getStudentByUsername ,
  uploadPDF,
  getStudentByUsernameOrEmail,
  getPDF,
} from "../controller/facultyController.js";
import auth from "../middleware/auth.js";
import multer from "multer";

const router = express.Router();

const upload = multer({ dest: "files/" });

router.post("/login", facultyLogin);
router.post("/updatepassword", auth, updatedPassword);
router.post("/updateprofile", auth, updateFaculty);
router.post("/createtest", auth, createTest);
router.post("/gettest", auth, getTest);
router.post("/getstudent", auth, getStudent);
router.post("/uploadmarks", auth, uploadMarks);
router.post("/markattendance", auth, markAttendance);

// router.get("/students/:username", getStudentByUsername);
router.get('/students/:identifier', getStudentByUsernameOrEmail);
router.patch("/uploadpdf", auth, upload.single("pdfFile"), uploadPDF);
router.get('/pdf/:identifier', getPDF);

export default router;

