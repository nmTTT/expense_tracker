const { Router } = require("express");
const { dashboardData } = require("../controllers/dashboard-controller");
const { auth } = require("../middlewares/auth");
const router = Router();

router.route("/info").get(dashboardData);
router.route("/info").get(dashboardData);

module.exports = router;
