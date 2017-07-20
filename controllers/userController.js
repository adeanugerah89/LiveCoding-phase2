'use strict'
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);

var createUser = (req,res) => {
  var hash = bcrypt.hashSync(req.body.password, salt);
  
  User.create({
    username: req.body.password,
    password: hash,
  },(err,result) => {
    if (err) {
      res.send(err)
      console.log(err.message);
    }
    res.send(result);
    console.log(result);
  })
}



module.exports = {
  createUser
}