const Country = require("../models/Country"); // ✅ Import the Country model

// 📌 Fetch only movies from the database
const getAllMovies = async (req, res) => {
  try {
    const countries = await Country.find();
    let moviesData = [];

    countries.forEach((country) => {
      country.genres.forEach((genre) => {
        genre.contentTypes.forEach((contentType) => {
          if (contentType.type === "Movies") {  // ✅ Filter only Movies
            contentType.contents.forEach((content) => {
              moviesData.push({
                countryName: country.name,
                genreName: genre.name,
                title: content.title,
                description: content.description,
                img: content.imageUrl,
              });
            });
          }
        });
      });
    });

    res.json(moviesData);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getAllMovies };
