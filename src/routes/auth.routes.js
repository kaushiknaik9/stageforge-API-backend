const express = require("express");

const { registeruser, loginuser } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/signup", registeruser);
router.post("/login", loginuser);

module.exports = router;
