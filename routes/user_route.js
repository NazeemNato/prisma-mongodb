const express = require("express");
const route = express.Router();
const { get_users, create_user } = require("../controllers/user_controller");

route.get("/user", get_users).post("/user", create_user);
module.exports = route;
