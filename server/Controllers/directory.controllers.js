const DirectoryModel = require("../model/directory.model");
// **CRUD for Directory**:

//  **Create a Directory** (`POST /api/directories`): Add a new directory.✅
//  **Read Directories** (`GET /api/directories`): Retrieve a list of all directories.✅
//  **Update a Directory** (`PUT /api/directories/:id`): Update the name of a specific directory.✅
//  **Delete a Directory** (`DELETE /api/directories/:id`): Delete a specific directory.✅
const getAllDirectories = async (req, res) => {
  try {
    // Fetch all tasks from the database
    const Directories = await DirectoryModel.find({});
    // Send the tasks as the response
    res.status(200).json({ success: true, data: Directories });
  } catch (error) {
    // Handle errors
    res.status(500).json({ success: false, message: error.message });
  }
};
const createNewDirectory = async (req, res) => {
  try {
    const newDirectory = req.body;

    const data = await DirectoryModel.create(newDirectory);
    res.status(201).json({ message: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const updateDirectory = async (req, res) => {
  try {
    const newDirectoryData = req.body;
    const id = req.params.id;
    const data = await DirectoryModel.findByIdAndUpdate(
      { _id: id },
      newDirectoryData,
      {
        new: true,
      }
    );
    res.status(201).json({ message: true, data: data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const deleteDirectory = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await DirectoryModel.findOneAndDelete({ _id: id });
    res.status(204).json({ message: true, data: data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
module.exports = {
  getAllDirectories,
  deleteDirectory,
  updateDirectory,
  createNewDirectory,
};
