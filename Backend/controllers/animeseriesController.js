const Country = require("../models/Movie"); // ✅ Import the Country model

// 📌 Fetch only Anime Series from the database
const getAllAnimeSeries = async (req, res) => {
  try {
    const countries = await Country.find();
    let animeSeriesData = [];

    countries.forEach((country) => {
      country.genres.forEach((genre) => {
        genre.contentTypes.forEach((contentType) => {
          if (contentType.type === "Anime Series") {  // ✅ Filter only Anime Series
            contentType.contents.forEach((content) => {
              animeSeriesData.push({
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

    res.json(animeSeriesData);
  } catch (error) {
    console.error("Error fetching Anime Series:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 📌 Fetch only Anime Movies from the database
const getAllAnimeMovies = async (req, res) => {
    try {
      const countries = await Country.find();
      let animeSeriesData = [];
  
      countries.forEach((country) => {
        country.genres.forEach((genre) => {
          genre.contentTypes.forEach((contentType) => {
            if (contentType.type === "Anime Movies") {  // ✅ Filter only Anime Series
              contentType.contents.forEach((content) => {
                animeSeriesData.push({
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
  
      res.json(animeSeriesData);
    } catch (error) {
      console.error("Error fetching Anime Series:", error);
      res.status(500).json({ message: "Server error" });
    }
  };

module.exports = { getAllAnimeSeries, getAllAnimeMovies};
