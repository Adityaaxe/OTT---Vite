const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  watchlist: [{ type: mongoose.Schema.Types.Mixed }],
  watchHistory: [{ type: mongoose.Schema.Types.Mixed }],
});

module.exports = mongoose.model("User", userSchema, "users");
