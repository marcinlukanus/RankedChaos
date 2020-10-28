const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const players = new Schema({
  discordId: String,
  displayName: String,
  mmr: {
    type: Number,
    default: 1000,
  },
  rank: {
    type: String,
    enum: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Champion', 'Grand Champion'],
    default: 'Platinum',
  },
  server: {
    type: String,
    enum: ['US-WEST', 'US-EAST', 'EU'],
    default: 'US-EAST',
  },
});

const model = mongoose.model('players', players);

module.exports = model;