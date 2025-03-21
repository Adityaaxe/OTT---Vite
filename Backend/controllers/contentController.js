const Country = require("../models/Movie"); // Import Country model

// Fetch specific content based on country, genre, and title
const getContent = async (req, res) => {
  try {
    const { countryName, genreName, contentTitle } = req.params;

    // Find the country
    const country = await Country.findOne({ name: countryName });
    if (!country) return res.status(404).json({ message: "Country not found" });

    // Find the genre inside the country
    const genre = country.genres.find((g) => g.name === genreName);
    if (!genre) return res.status(404).json({ message: "Genre not found" });

    // Find content inside `contentTypes`
    let foundContent = null;
    genre.contentTypes.forEach((type) => {
      const content = type.contents.find((c) => c.title === contentTitle);
      if (content) foundContent = content;
    });

    if (!foundContent) return res.status(404).json({ message: "Content not found" });

    // Handle movie with multiple parts
    if (foundContent.movieParts && foundContent.movieParts.length > 0) {
      return res.json({
        type: "movie",
        title: foundContent.title,
        description: foundContent.description,
        posterImage: foundContent.posterImage,
        cardImage: foundContent.cardImage,
        isCarousel: foundContent.isCarousel,
        parts: foundContent.movieParts, // Properly returning movie parts
        videoUrl: foundContent.movieParts[0].videoUrl, // Default to first part
      });
    }

    // Handle series with seasons & episodes
    if (foundContent.seasons && foundContent.seasons.length > 0) {
      return res.json({
        type: "series",
        title: foundContent.title,
        description: foundContent.description,
        posterImage: foundContent.posterImage,
        cardImage: foundContent.cardImage,
        isCarousel: foundContent.isCarousel,
        seasons: foundContent.seasons.map((season) => ({
          seasonNumber: season.seasonNumber,
          episodes: season.episodes,
        })),
        videoUrl:
          foundContent.seasons[0].episodes.length > 0
            ? foundContent.seasons[0].episodes[0].videoUrl
            : null, // Default to first episode
      });
    }

    // Default response for single-part movies
    res.json({
      type: "movie",
      title: foundContent.title,
      description: foundContent.description,
      posterImage: foundContent.posterImage,
      cardImage: foundContent.cardImage,
      isCarousel: foundContent.isCarousel,
      parts: [],
      videoUrl: null,
    });
  } catch (error) {
    console.error("Error fetching content:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getContent };
