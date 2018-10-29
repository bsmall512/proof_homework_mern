const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User.model');


// @route GET api/users
// @desc  Get All users
// @access Public
router.get('/', (req, res) => {	
  User.find()
    .then(users => res.json(users));
});

module.exports = router;