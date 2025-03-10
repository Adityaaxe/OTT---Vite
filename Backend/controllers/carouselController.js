const Country = require("../models/Country"); // ✅ Import the Country model

// 📌 Fetch carousel data (titles, descriptions, images)
const getCarouselData = async (req, res) => {
  try {
    const countries = await Country.find();
    let carouselData = [];

    countries.forEach((country) => {
      country.genres.forEach((genre) => {
        genre.contents.forEach((content) => {
          carouselData.push({
            countryName: country.name,
            genreName: genre.name,
            title: content.title,
            description: content.description,
            img: content.imageUrl, 
          });
        });
      });
    });

    res.json(carouselData);
  } catch (error) {
    console.error("Error fetching carousel data:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCarouselData };
