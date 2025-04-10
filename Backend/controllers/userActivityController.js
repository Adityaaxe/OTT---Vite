const User = require("../models/User");

// Add to watchlist
exports.addToWatchlist = async (req, res) => {
  const { clerkId, movieId } = req.body;
  
  if (!clerkId || !movieId) {
    return res.status(400).json({ error: "Missing required parameters" });
  }
  
  try {
    // Find or create user
    let user = await User.findOne({ clerkId });
    
    // If user doesn't exist, create a new one
    if (!user) {
      user = new User({
        clerkId,
        email: req.body.email || `user-${clerkId}@example.com`, // Default email if not provided
        watchlist: [],
        watchHistory: []
      });
    }
    
    // Add movie to watchlist if not already there
    if (!user.watchlist.includes(movieId)) {
      user.watchlist.push(movieId);
    }
    
    // Save the user
    await user.save();
    
    res.json(user.watchlist);
  } catch (err) {
    console.error("Error adding to watchlist:", err);
    res.status(500).json({ error: "Failed to add to watchlist" });
  }
};

// Remove from watchlist
exports.removeFromWatchlist = async (req, res) => {
  const { clerkId, movieId } = req.body;
  
  if (!clerkId || !movieId) {
    return res.status(400).json({ error: "Missing required parameters" });
  }
  
  try {
    // Find user or create if doesn't exist
    let user = await User.findOne({ clerkId });
    
    if (!user) {
      // If trying to remove from non-existent user, just return empty array
      return res.json([]);
    }
    
    // Remove movie from watchlist
    user.watchlist = user.watchlist.filter(id => id.toString() !== movieId.toString());
    
    // Save the user
    await user.save();
    
    res.json(user.watchlist);
  } catch (err) {
    console.error("Error removing from watchlist:", err);
    res.status(500).json({ error: "Failed to remove from watchlist" });
  }
};

// Add to watch history
exports.addToWatchHistory = async (req, res) => {
  const { clerkId, movieId } = req.body;
  
  if (!clerkId || !movieId) {
    return res.status(400).json({ error: "Missing required parameters" });
  }
  
  try {
    // Find or create user
    let user = await User.findOne({ clerkId });
    
    if (!user) {
      user = new User({
        clerkId,
        email: req.body.email || `user-${clerkId}@example.com`,
        watchlist: [],
        watchHistory: []
      });
    }
    
    // Add movie to watch history if not already there
    if (!user.watchHistory.includes(movieId)) {
      user.watchHistory.push(movieId);
    }
    
    // Save the user
    await user.save();
    
    res.json(user.watchHistory);
  } catch (err) {
    console.error("Error adding to watch history:", err);
    res.status(500).json({ error: "Failed to add to watch history" });
  }
};

// Get watchlist
exports.getWatchlist = async (req, res) => {
  const { clerkId } = req.params;
  
  if (!clerkId) {
    return res.status(400).json({ error: "Missing required parameter" });
  }
  
  try {
    const user = await User.findOne({ clerkId });
    res.json(user?.watchlist || []);
  } catch (err) {
    console.error("Error fetching watchlist:", err);
    res.status(500).json({ error: "Failed to fetch watchlist" });
  }
};

// Get watch history
exports.getWatchHistory = async (req, res) => {
  const { clerkId } = req.params;
  
  if (!clerkId) {
    return res.status(400).json({ error: "Missing required parameter" });
  }
  
  try {
    const user = await User.findOne({ clerkId });
    res.json(user?.watchHistory || []);
  } catch (err) {
    console.error("Error fetching watch history:", err);
    res.status(500).json({ error: "Failed to fetch watch history" });
  }
};