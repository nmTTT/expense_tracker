const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/user", (req, res) => {
  console.log("all user is read successfully");
});
app.post("/user", (req, res) => {
  console.log("New user is created successfully");
});
app.put("/user", (req, res) => {
  console.log("user is updated successfully");
});
app.delete("/user", (req, res) => {
  console.log("user is deleted successfully");
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
