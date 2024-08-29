const next = require("next.js/lib/next");
const sql = require("../config/db");
const { trace } = require("../routes/user-route");

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
  return new Promise(function (resolve, reject) {
    const { email, name, password, profile_img } = req.body;
    const { id } = req.params;
    sql.query(
      "UPDATE users SET name = $1, email = $2, password = $3, profile_img = $4 WHERE id = $5 RETURNING *",
      [name, email, password, profile_img, id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`Merchant updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
  // const data = await sql(
  //   `
  //   UPDATE users
  //   SET email = "$1", name = "$2", password = "$3", profile_img= "$4"
  //   WHERE id=${id}`,
  //   email,
  //   name,
  //   password,
  //   profile_img
  // );
  // console.log("DATA", data);
  // res.status(200).json({ message: "new user created successful", user: data });
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
