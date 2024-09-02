const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { logger } = require("./middlewares/logger");
dotenv.config();

const userRoutes = require("./routes/user-route");
const authRoutes = require("./routes/auth-route");
const categoryRoutes = require("./routes/category-route");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/categories", categoryRoutes);

app.listen(PORT, () => {
  console.log(`server is running at localhost:${PORT}`);
});
