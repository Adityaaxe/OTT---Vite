const express = require("express");
const router = express.Router();
const { getCountriesList , getCountryByName } = require("../controllers/countryController"); 
const { getCarouselData } = require("../controllers/carouselController");
const { getContentDetails } = require("../controllers/contentController")

// 📌 Route to fetch carousel data (titles, descriptions, images)
router.get("/carousel", getCarouselData);

// 📌 Route to fetch only country names and images
router.get("/countries-list", getCountriesList);
router.get("/countries/:name", getCountryByName);

// 📌 Route to fetch content details for Player Page
router.get("/countries/:countryName/:genreName/:contentTitle", getContentDetails);

module.exports = router;
