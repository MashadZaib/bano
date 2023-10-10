const bcrypt = require("bcryptjs");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
const jwt = require("jsonwebtoken");
const { signInToken, tokenForVerify, sendEmail } = require("../middleware/auth");
const User = require("../models/User");

const registerStudent = async (req, res) => {
  try {
    const isAdded = await User.findOne({ email: req.body.email });
    if (isAdded) {
      return res.send({
        message: "This Email already Added!",
        status: 403
      });
    } else {
      const newStd = new User({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        password: bcrypt.hashSync(req.body.password),
      });
      const std = await newStd.save();
      const token = signInToken(std);
      res.send({
        token,
        _id: std._id,
        name: std.name,
        email: std.email,
        role: std.role,
        joiningData: Date.now(),
        message: "Account has successfully",
        status: 200
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const loginStudent = async (req, res) => {
  try {
    const student = await User.findOne({ email: req.body.email });
    if (student && bcrypt.compareSync(req.body.password, student.password)) {
      const token = signInToken(student);
      const oneDay = 1000 * 60 * 60 * 24;

      res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay), // You should define 'oneDay'
        secure: process.env.NODE_ENV === 'production',
      });
      res.send({
        token,
        _id: student._id, // Changed 'admin' to 'student'
        name: student.name, // Changed 'admin' to 'student'
        phone: student.phone, // Changed 'admin' to 'student'
        email: student.email, // Changed 'admin' to 'student'
        image: student.image, // Changed 'admin' to 'student'
        message: "Account has been successfully authenticated", // Changed the message
        status: 200
      });
    } else {
      res.send({
        message: "Invalid Email or password!",
        status: 201
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const studentProfile = async (req, res) => {
  try {
    const std = await User.findById(req.params.id);
    res.send(std);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
module.exports = {
  registerStudent,
  loginStudent,
  studentProfile
};
