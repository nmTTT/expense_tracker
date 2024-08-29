const postgres = require("postgres");
require("dotenv").config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID, PORT } =
  process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: PORT,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

module.exports = sql;
