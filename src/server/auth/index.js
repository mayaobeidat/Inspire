const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { client, getUserByUsername, createUser } = require("../api/db");
const router = express.Router();

const JWT_SECRET = "fashionista"; 

const isLoggedIn = async(req,res,next)=>{
  try{
      req.user = await authenticateToken(req.headers.authorization);
      next();
  }catch(err){
      next(err)
  }
}


//register
router.post("/register", async (req, res) => {
  const { name, email, address, username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = await createUser({ name, email, address, username, password: hashedPassword });
    res.status(201).json({ message: "User successfully created", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "User not created" });
  }
});

// login
router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;

  // request must have both
  if (!username || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password"
    });
  }

  try {
    const user = await getUserByUsername(username);

    const isCorrectPassword = await bcrypt.compare(password, user.password)
    console.log(user, isCorrectPassword)
    if (user && isCorrectPassword) {
      const token = jwt.sign({ 
        id: user.id, 
        username
      }, `${process.env.JWT_SECRET_KEY}`, {
        expiresIn: '1w'
      });

      res.send({ 
        message: "you're logged in!",
        token,
        userId: user.id,
      });
    } else {
      next({ 
        name: 'IncorrectCredentialsError', 
        message: 'Username or password is incorrect'
      });
    }
  } catch(error) {
    console.log(error);
    next(error);
  }
});

router.get('/me', isLoggedIn, (req,res,next)=>{
  try{
      res.send(req.user)
  }catch(err){
      next(err);
  }
})

// middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = { router, authenticateToken };


// fix the login path to return proper data,, currently returning object

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

// middleware
// const authenticateToken = async (token)=>{
//   let id;
//   try{
//       const payload = await  jwt.verify(token, JWT);
//       id = payload.id;
//   }catch(ex){
//       const error = Error("not authorized")
//       error.status = 401;
//       throw error
//   }

//   const response = await client.query(`SELECT id, username 
//           FROM users WHERE id=$1`, [id]);

//   if(!response.rows.length){
//       const error = Error("not authorized")
//       error.status = 401;
//       throw error
//   }

//   return response.rows[0]
// }

