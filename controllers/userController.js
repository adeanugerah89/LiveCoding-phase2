'use strict'
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);

var userLogin = (req,res) => {
  User.findOne({username: req.body.username}, (err,dataUser)=>{
    if (err) {
      console.log(err);
      res.send(err)
    }else{
      if(!dataUser){
        console.log('login failed');
        res.send('user not found');
      } else if(bcrypt.compareSync(req.body.password, dataUser.password)) {
        let token = jwt.sign({username:dataUser.username},'secret',{expiresIn: '1h'});
        console.log(token);
        console.log('login success');
        res.send({token: token, user_id: dataUser._id, username: dataUser.username});
      } else {
        console.log('login failed');
        res.send('incorrect password')
      }
    }
  })
}

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
  userLogin,
  getAllUser,
  updateUser,
  deleteUser,
  getOneUser
}