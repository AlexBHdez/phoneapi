const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
  brand: { type: String },
  model: { type: String },
  image: { type: String },
  specs: { type: Array, default: [] },
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
