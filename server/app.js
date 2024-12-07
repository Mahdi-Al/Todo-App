const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connectDB");
const app = express();
const port = process.env.PORT || 3002;
const taskRouter = require("./routes/tasks.routes");
// middleware
const logger = require("./middlewares/logger");
// * define middlewares
app.use(express.json(), express.urlencoded({ extended: true }));
// ? define routes
app.use("/tasks", taskRouter);
// app.use("/directories");
async function callFunc() {
  await connectDB();
}
callFunc();
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
