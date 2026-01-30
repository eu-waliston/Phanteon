const mongoose = require("mongoose");

const abilitySchema = new mongoose.Schema({
  key: {
    type: String,
    enum: ["P", "Q", "W", "E", "R"],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  champion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Champion",
    required: true,
  },
  championName: {
    type: String,
    required: true,
  },
  cooldown: {
    type: String,
  },
  cost: {
    type: String,
  },
  range: {
    type: String,
  },
  effect: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  iconUrl: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Ability", abilitySchema);
