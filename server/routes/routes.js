const express = require("express");
const router = express.Router();

const posts = require("./controllers/posts");
const users = require("./controllers/users");
const restaurants = require("./controllers/restaurants");

router.use("/posts", posts);
router.use("/users", users);
router.use("/restaurants", restaurants);

module.exports = router;
