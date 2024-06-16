// const express = require("express");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const { client, getUserByUsername, createUser } = require("./db");
// const router = express.Router();

// const JWT_SECRET = "fashionista"; 

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
  
//   if (!token) return res.sendStatus(401);
  
//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// }
// //register
// router.post("/register", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 5);
//     const newUser = await createUser({ username, password: hashedPassword });
//     res.status(201).json({ message: "User successfully created", user: newUser });
//   } catch (err) {
//     res.status(500).json({ message: "User not created" });
//   }
// });
// // login
// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await getUserByUsername(username);
//     if (!user) return res.status(400).json({ message: "User not found" });

//     const match = await bcrypt.compare(password, user.password);
//     if (match) {
//       const accessToken = jwt.sign({ username: user.username, id: user.id }, JWT_SECRET);
//       res.json({ accessToken });
//     } else {
//       res.status(403).json({ message: "Password is incorrect" });
//     }
//   } catch (err) {
//     res.status(500).json({ message: "Failed log in" });
//   }
// });

// module.exports = { router, authenticateToken };
