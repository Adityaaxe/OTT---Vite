const Movie = require("../models/Movie"); // ✅ Ensure the correct model is imported

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find(); // ✅ Fetch all movies

    if (!movies.length) {
      return res.status(404).json({ message: "No movies found" });
    }

    // ✅ Map movies correctly based on the new dataset structure
    let moviesData = movies.map((movie) => ({
      title: movie.title,
      description: Array.isArray(movie.overview) ? movie.overview.join(" ") : movie.overview,
      img: movie.posterImage || "https://via.placeholder.com/150", // ✅ Handle missing images
      genres: movie.genres || [],
      productionCountry: movie.production_countries[0] || "Unknown",
    }));

    res.json(moviesData);
  } catch (error) {
    console.error("Error fetching movies:", error); // ✅ Log the error
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getAllMovies };
