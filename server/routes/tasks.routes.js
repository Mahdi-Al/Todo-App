const { Router } = require("express");
const router = Router();
const {
  getAllTasks,
  createNewTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../Controllers/task.controllers");

/**
 * @URL : /tasks/
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get all tasks data
 */

router.get("/", getAllTasks);
/**
 * @URL : /tasks/
 * @Method : POST
 * @Status : PUBLIC
 * @Description : add new task data
 */
router.post("/", createNewTask);
/**
 * @URL : /tasks/:id
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get a task by id
 */
router.get("/:id", getTaskById);
/**
 * @URL : /tasks/:id
 * @Method : PATCH
 * @Status : PUBLIC
 * @Description : edit a task data
 */
router.patch("/:id", updateTask);
/**
 * @URL : /tasks/:id
 * @Method : DELETE
 * @Status : PUBLIC
 * @Description : delete a task data
 */
router.delete("/:id", deleteTask);
module.exports = router;
