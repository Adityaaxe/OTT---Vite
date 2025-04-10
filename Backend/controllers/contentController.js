const Movie = require("../models/Movie");

const getContent = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the specific movie by its ID
    const movie = await Movie.findById(id);
    
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    // Format the overview (remove brackets and quotes)
    const formattedOverview = Array.isArray(movie.overview) 
      ? movie.overview.join(" ")
        .replace(/^\[|\]$/g, '')  // Remove square brackets
        .replace(/[,']/g, '')     // Remove commas and single quotes
        .replace(/â€™/g, "'")     // Fix encoding issues
      : String(movie.overview)
        .replace(/^\[|\]$/g, '')
        .replace(/[,']/g, '')
        .replace(/â€™/g, "'");

    // Return movie details
    res.json({
      type: "movie",
      id: movie._id,
      title: movie.title,
      description: formattedOverview,
      genres: movie.genres,
      posterImage: movie.posterImage,
      cardImage: movie.cardImage,
      isCarousel: movie.isCarousel,
      videoUrl: movie.VideoURL, // Add video URL if available in your model
      parts: [] // Add parts if applicable
    });
  } catch (error) {
    console.error("Error fetching content:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getContent };