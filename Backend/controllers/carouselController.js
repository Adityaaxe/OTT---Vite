const Movie = require("../models/Movie");

const getCarouselData = async (req, res) => {
  try {
    const carouselData = await Movie.find({ isCarousel: true })
      .select("title overview genres posterImage cardImage")
      .limit(10);

    const formattedCarouselData = carouselData.map((movie) => ({
      title: movie.title,
      overview: Array.isArray(movie.overview) 
        ? movie.overview.join(" ")
          .replace(/^\[|\]$/g, '')  // Remove square brackets at start and end
          .replace(/[,']/g, '')     // Remove commas and single quotes
          .replace(/â€™/g, "'")     // Replace problematic encoding with standard apostrophe
        : String(movie.overview)
          .replace(/^\[|\]$/g, '')  // Remove square brackets at start and end
          .replace(/[,']/g, '')     // Remove commas and single quotes
          .replace(/â€™/g, "'"),    // Replace problematic encoding with standard apostrophe
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