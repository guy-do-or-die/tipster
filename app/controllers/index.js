/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , async = require('async')

exports.render = function(req, res){
  res.render('index', {
    user: req.user ? JSON.stringify(req.user) : "null"
  })
} 
