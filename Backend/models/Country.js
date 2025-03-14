const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
  title: String,
  episodeNumber: Number,
  duration: String,
  releaseDate: String,
  videoUrl: String,
});

const seasonSchema = new mongoose.Schema({
  seasonNumber: Number,
  releaseYear: Number,
  episodes: [episodeSchema],
});

const moviePartSchema = new mongoose.Schema({
  title: String,
  partNumber: Number,
  releaseYear: Number,
  duration: String,
  videoUrl: String,
});

const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
  posterImage: String, // ✅ Added field for poster image
  cardImage: String,   // ✅ Added field for card image
  isCarousel: Boolean, // ✅ Added field to control carousel content
  type: { type: String, enum: ["series", "movie"] },
  seasons: [seasonSchema], // Only for series
  movieParts: [moviePartSchema], // Only for movies
});

const contentTypeSchema = new mongoose.Schema({
  type: { type: String, enum: ["TV Shows", "Movies", "Anime Series", "Anime Movies"] },
  contents: [contentSchema],
});

const genreSchema = new mongoose.Schema({
  name: String,
  image: String, // ✅ Added field for genre image
  contentTypes: [contentTypeSchema],
});

const countrySchema = new mongoose.Schema({
  name: String,
  image: String, // ✅ Added field for country image
  genres: [genreSchema],
});

const Country = mongoose.model("Country", countrySchema);
module.exports = Country;
