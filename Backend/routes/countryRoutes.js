const express = require("express");
const router = express.Router();
const { getCountriesList } = require("../controllers/countryController"); 
const { getCarouselData } = require("../controllers/carouselController");
const { getContent } = require("../controllers/contentController")
const { getAllMovies } = require("../controllers/movieController")
const { searchContent } = require("../controllers/searchController")

// 📌 Route to fetch carousel data (titles, descriptions, images)
router.get("/carousel", getCarouselData);

// 📌 Route to fetch only country names and images
router.get("/countries-list", getCountriesList);

// 📌 Route to fetch all the movies
router.get("/movies", getAllMovies)

// 📌 Search API Route
router.get("/search", searchContent);

// 📌 Route to fetch content details for Player Page
router.get("/countries/:countryName/:genreName/:contentTitle", getContent);

module.exports = router;
