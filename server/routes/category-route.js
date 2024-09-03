const { Router } = require("express");
const { auth } = require("../middlewares/auth");

const {
  updateCategory,
  getAllCategory,
  createCategory,
  deleteCategory,
} = require("../controllers/category-controller");

const router = Router();

router.route("/").get(auth, getAllCategory).post(auth, createCategory);
router.route("/:id").put(updateCategory).delete(deleteCategory);

module.exports = router;
