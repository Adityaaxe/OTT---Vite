const Movie = require("../models/Movie");

const getCarouselData = async (req, res) => {
  try {
    const carouselData = await Movie.find({ isCarousel: false })
      .select("_id title overview genres Posterimg Cardimg")
      .limit(10);

    const formattedCarouselData = carouselData.map((movie) => ({
      _id: movie._id.toString(), // Include _id
      title: movie.title,
      overview: Array.isArray(movie.overview)
        ? movie.overview.join(" ")
          .replace(/^\[|\]$/g, '')
          .replace(/[,']/g, '')
          .replace(/â€™/g, "'")
        : String(movie.overview)
          .replace(/^\[|\]$/g, '')
          .replace(/[,']/g, '')
          .replace(/â€™/g, "'"),
      genres: movie.genres,
      posterImage: movie.Posterimg,
      cardImage: movie.Cardimg,
    }));

    res.json(formattedCarouselData);
  } catch (error) {
    console.error("Error fetching carousel data:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCarouselData };