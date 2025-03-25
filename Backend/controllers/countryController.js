const Movie = require("../models/Movie");

// 📌 Fetch all unique country names from production_countries array
const getCountriesList = async (req, res) => {
  try {
    const movies = await Movie.find({}, "production_countries").lean();

    // Extract all unique country names from production_countries array
    const uniqueCountries = [
      ...new Set(movies.flatMap(movie => movie.production_countries).filter(Boolean))
    ];

    // Convert unique country names into an array of objects for the frontend
    const countryList = uniqueCountries.map(country => ({ name: country }));

    res.json(countryList);
  } catch (error) {
    console.error("Error fetching country list:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCountriesList };
