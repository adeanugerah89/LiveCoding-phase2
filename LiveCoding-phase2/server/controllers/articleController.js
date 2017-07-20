'use strict'
'use strict'
'use strict'

var Article = require('../models/article');
var User = require('../models/user');

var createArticle = (req,res) => {
  Article.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    username: req.body.username,
    author: req.body.author
  },(err,result) => {
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
}

var getAllArticle = (req,res) => {
  Article.find({},(err,result) => {
    if (err) {
      console.log(err);
      res.send(err)
    }
    res.send(result)
  })
}

var updateArticle = (req,res) => {
  Article.findById(req.params.id,(err,data) => {
    if (err) {
      res.send(err)
      console.log(err);
    }
    data.title = req.body.title || data.title;
    data.content = req.body.content || data.content;
    data.category = req.body.category || data.category;
    data.username = req.body.username || data.username;
    data.author = req.body.author || data.author;
    
    data.save((err,data) => {
      if (err) {
        res.send(err)
      }
      res.send(data);
      console.log('data already update');
    })
  })
}

var deleteArticle = (req,res) => {
  Article.findByIdAndRemove(req.params.id,(err) => {
    if (err) {
      res.send(err)
    }
    res.send('data already deleted');
  })
}

var getOneArticle = (req,res) => {
  Article.findById(req.params.id,(err,data) => {
    if (err) {
      res.send(err)
    }
    res.send(data)
  })
}

module.exports = {
  createArticle,
  getAllArticle,
  updateArticle,
  deleteArticle,
  getOneArticle
}
