const Country = require("../models/Movie"); // ✅ Import the Country model

// 📌 Fetch only TV Shows from the database
const getAllTVShows = async (req, res) => {
  try {
    const countries = await Country.find();
    let tvShowsData = [];

    countries.forEach((country) => {
      country.genres.forEach((genre) => {
        genre.contentTypes.forEach((contentType) => {
          if (contentType.type === "TV Shows") {  // ✅ Filter only TV Shows
            contentType.contents.forEach((content) => {
              tvShowsData.push({
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

    res.json(tvShowsData);
  } catch (error) {
    console.error("Error fetching TV Shows:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getAllTVShows };
