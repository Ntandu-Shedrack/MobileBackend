const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, "Please enter a valid phone number"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum length for password
  },
  resetPasswordToken: { type: String },
  resetPasswordExpiry: { type: Date },
});

// Hash the password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", UserSchema);
