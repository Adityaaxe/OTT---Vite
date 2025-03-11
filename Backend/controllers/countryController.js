const Country = require("../models/Country");

// 📌 Fetch all countries
const getCountriesList = async (req, res) => {
  try {
    const countries = await Country.find({}, "name imageUrl"); // Fetch only name & image
    res.json(countries);
  } catch (error) {
    console.error("Error fetching country list:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch a specific country and its genres
const getCountryByName = async (req, res) => {
  try {
    const country = await Country.findOne({ name: { $regex: new RegExp(`^${req.params.name}$`, "i") } }).lean();

    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }

    res.json(country);
  } catch (error) {
    console.error("Error fetching country:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCountriesList, getCountryByName };
