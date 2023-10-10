const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: Object,
      required: false,
    },
    first_name: {
      type: Object,
      required: false,
    },
    last_name: {
      type: Object,
      required: false,
    },
    phone: {
      type: Object,
      required: false,
    },
    gender: {
      type: Object,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },

    email: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
      default: "Active",
      enum: ["Active", "Inactive"],
    },
    password: {
      type: String,
      required: false,
    },
    education_level: {
      type: String,
      required: false,
    },
    cnic: {
      type: String,
      required: false,
    },
    blood_group: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
      default: "Student",
      enum: [
        "Admin",
        "Student",
        "Instructor",
        "Volunteer"
      ],
    },
    joiningData: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
