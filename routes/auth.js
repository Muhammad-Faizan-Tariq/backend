const router = require("express").Router();
const {Register, Login} = require ("../controllers/authController")

//REGISTER
router.post("/register", Register)

//LOGIN
router.post("/login", Login)

module.exports = router;
