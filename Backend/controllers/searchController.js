const Country = require("../models/Movie"); // ✅ Import the Country model

// 📌 Search content from database
const searchContent = async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const countries = await Country.find();
    let searchResults = [];

    countries.forEach((country) => {
      country.genres.forEach((genre) => {
        genre.contentTypes.forEach((contentType) => {
          contentType.contents.forEach((content) => {
            if (content.title.toLowerCase().includes(query.toLowerCase())) { // ✅ Case-insensitive search
              searchResults.push({
                countryName: country.name,
                genreName: genre.name,
                title: content.title,
                img: content.imageUrl,
              });
            }
          });
        });
      });
    });

    res.json(searchResults);
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { searchContent };


