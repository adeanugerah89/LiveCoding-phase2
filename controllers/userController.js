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

var getAllUser = (req,res) => {
  User.find({},(err,result) => {
    if (err) {
      console.log(err);
      res.send(err)
    }
    res.send(result)
  })
}

var updateUser = (req,res) => {
  var hash = bcrypt.hashSync(req.body.password, salt);
  User.findById(req.params.id, (err,data) => {
    if (err) {
      console.log(err);
      res.send(err)
    }
    data.username = req.body.username || data.username;
    data.password = hash || data.password;
    
    data.save((err,data) => {
      if (err) {
        res.send(err)
      }
      res.send(data)
      console.log('data already updated');
    })
  })
}

var deleteUser = (req,res) => {
  User.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.send(err)
    }
    res.send('data already deleted');
  })
}

var getOneUser = (req,res) => {
  User.findById(req.params.id,(err,data) => {
    if (err) {
      res.send(err)
    }
    res.send(data)
  })
}

module.exports = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getOneUser
}