const express = require("express");
const router = express.Router();
const { getCountriesList, getCountryMovies } = require("../controllers/countryController"); 
const { getCarouselData } = require("../controllers/carouselController");
const { getContent } = require("../controllers/contentController")
const { getAllMovies } = require("../controllers/movieController")
const { searchContent } = require("../controllers/searchController")

// 📌 Route to fetch carousel data (titles, descriptions, images)
router.get("/carousel", getCarouselData);

// 📌 Route to fetch only country names and images
router.get("/countries-list", getCountriesList);

router.get('/countries/:countryName', getCountryMovies);

// 📌 Route to fetch all the movies
router.get("/movies", getAllMovies)

// 📌 Search API Route
router.get("/search", searchContent);

// Route to match the new structure
router.get("/movies/:id", getContent);

module.exports = router;
