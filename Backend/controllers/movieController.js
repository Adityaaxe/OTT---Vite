const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    if (!movies.length) {
      return res.status(404).json({ message: "No movies found" });
    }

    // Improved mapping to include _id and handle potential data inconsistencies
    let moviesData = movies.map((movie) => ({
      _id: movie._id.toString(), // Explicitly convert MongoDB _id to string
      title: movie.title,
      description: Array.isArray(movie.overview) 
        ? movie.overview.join(" ")
          .replace(/^\[|\]$/g, '')  // Remove square brackets
          .replace(/[,']/g, '')     // Remove commas and single quotes
          .replace(/â€™/g, "'")     // Fix encoding issues
        : movie.overview
          .replace(/^\[|\]$/g, '')
          .replace(/[,']/g, '')
          .replace(/â€™/g, "'"),
      img: movie.cardImage || movie.posterImage || "https://via.placeholder.com/150",
      genres: movie.genres || [],
      productionCountry: Array.isArray(movie.production_countries) 
        ? movie.production_countries[0] 
        : "Unknown",
      cardImage: movie.cardImage,
      posterImage: movie.posterImage
    }));

    res.json(moviesData);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getAllMovies };