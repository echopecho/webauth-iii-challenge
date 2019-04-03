const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, async (req, res) =>{
  const { department } = req.decodedJWT;
  try {
    const users = await Users.findBy({department});
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({err: 'Something went wrong with the server'})
  }
})

module.exports = router;