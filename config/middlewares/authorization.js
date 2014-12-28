
/*
 *  Generic require login routing middleware
 */

exports.requiresLogin = function (req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/login')
  }
  next()
};


/*
 *  User authorizations routing middleware
 */

exports.user = {
    hasAuthorization : function (req, res, next) {
      if (req.profile.id != req.user.id) {
        return res.redirect('/users/'+req.profile.id)
      }
      next()
    }
}

/*
 *  Gigs authorizations routing middleware
 */

exports.gig = {
    hasAuthorization : function (req, res, next) {
//      if (req.gig.user.id != req.user.id) {
//	      return res.redirect('/gigs/'+req.gig.id)
//      }
      next()
    }
}

/*
 *  Article authorizations routing middleware
 */

exports.article = {
    hasAuthorization : function (req, res, next) {
      if (req.article.user.id != req.user.id) {
        return res.redirect('/articles/'+req.article.id)
      }
      next()
    }
}
