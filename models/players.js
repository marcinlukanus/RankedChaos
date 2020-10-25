const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const players = new Schema({
  name: String,
});

const model = mongoose.model('players', players);

module.exports = model;