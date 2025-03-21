const Movie = require("../models/Movie"); // ✅ Import the Movie model

// 📌 Fetch carousel data (Limit to 10 slides)
const getCarouselData = async (req, res) => {
  try {
    // ✅ Find only movies where `isCarousel` is `true`
    const carouselData = await Movie.find({ isCarousel: true })
      .select("title overview genres posterImage cardImage") // ✅ Fetch only required fields
      .limit(10); // ✅ Limit to 10 items

    // ✅ Fix overview formatting (Convert array to string)
    const formattedCarouselData = carouselData.map((movie) => ({
      title: movie.title,
      overview: Array.isArray(movie.overview) ? movie.overview.join(" ") : String(movie.overview),
      genres: movie.genres,
      posterImage: movie.posterImage,
      cardImage: movie.cardImage,
    }));

    res.json(formattedCarouselData);
  } catch (error) {
    console.error("Error fetching carousel data:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCarouselData };
