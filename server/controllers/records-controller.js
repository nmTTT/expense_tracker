const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  try {
    const { data } = await sql`SELECT * FROM categories`;
    res.status(200).json({ message: "successfully read Record" });
  } catch (error) {
    res.status(404).json({ message: "couldn't read Record" });
  }
};

const createRecord = async (req, res) => {
  try {
    const { name, amount, description, transaction_type } = req.body;
    const { data } =
      await sql`INSERT INTO categories(name, description, Record_img) VALUES(${name}, ${amount}, ${description},${transaction_type}, )`;
    res.status(201).json({ message: "successfully created Record" });
  } catch (error) {
    res.status(404).json({ message: "couldn't create Record" });
  }
};
const updateRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, Record_img } = req.body;
    const { data } =
      await sql`UPDATE categories SET ${name}, ${description}, ${Record_img} WHERE id=${id}`;
    res.status(200).json({ message: "successfully updated Record" });
  } catch (error) {
    res.status(404).json({ message: "couldn't update Record" });
  }
};
const deleteRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await sql`DELETE FROM categories WHERE id=${id}`;
    res.status(200).json({ message: "successfully deleted Record" });
  } catch (error) {
    res.status(404).json({ message: "couldn't delete Record" });
  }
};

module.exports = {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
};
