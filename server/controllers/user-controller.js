const sql = require("../config/db");

const getAllUser = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM users`;
    console.log("DATA", data);
    res.status(200).json({ message: "successfully got data" });
  } catch (error) {
    res.status(404).json({ message: "couldn't read user" });
  }
};
const createUser = async (req, res) => {
  try {
    const { email, name, password, profile_img } = req.body;
    const data = await sql`
  INSERT INTO users (email, name, password, profile_img) 
  VALUES(${email},${name},${password},${profile_img}) `;
    console.log("DATA", data);
    res.status(201).json({ message: "new user created successful" });
  } catch (error) {
    res.status(404).json({ message: "couldn't create user" });
  }
};
const updateUser = async (req, res) => {
  try {
    const values = req.body;
    const { id } = req.params;
    const result = Object.keys(values)
      .map((key) => `${key}='${values[key]}'`)
      .join();
    console.log("first", result);
    const data = await sql`
    UPDATE users
    SET ${result}
    WHERE id=${id}`;
    console.log("DATA", data);
    res
      .status(200)
      .json({ message: "new user created successful", user: data });
  } catch (error) {
    console.log("ER", error);
    res.status(401).json({ message: "Couldn't update user" });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sql`DELETE FROM users WHERE id=${id}`;
    console.log("DATA", data);
    res.status(200).json({ message: "delete success", user: data });
  } catch (error) {
    res.status(404).json({ message: "couldn't delete user" });
  }
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
