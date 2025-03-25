const Movie = require("../models/Movie"); // ✅ Import the Movie model

// 📌 Search content from database
const searchContent = async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    // ✅ Case-insensitive search on title field
    const searchResults = await Movie.find({
      title: { $regex: query, $options: "i" },
    }).select("title genres cardImage");

    res.json(
      searchResults.map((movie) => ({
        title: movie.title,
        genre: movie.genres?.[0] || "Unknown", // ✅ Show first genre if available
        img: movie.cardImage || "https://via.placeholder.com/100", // ✅ Default image
      }))
    );
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { searchContent };
