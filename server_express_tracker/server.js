const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { logger } = require("./middlewares/logger");
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());

app.get("/user", (req, res) => {
  console.log("all user is read successfully");
  res.json({ message: "GET success" });
});
app.post("/user", (req, res) => {
  console.log("New user is created successfully");
  res.json({ message: "POST success" });
});
app.put("/user", (req, res) => {
  console.log("user is updated successfully");
  res.json({ message: "UPDATE success" });
});
app.delete("/user", (req, res) => {
  console.log("user is deleted successfully");
  res.json({ message: "DELETE success" });
});

app.get("/category", (req, res) => {
  console.log("all category is read successfully");
});
app.post("/category", (req, res) => {
  console.log("New category is created successfully");
});
app.put("/category", (req, res) => {
  console.log("category is updated successfully");
});
app.delete("/category", (req, res) => {
  console.log("category is deleted successfully");
});

app.listen(PORT, () => {
  console.log(`server is running at localhost:${PORT}`);
});
