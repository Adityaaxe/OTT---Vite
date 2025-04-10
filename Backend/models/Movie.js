const mongoose = require("mongoose");

// Define the Movie Schema
const movieSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  overview: { type: String, required: true },
  genres: [{ type: String }],
  keywords: [{ type: String }],
  spoken_languages: [{ type: String }],
  production_countries: [{ type: String }],
  cast: [{ type: String }],
  directors: [{ type: String }],
  writers: [{ type: String }],
  Posterimg: { type: String, required: false }, // ✅ Make sure it's not required if empty values exist
  Cardimg: { type: String, required: false }, // ✅ Same here
  isCarousel: { type: Boolean, default: false },
  VideoURL: { type: String, required: false }
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
