const { Router } = require("express");
const { DashboardData } = require("../controllers/dashboard-controller");
const router = Router();

router.route("/dashboard").get(DashboardData);

module.exports = router;
