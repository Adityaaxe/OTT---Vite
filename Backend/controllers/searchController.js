const Movie = require("../models/Movie");

const searchContent = async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    // Case-insensitive search on title field
    const searchResults = await Movie.find({
      title: { $regex: query, $options: "i" },
    }).select("id title genres Cardimg Posterimg VideoURL");

    res.json(
      searchResults.map((movie) => ({
        id: movie._id, // Ensure id is the first property
        title: movie.title,
        genre: movie.genres?.[0] || "Unknown",
        img: movie.Cardimg || movie.Posterimg || "https://via.placeholder.com/100",
        videoUrl: movie.VideoURL
      })).filter(result => result.id) // Filter out any results without an ID
    );
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { searchContent };