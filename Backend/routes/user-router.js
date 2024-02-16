const express = require("express");
const app = express();
const router = express.Router();
const {
  getUser,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/user-controller");
router.get("/user" || "/", getUser);
router.post("/signUp", createUser);
router.post("/login",getSingleUser)
router.patch("/user/:id", updateUser);
router.delete("/user/:deleteId", deleteUser);
module.exports = router;
