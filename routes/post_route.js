const express = require("express");
const route = express.Router();
const { create_post } = require("../controllers/post_controller");

route.post("/post", create_post);

module.exports = route;
