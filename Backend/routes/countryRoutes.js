const express = require("express");
const router = express.Router();
const Country = require("../models/Country");

// 📌 Fetch titles, descriptions, and images for the carousel
router.get("/carousel", async (req, res) => {
  try {
    const countries = await Country.find(); // Fetch all countries

    let carouselData = [];

    // Extract relevant data from each country
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
});

module.exports = router;
