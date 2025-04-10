const express = require("express");
const router = express.Router();
const { getCountriesList, getCountryMovies } = require("../controllers/countryController"); 
const { getCarouselData } = require("../controllers/carouselController");
const { getContent } = require("../controllers/contentController")
const { getAllMovies, uploadMovie, updateMovie } = require("../controllers/movieController")
const { searchContent } = require("../controllers/searchController")
const { getAllUsers } = require("../controllers/userController");
const {
    addToWatchlist,
    removeFromWatchlist,
    getWatchlist,
    addToWatchHistory,
    getWatchHistory,
  } = require("../controllers/userActivityController");
const { getWatchlistContent } = require("../controllers/watchlistController");

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

// ✅ Upload route for admin
router.post("/movies/upload", uploadMovie);
router.put("/movies/:id", updateMovie);

// User Fetch
router.get("/admin/users", getAllUsers);

// User Activity
router.post("/user/watchlist/add", addToWatchlist);
router.post("/user/watchlist/remove", removeFromWatchlist);
router.get("/user/watchlist/:clerkId", getWatchlist);

router.post("/user/history/add", addToWatchHistory);
router.get("/user/history/:clerkId", getWatchHistory);

// Watchlist Content
router.get("/user/watchlist-content/:clerkId", getWatchlistContent);

module.exports = router;
