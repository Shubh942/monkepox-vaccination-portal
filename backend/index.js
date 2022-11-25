const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(express.json())
app.use(cors())

const PORT = 4000

app.get("/", (req, res) => {
  res.send("backend page created using node js")
})

// app.get("/api", (req, res) => {
//   res.json(
//     {
//       "users": [
//         { "name": "utkarsh", "email": "utakrsh@gmail.com", "age": "19" },
//         { "name": "raj", "email": "raj@gmail.com" },
//         { "name": "sigma", "email": "sigma@gmad.com" },
//       ]
//     }
//   )
// })

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "monkeypox",
})

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("mysql connected...")
})

app.post('/register', (req, res) => {

  // const values = [req.body.username, req.body.password, req.body.aadhar];
  const username = req.body.username;
  const password = req.body.password;
  const aadhar = req.body.aadhar;
  // let q = "INSERT INTO register(username,aadhar,password) VALUES (?)"

  db.query(
    "INSERT INTO register (username,aadhar,password) VALUES (?,?,?)",
    [username, aadhar, password],
    (err, result) => {
      console.log(err);
      // console.log(username)
    }
  )
  res.status(200).json("working")
})

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM register WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } if (result) {
        res.send(result);
      } else {
        res.send({ message: "wrong username/password combination" })
      }
    }
  )
})

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`)
})