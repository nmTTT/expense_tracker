const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  try {
    console.log("user", req.user);
    const data = await sql`SELECT * FROM categories`;
    res
      .status(200)
      .json({ message: "successfully read category", categories: data });
  } catch (error) {
    res.status(404).json({ message: "couldn't read category" });
  }
};

const createCategory = async (res, req) => {
  try {
    const { name, description, category_img } = req.body;
    const { data } =
      await sql`INSERT INTO categories(name, description, category_img) VALUES(${name}, ${description},${category_img})`;
    res.status(201).json({ message: "successfully created category" });
  } catch (error) {
    res.status(404).json({ message: "couldn't create category" });
  }
};
const updateCategory = async (res, req) => {
  try {
    const { id } = req.params;
    const { name, description, category_img } = req.body;
    const { data } =
      await sql`UPDATE categories SET ${name}, ${description}, ${category_img} WHERE id=${id}`;
    res.status(200).json({ message: "successfully updated category" });
  } catch (error) {
    res.status(404).json({ message: "couldn't update category" });
  }
};
const deleteCategory = async (res, req) => {
  try {
    const { id } = req.params;
    const { data } = await sql`DELETE FROM categories WHERE id=${id}`;
    res.status(200).json({ message: "successfully deleted category" });
  } catch (error) {
    res.status(404).json({ message: "couldn't delete category" });
  }
};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
