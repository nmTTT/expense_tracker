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
  const { email, name, password, profile_img } = req.body;
  const { id } = req.params;

  const data = await sql(
    `
    UPDATE users
    SET email = ${email}, name = ${name}, password = ${password}, profile_img= ${profile_img}
    WHERE id=${id}`
  );
  console.log("DATA", data);
  res.status(200).json({ message: "new user created successful", user: data });
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
