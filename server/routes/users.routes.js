const { Router } = require("express");
const {
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
  RegisterNewUser,

  LoginUser,
  getAllTasksOfOneUser,
} = require("../Controllers/user.controllers");
const verifyToken = require("../middlewares/authMiddleware");

const router = Router();

router.get("/", getAllUsers);

router.get("/tasks", verifyToken, getAllTasksOfOneUser);

router.get("/:id", getOneUser);

router.post("/", RegisterNewUser);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

module.exports = router;
