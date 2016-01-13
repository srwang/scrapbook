'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Note Schema
 */
var NoteSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    default: '',
    trim: true
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  author: {
    type: String,
    default: '',
    trim: true,
    required: 'Author cannot be blank'
  },
  genre: {
    type: String,
    default: '',
    trim: true
  },
  period: {
    type: String,
    default: '',
    trim: true
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Note', NoteSchema);
