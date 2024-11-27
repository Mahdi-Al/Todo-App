const mongoose = require("mongoose");
const { type } = require("os");
const directorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
// Create the Directory model
const Directory = mongoose.model("Directory", directorySchema);

module.exports = Directory;
