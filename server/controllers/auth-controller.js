const sql = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [user] = await sql`
    SELECT * FROM users WHERE email=${email};
    `;

    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      const isCheck = bcrypt.compareSync(password, user.password);
      if (!isCheck) {
        res.status(400).json({ message: "Email or password is wrong" });
      } else {
        const token = jwt.sign({ id: user.id }, "JWT_TOKEN_PASS@123", {
          expiresIn: "1h",
        });
        res.status(200).json({ message: "success", token: token });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "couldn't read user" });
  }
};

const signUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data = await sql`
    INSERT INTO users (email, name, password) 
    VALUES(${email},${name},${hashedPassword})`;
    console.log("DATA", data);
    res.status(201).json({ message: "new user created successfully" });
  } catch (error) {
    res.status(404).json({ message: "couldn't create user" });
  }
};

module.exports = { signUp, signIn };
