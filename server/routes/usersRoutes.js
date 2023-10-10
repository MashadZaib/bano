const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  forgetPassword,
  resetPassword,
  addUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
  updatedStatus,
} = require("../controller/userController");
const { passwordVerificationLimit } = require("../lib/email-sender/sender");

//register a user
router.post("/register", registerUser);

//login a user
router.post("/login", loginUser);

//forget-password
router.put("/forget-password", passwordVerificationLimit, forgetPassword);

//reset-password
router.put("/reset-password", resetPassword);

//add a user
router.post("/add", addUser);

//get all user
router.get("/", getAllUser);

//get a user
router.post("/:id", getUserById);

//update a user
router.put("/:id", updateUser);

//update staf status
router.put("/update-status/:id", updatedStatus);

//delete a user
router.delete("/:id", deleteUser);

module.exports = router;
