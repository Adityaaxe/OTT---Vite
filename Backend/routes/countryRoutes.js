const express = require("express");
const router = express.Router();
const { getCountriesList , getCountryByName } = require("../controllers/countryController"); 
const { getCarouselData } = require("../controllers/carouselController");
const { getContent } = require("../controllers/contentController")
const { getAllMovies } = require("../controllers/movieController")
const { getAllTVShows } = require("../controllers/tvController")
const { getAllAnimeSeries, getAllAnimeMovies } = require("../controllers/animeseriesController")
const { searchContent } = require("../controllers/searchController")

// 📌 Route to fetch carousel data (titles, descriptions, images)
router.get("/carousel", getCarouselData);

// 📌 Route to fetch only country names and images
router.get("/countries-list", getCountriesList);
router.get("/countries/:name", getCountryByName);

// 📌 Route to fetch all the movies
router.get("/movies", getAllMovies)

// 📌 Route to fetch all the TV Shows
router.get("/tvshows", getAllTVShows)

// 📌 Route to fetch all the Anime series
router.get("/animeseries", getAllAnimeSeries)

// 📌 Route to fetch all the Anime movies
router.get("/animemovies", getAllAnimeMovies)

// 📌 Search API Route
router.get("/search", searchContent);

// 📌 Route to fetch content details for Player Page
router.get("/countries/:countryName/:genreName/:contentTitle", getContent);

module.exports = router;
