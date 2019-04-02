const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');
const jwtSecret = require('../config/secrets.js').jwtSecret;


router.post('/register', async (req, res) => {
  let user = req.body;

  if(user.username && user.password) {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    try {
      const newUser = await Users.add(user);
      res.status(201).json(newUser);
    } catch (e) {
      res.status(500).json({err: "Something went wrong with the server."});
    }
  } else {
    res.status(400).json({message: "Please include both a username and password."});
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findBy({username});
    if(user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(201).json({
        token,
        message: `Welcome ${username}`
      })
    }
  } catch (e) {
    res.status(500).json({err: "Something went wrong with the server."});
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;