import mongoose from "mongoose";

const userSchemea = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", userSchemea);

export default User;
