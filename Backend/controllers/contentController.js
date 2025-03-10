const Country = require("../models/Country"); // Import Country model

// 📌 Fetch country names and images
const getCountriesList = async (req, res) => {
  try {
    const countries = await Country.find({}, "name imageUrl"); // Fetch only name & image
    res.json(countries);
  } catch (error) {
    console.error("Error fetching country list:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 📌 Fetch carousel data
const getCarouselData = async (req, res) => {
  try {
    const countries = await Country.find(); // Fetch all countries
    let carouselData = [];

    // Extract data from all countries and genres
    countries.forEach((country) => {
      country.genres.forEach((genre) => {
        genre.contents.forEach((content) => {
          carouselData.push({
            title: content.title,
            description: content.description,
            img: content.imageUrl, // Assuming imageUrl is stored correctly
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

// 📌 Fetch content details for the Player Page
const getContentDetails = async (req, res) => {
  try {
    const { countryName, genreName, contentTitle } = req.params;

    // Find country
    const country = await Country.findOne({ name: countryName });
    if (!country) return res.status(404).json({ message: "Country not found" });

    // Find genre inside the country
    const genre = country.genres.find((g) => g.name === genreName);
    if (!genre) return res.status(404).json({ message: "Genre not found" });

    // Find content inside the genre
    const content = genre.contents.find((c) => c.title === contentTitle);
    if (!content) return res.status(404).json({ message: "Content not found" });

    res.json(content);
  } catch (error) {
    console.error("Error fetching content:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCountriesList, getCarouselData, getContentDetails };
