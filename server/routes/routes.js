const express = require("express");
const router = express.Router();

const posts = require("./controllers/posts");
const users = require("./controllers/users");

router.use("/posts", posts);
router.use("/users", users);

module.exports = router;
