const UserModel = require("../model/user.model");

const TaskModel = require("../model/task.model");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
async function getAllUsers(req, res) {
  try {
    const result = await UserModel.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
async function getOneUser(req, res) {
  try {
    const { id } = req.params;
    const result = await UserModel.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const result = await UserModel.findOneAndDelete({ _id: id });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await UserModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
async function getAllTasksOfOneUser(req, res) {
  try {
    const id = req.userId;
    const result = await TaskModel.find({ authorId: id })
      .populate("userId")
      .exec();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
async function RegisterNewUser(req, res) {
  try {
    const { password, ...restOfUser } = req.body;

    // Check if password is provided
    if (!password) {
      return res.status(400).json({ message: "Password is required." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await UserModel.create({
      password: hashedPassword,
      ...restOfUser,
    });

    // Respond with the newly created user (excluding the password)
    res.status(201).json({
      message: "User  registered successfully.",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        password: hashedPassword,
        // Add other fields you want to return, but exclude the password
      },
    });
  } catch (error) {
    console.error("Error registering user:", error); // Log the error for debugging
    res.status(500).json({ message: "Internal server error." });
  }
}

module.exports = {
  getAllUsers,
  updateUser,
  getAllTasksOfOneUser,
  deleteUser,
  getOneUser,
  RegisterNewUser,
};
