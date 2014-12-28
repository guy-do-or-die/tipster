/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , Schema = mongoose.Schema

/**
 * Gig Schema
 */

var GigSchema = new Schema(
{
  created: {type: Date, default: Date.now},
  title: {type: String, default: ''},
  pic: {type: String, default: ''},
  sourceLink: {type: String, default: ''},
  geoLocation: {type: String, default: ''},
  when: {type: Date, default: Date.now},
  description: {type: String, default: ''},
  user: {type: Schema.ObjectId, ref: 'User'},
  followers: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

GigSchema.statics = {
  load: function (id, cb) {
    this.findOne({ _id : id }).populate('user followers').exec(cb);
  }
}

mongoose.model('Gig', GigSchema)
