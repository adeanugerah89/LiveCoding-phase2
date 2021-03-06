'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  content: String,
  category: String,
  author: { type: Schema.Types.ObjectId, ref: 'user' }
});

var Article = mongoose.model('article',articleSchema);

module.exports = Article;