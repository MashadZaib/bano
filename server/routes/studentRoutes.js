const express = require("express");
const router = express.Router();
const {
  registerStudent,
  loginStudent,
  studentProfile
} = require("../controller/studentController");
const { isAuth } = require("../middleware/auth");

const { passwordVerificationLimit } = require("../lib/email-sender/sender");
//register a staff
router.post("/register", registerStudent);

//login a admin
router.post("/login", loginStudent);

router.get("/student-profile", isAuth, studentProfile);

module.exports = router;
