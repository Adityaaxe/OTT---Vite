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

// Get movies for a specific country
const getCountryMovies = async (req, res) => {
  try {
    // More robust country name handling
    const rawCountryName = req.params.countryName;
    console.log("Raw country name received:", rawCountryName);

    // Decode and trim the country name
    const countryName = decodeURIComponent(rawCountryName).trim();
    console.log("Processed country name:", countryName);

    // Log all production countries in the database
    const allProductionCountries = await Movie.distinct('production_countries');
    console.log("All production countries in database:", allProductionCountries);

    // More flexible matching
    const movies = await Movie.find({ 
      $or: [
        { production_countries: { $in: [countryName] } },
        { production_countries: { $in: [countryName.replace(/\s/g, '')] } }
      ]
    }).select("id title genres cardImage posterImage");

    console.log(`Found ${movies.length} movies for ${countryName}`);

    if (!movies || movies.length === 0) {
      return res.status(404).json({ 
        message: `No movies found for country: ${countryName}`,
        allCountries: allProductionCountries 
      });
    }

    res.json({
      name: countryName,
      movies: movies.map(movie => ({
        id: movie._id,
        title: movie.title,
        genres: movie.genres,
        cardImage: movie.cardImage || "",
        posterImage: movie.posterImage || ""
      }))
    });
  } catch (error) {
    console.error("Detailed error in getCountryMovies:", error);
    res.status(500).json({ 
      message: "Server error fetching country movies",
      error: error.message 
    });
  }
};

module.exports = {
  getCountriesList,
  getCountryMovies
};