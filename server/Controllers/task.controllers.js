const Task = require("../../Todo-App/data.json"); // Import your Mongoose model
const TaskModel = require("../model/task.model");
const getAllTasks = async (req, res) => {
  try {
    // Fetch all tasks from the database
    const tasks = await TaskModel.find({});
    // Send the tasks as the response
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    // Handle errors
    res.status(500).json({ success: false, message: error.message });
  }
};
const createNewTask = async (req, res) => {
  try {
    const newTask = req.body;

    const data = await TaskModel.create(newTask);
    res.status(201).json({ message: "Add new task Successfully", data: data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findOne({ _id: id });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await TaskModel.findOneAndDelete({ _id: id });
    res.status(204).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const newTaskData = req.body;
    const id = req.params.id;
    const data = await TaskModel.findByIdAndUpdate({ _id: id }, newTaskData, {
      new: true,
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
module.exports = {
  getAllTasks,
  createNewTask,
  getTaskById,
  deleteTask,
  updateTask,
};
