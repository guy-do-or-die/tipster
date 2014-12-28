
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , User = mongoose.model('User')
  , _ = require('underscore')

//exports.signin = function (req, res) {}

/**
 * Auth callback
 */

exports.authCallback = function (req, res, next) {
  res.redirect('/')
}

/**
 * Show login form
 */

exports.signin = function (req, res) {
  res.render('users/signin', {
    title: 'Signin',
    message: req.flash('error')
  })
}

/**
 * Show sign up form
 */

exports.signup = function (req, res) {
  res.render('users/signup', {
    title: 'Sign up',
    user: new User()
  })
}

/**
 * Logout
 */

exports.signout = function (req, res) {
  req.logout()
  res.redirect('/')
}

/**
 * Session
 */

exports.session = function (req, res) {
  res.redirect('/')
}

/**
 * Create user
 */

exports.create = function (req, res) {
  var user = new User(req.body)
  console.log(user);
  user.provider = 'local'
  user.save(function (err) {
    if (err) {
      console.log("1: " + err);
      console.log(this);
      return res.render('users/signup', { errors: err.errors, user: user })
    }
    req.logIn(user, function(err) {
      console.log("2: " + err);
      if (err) return next(err)
      return res.redirect('/')
    })
  })
}

/**
 * Update a user
 */
exports.update = function(req, res){
  var user = req.user
  user = _.extend(user, req.body)

  user.save(function(err) {
	res.jsonp(user)
  })
}


/**
 *  Show profile
 */

exports.show = function (req, res) {
  /*
  var user = req.user
  res.render('users/show', {
    title: user.name,
    user: user
  })
  */
  res.jsonp(req.userById);
}

exports.me = function (req, res) {
  res.jsonp(req.user || null);
}

/**
 * Find user by id
 */

exports.user = function (req, res, next, id) {
  User
    .findOne({ _id : id })
    .populate('follows attends')
    .exec(function (err, user) {
      if (err) return next(err)
      if (!user) return next(new Error('Failed to load User ' + id))
      req.userById = user
      next()
    })
}
/**
 * List of Users
 */
exports.all = function(req, res){
  User.find().sort('name').populate("follows attends").exec(function(err, users) {
    if (err) {
      res.render('error', {status: 500});
    } else {
      res.jsonp(users);
    }
  });
}

exports.curators = function(req, res){
  User.where('is_curator', 1).populate('attends', null, null, {sort: {'when': 1}}).exec(function(err, users) {
    if (err) {
      res.render('error', {status: 500});
    } else {
      res.jsonp(users);
    }
  });
}
