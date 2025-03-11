const mongoose = require("mongoose");

// Define the content schema (for individual movies, TV shows, etc.)
const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
  releaseYear: Number,
  imageUrl: String,
  videoUrl: String,
});

// Define the content type schema (Movies, TV Shows, Anime, etc.)
const contentTypeSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., "Movies", "TV Shows", "Anime Movies", "Anime Series"
  contents: [contentSchema], // Array of content under this type
});

// Define the genre schema (Action, Drama, etc.)
const genreSchema = new mongoose.Schema({
  name: String, // Genre name (e.g., Action, Comedy, Drama)
  contentTypes: [contentTypeSchema], // Each genre has different types of content
});

// Define the country schema (Pakistan, India, etc.)
const countrySchema = new mongoose.Schema({
  name: { type: String, required: true }, // Country name
  genres: [genreSchema], // Each country has multiple genres
});

const Country = mongoose.model("Country", countrySchema);
module.exports = Country;
