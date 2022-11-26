const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(express.json())
app.use(cors())

const PORT = 4000

let sample1;
let sample2;

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
      } if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "wrong username/password combination" })
      }
    }
  )
})

app.post('/booking', (req, res) => {

  // const values = [req.body.username, req.body.password, req.body.aadhar];
  const name = req.body.name;
  const age = req.body.age;
  const aadhar = req.body.aadhar;
  const sex = req.body.sex;
  const hospital = req.body.hospital;
  const vaccine = req.body.vaccine;
  const date = req.body.date;
  const email = req.body.email;
  const from = "impostercrewfreedom@gmail.com";
  console.log(name, age, sex, aadhar, date, hospital, vaccine)
  db.query(
    "INSERT INTO user (name, age, sex, aadhar, date, hospital, vaccine) VALUES (?,?,?,?,?,?,?)",
    [name, age, sex, aadhar, date, hospital, vaccine],

    (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "impostercrewfreedom@gmail.com",
            pass: "avuwpktrouxkalqw",
          },
        });
        var mailoptions = {
          from: from,
          to: email,
          subject: "Sucessfully booked your vaccination",
          html: `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Document</title>
            </head>
            <body>
              <img width="250" height="250" src="https://img.freepik.com/free-vector/cartoon-vaccination-campaign-illustration_52683-62384.jpg?w=740&t=st=1669423848~exp=1669424448~hmac=8fb250b767d7d281517e207b045540faa88a8b852b5913513d9988ecc36b89ca" alt="" />
              <p>Thank you <b>${name}</b></p>
              for booking vaccination on our site.
              <p>your date of vaccination is <strong>${date}</strong></p>
              in <b> ${hospital}</b> for <b>${vaccine}</b> vaccine
            </body>
          </html>
          `,
        };
        transporter.sendMail(mailoptions, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Email send: " + result.response);
          }
        });
      }
      // console.log(username)
    }
  )
  res.status(200).json("working")
})


// db.query("SELECT * FROM user", (err, datafromtable) => {
//   if (err) {
//     throw err;
//   }
//   sample1 = datafromtable;
//   // res.send(sample1)
//   console.log(datafromtable);
// });

app.get("/apitable", (req, res) => {
  db.query("SELECT * FROM user", (err, datafromtable) => {
    if (err) {
      throw err;
    }
    sample1 = datafromtable;
    // res.send(sample1)
    console.log(datafromtable);
  });
  res.json(sample1)
})

app.get("/apitable2", (req, res) => {
  db.query("SELECT * FROM register", (err, datafromtable) => {
    if (err) {
      throw err;
    }
    sample2 = datafromtable;
    // res.send(sample1)
    console.log(datafromtable);
  });
  res.json(sample2)
})

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`)
})

