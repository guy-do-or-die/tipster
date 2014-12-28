/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , async = require('async')
  , Gig = mongoose.model('Gig')
  , _ = require('underscore')
  , url = require ('url')
  , querystring = require ('querystring');


/**
 * Find gig by id
 */

exports.gig= function(req, res, next, id){
  var User = mongoose.model('User')

  Gig.load(id, function (err, gig) {
    if (err) return next(err)
    if (!gig) return next(new Error('Failed to load gig' + id))
    req.gig = gig;
    next()
  })
}

/**
 * Create a gig */
exports.create = function (req, res) {
  var gig = new Gig(req.body)
  gig.user = req.user
  gig.save()
  res.jsonp(gig)
}

/**
 * Update a gig
 */
exports.update = function(req, res){
  var gig = req.gig
  gig = _.extend(gig, req.body)

  gig.save(function(err) {
  	res.jsonp(gig)
  })
}

/**
 * Delete an gig
 */
exports.destroy = function(req, res){
  var gig = req.gig
  gig.remove(function(err){
    if (err) {
		res.render('error', {status: 500});
	} else {			
		res.jsonp(gig);
	}
  })
}

/**
 * Show an gig
 */
exports.show = function(req, res) {
  res.jsonp(req.gig);
}

/**
 * List of Gigs
 */
exports.all = function(req, res) {
	var reqUrl = url.parse(req.url), 
        query = Gig.where(),
        sortMode = '-when';
	if (reqUrl.query) {
		var params = querystring.parse(reqUrl.query);
		if (params.sort !== undefined) sortMode = params.sort;
	} else { 
	 	query = Gig.find(query);
	}
	query.sort(sortMode).populate('user').exec(function(err, gigs) {
		if (err) {
			res.render('error', {status: 500});
		} else {			
  			res.jsonp(gigs);
		}
	});
}

