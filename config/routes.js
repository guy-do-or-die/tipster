
var async = require('async')

module.exports = function (app, passport, auth) {

  // user routes
  var users = require('../app/controllers/users')
  app.get('/signin', users.signin)
  app.get('/signup', users.signup)
  app.get('/signout', users.signout)

  app.get('/users', users.all)
  app.get('/curators', users.curators)

  app.post('/users', users.create)
  app.post('/users/session', passport.authenticate('local', {failureRedirect: '/signin', failureFlash: 'Invalid email or password.'}), users.session)
  app.get('/users/me', users.me)
  app.get('/users/:userId', users.show)
  app.put('/users/:userId', auth.requiresLogin, users.update)
  app.get('/auth/facebook', passport.authenticate('facebook', { scope: [ 'email', 'user_about_me'], failureRedirect: '/signin' }), users.signin)
  app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/signin' }), users.authCallback)
  //app.get('/auth/github', passport.authenticate('github', { failureRedirect: '/signin' }), users.signin)
  //app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/signin' }), users.authCallback)
  //app.get('/auth/twitter', passport.authenticate('twitter', { failureRedirect: '/signin' }), users.signin)
  //app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/signin' }), users.authCallback)
  //app.get('/auth/google', passport.authenticate('google', { failureRedirect: '/signin', scope: 'https://www.google.com/m8/feeds' }), users.signin)
  //app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/signin', scope: 'https://www.google.com/m8/feeds' }), users.authCallback)

  app.param('userId', users.user)

  var gigs = require('../app/controllers/gigs')  
  app.get('/gigs', gigs.all)
  app.post('/gigs', auth.requiresLogin, gigs.create)
  app.get('/gigs/:gigId', gigs.show)
  app.put('/gigs/:gigId', auth.requiresLogin, auth.gig.hasAuthorization, gigs.update)
  app.del('/gigs/:gigId', auth.requiresLogin, auth.gig.hasAuthorization, gigs.destroy)

  app.param('gigId', gigs.gig)

  var articles = require('../app/controllers/articles')  
  app.get('/articles', articles.all)
  app.post('/articles', auth.requiresLogin, articles.create)
  app.get('/articles/:articleId', articles.show)
  app.put('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.update)
  app.del('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.destroy)

  app.param('articleId', articles.article)

  // home route
  var index = require('../app/controllers/index')
  app.get('/', index.render)

  // FB playground
  var facebook = require('../app/controllers/facebook')
  app.get('/fb', facebook.loginRequired(), facebook.sayHello)
}
