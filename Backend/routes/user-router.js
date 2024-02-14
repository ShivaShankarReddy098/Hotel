const express = require("express");
// const app = express();
const router = express.Router();
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user-controller");
router.get("/user" || "/", getUser);
router.post("/signUp", createUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:deleteId", deleteUser);
module.exports = router;
