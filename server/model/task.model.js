const mongoose = require("mongoose");
const { type } = require("os");

// - `title` (string): Title of the task.
// - `description` (string): Detailed description of the task.
// - `completed` (boolean): Whether the task is completed.
// - `important` (boolean): Indicates if the task is marked as important.
// - `deadline` (Date): Due date of the task.
// - `dirId` (reference): A foreign key reference to the **Directory** collection.
// * define schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,

    default: false,
  },
  important: {
    type: Boolean,

    default: false,
  },
  deadline: {
    type: Date,
    required: false,
  },
  dirId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to Directory
    ref: "Directory", // Name of the model to reference
    required: true, // Ensure a task must belong to a directory
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to Directory
    ref: "User", // Name of the model to reference
    required: true, // Ensure a task must belong to a directory
  },
});
// Create the Task model
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
