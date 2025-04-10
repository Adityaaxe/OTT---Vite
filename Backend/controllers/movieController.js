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
      img: movie.Cardimg,
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

// Controller to handle movie upload
const uploadMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(201).send("Movie uploaded");
  } catch (err) {
    console.error("Upload failed:", err);
    res.status(500).send("Upload failed");
  }
};

const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findOneAndUpdate(
      { id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!updatedMovie) return res.status(404).send("Movie not found");
    res.send("Movie updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Update failed");
  }
};

module.exports = { 
  getAllMovies,
  uploadMovie,
  updateMovie,
 };