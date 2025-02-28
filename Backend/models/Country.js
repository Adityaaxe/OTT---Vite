const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
  releaseYear: Number,
  imageUrl: String,
  videoUrl: String,
});

const genreSchema = new mongoose.Schema({
  name: String,
  contents: [contentSchema],
});

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  genres: [genreSchema],
});

const Country = mongoose.model('Country', countrySchema);
module.exports = Country;
