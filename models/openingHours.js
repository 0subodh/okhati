const mongoose = require('mongoose');

const openingHoursSchema = new mongoose.Schema({
  day: { type: String, required: true, unique: true },
  open: { type: String, required: true },
  close: { type: String, required: true },
});

const OpeningHours = mongoose.model('OpeningHours', openingHoursSchema);

module.exports = OpeningHours;
