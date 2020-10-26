const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const players = new Schema({
  discordId: String,
  displayName: String,
});

const model = mongoose.model('players', players);

module.exports = model;