const User = require("../models/User");
const Movie = require("../models/Movie");

exports.getWatchlistContent = async (req, res) => {
  const { clerkId } = req.params;

  try {
    const user = await User.findOne({ clerkId });

    if (!user || !user.watchlist) {
      return res.status(404).json({ message: "User or watchlist not found" });
    }

    const movies = await Movie.find({ _id: { $in: user.watchlist } });

    res.json(movies);
  } catch (error) {
    console.error("Failed to fetch watchlist content:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
