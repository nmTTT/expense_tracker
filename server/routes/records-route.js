const { Router } = require("express");

const {
  getAllRecord,
  createRecord,
  deleteRecord,
  updateRecord,
} = require("../controllers/records-controller");

const router = Router();

router.route("/").get(getAllRecord).post(createRecord);
router.route("/:id").put(updateRecord).delete(deleteRecord);

module.exports = router;
