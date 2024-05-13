import express from "express";
import {
  studentLogin,
  updatedPassword,
  updateStudent,
  testResult,
  attendance,
  getDetailsStudent,
  uploadPDF,
  getPDF
} from "../controller/studentController.js";
import auth from "../middleware/auth.js";
import multer from "multer";

const router = express.Router();

const upload = multer({ dest: "files/" });

// router.get('/pdf/:identifier', getPDF);
router.get('/pdf/:identifier', getPDF);

router.post("/login", studentLogin);
router.post("/updatepassword", auth, updatedPassword);
router.post("/updateprofile", auth, updateStudent);
router.post("/getDetails", auth, getDetailsStudent);
router.post("/testresult", auth, testResult);
router.post("/attendance", auth, attendance);

router.patch("/uploadpdf", auth, upload.single("pdfFile"), uploadPDF);

export default router;
