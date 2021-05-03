const mongoose = require('mongoose');

const SackSchema = new mongoose.Schema({
  nights: {
    type: String,
  },
  location: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  warmMeals: {
    type: String,
  },
  luxury: {
    type: String,
  },
  sack: {
    clothes: {
      type: String,
    },
    sleepingBag: {
      type: String,
    },
    sleepingPad: {
      type: String,
    },
    waterBlatter: {
      type: String,
    },
    hikingBoots: {
      type: String,
    },
    tarp: {
      type: String,
    },
    sunscreen: {
      type: String,
    },
    jetBoil: {
      type: String,
    },
    waterPump: {
      type: String,
    },
    hammock: {
      type: String,
    },
    pillow: {
      type: String,
    },
  },
});

module.exports = mongoose.model('sack', SackSchema);
