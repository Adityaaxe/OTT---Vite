const Country = require("../models/Country"); // ✅ Import the Country model

// 📌 Fetch carousel data (Limit to 10 slides)
const getCarouselData = async (req, res) => {
  try {
    const countries = await Country.find();
    let carouselData = [];

    countries.forEach((country) => {
      country.genres.forEach((genre) => {
        genre.contentTypes.forEach((contentType) => {
          contentType.contents.forEach((content) => {
            if (content.isCarousel) { // ✅ Filter only carousel items
              carouselData.push({
                countryName: country.name,
                genreName: genre.name,
                title: content.title,
                description: content.description,
                posterImage: content.posterImage,
                cardImage: content.cardImage,
              });
            }
          });
        });
      });
    });

    // ✅ Return only the first 10 items
    res.json(carouselData.slice(0, 10));
  } catch (error) {
    console.error("Error fetching carousel data:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCarouselData };
