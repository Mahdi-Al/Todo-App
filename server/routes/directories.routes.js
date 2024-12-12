const { Router } = require("express");
const router = Router();
const {
  getAllDirectories,
  deleteDirectory,
  updateDirectory,
  createNewDirectory,
} = require("../Controllers/directory.controllers");
/**
 * @URL : /directories/
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get all directories data
 */
router.get("/", getAllDirectories);
/**
 * @URL : /directories/
 * @Method : POST
 * @Status : PUBLIC
 * @Description : post a directory data
 */
router.post("/", createNewDirectory);
/**
 * @URL : /directories/:id
 * @Method : PATCH
 * @Status : PUBLIC
 * @Description : update a directory data
 */
router.patch("/:id", updateDirectory);
/**
 * @URL : /directories/:id
 * @Method : DELETE
 * @Status : PUBLIC
 * @Description : delete a directory data
 */ router.delete("/:id", deleteDirectory);

module.exports = router;
