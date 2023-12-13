// console clear
console.clear();

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const port = 5050;
const app = express();

// database connection
const db = mysql.createConnection({
  host: "localhost",
  port: "3308",
  user: "root",
  password: "",
  database: "todos_crud_operation",
});
db.connect((err) => {
  if (err) return console.error("Connection Error -> ", err);

  console.log("Database Connection Successful!");
});

// Middleware ->
app.use(cors());

// routes
app.get("/", (req, res) => {
  return res
    .status(200)
    .send(
      `<h2 style="color: green; text-align: center; margin-top: 20px;"> Server Run Success </h2>`
    );
});

app.get("/todos", (req, res) => {
  const sql = "SELECT * FROM students";

  db.query(sql, (err, result) => {
    if (err) {
      console.log("err ", err);
      return res.status(400).json({ Message: "Error inside server" });
    }
    console.log("result ", result);
    return res.status(200).json(result);
  });
});

app.post("/todos", (req, res) => {
  const sql = "SELECT * FROM students";
  const body = req.body;
  console.log(body);

  // db.query(sql, (err, result) => {
  //   if (err) {
  //     console.log("err ", err);
  //     return res.status(400).json({ Message: "Error inside server" });
  //   }
  //   console.log("result ", result);
  //   return res.status(200).json(result);
  // });
});

app.listen(port, () => {
  console.log(`Server Running: http://localhost:${port}`);
});
