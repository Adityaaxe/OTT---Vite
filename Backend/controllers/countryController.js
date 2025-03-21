const Movie = require("../models/Movie");

// 📌 Fetch unique country names from production_countries[0]
const getCountriesList = async (req, res) => {
  try {
    const movies = await Movie.find({}, "production_countries posterImage cardImage");

    // Extract the first country from production_countries and remove duplicates
    const countryMap = new Map();
    movies.forEach(movie => {
      const countryName = movie.production_countries?.[0] || "Unknown";
      if (countryName !== "Unknown" && !countryMap.has(countryName)) {
        countryMap.set(countryName, {
          name: countryName,
          imageUrl: movie.posterImage || movie.cardImage || "" // Use any available image
        });
      }
    });

    res.json([...countryMap.values()]);
  } catch (error) {
    console.error("Error fetching country list:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 📌 Fetch movies by country (matching production_countries[0])
const getCountryByName = async (req, res) => {
  try {
    const countryName = req.params.name;

    // Find movies where production_countries[0] matches the given country
    const movies = await Movie.find({ "production_countries.0": countryName }).lean();

    if (!movies.length) {
      return res.status(404).json({ message: "Country not found" });
    }

    res.json(movies);
  } catch (error) {
    console.error("Error fetching country:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCountriesList, getCountryByName };
