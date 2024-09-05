const { Router } = require("express");

const { signUp, logIn } = require("../controllers/auth-controller");

const router = Router();

router.route("/signup").post(signUp);
router.route("/logIn").post(logIn);

module.exports = router;
