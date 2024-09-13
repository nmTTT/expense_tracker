const { Router } = require("express");
const { dashboardData } = require("../controllers/dashboard-controller");
const { auth } = require("../middlewares/auth");
const router = Router();

router.route("/info").get(auth, dashboardData);

module.exports = router;
