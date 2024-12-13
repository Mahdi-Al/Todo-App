const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connectDB");
const userRouter = require("./routes/users.routes");
const app = express();
const port = process.env.PORT || 3002;
const taskRouter = require("./routes/tasks.routes");
const directoryRouter = require("./routes/directories.routes");
// middleware
const logger = require("./middlewares/logger");
// * define middlewares

app.use(express.json(), logger, express.urlencoded({ extended: true }));
// ? define routes
app.use("/user", userRouter);
app.use("/tasks", taskRouter);
app.use("/directories", directoryRouter);
app.get("*", (request, response) => {
  response.status(404).send("<h1 style='color:red'>404<h1/>");
});
async function callFunc() {
  await connectDB();
}
callFunc();
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
