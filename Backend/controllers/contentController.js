const Country = require("../models/Country"); // ✅ Import Country model

// 📌 Fetch specific content based on country, genre, and title
const getContent = async (req, res) => {
  try {
    const { countryName, genreName, contentTitle } = req.params;

    // 🔎 Find the country
    const country = await Country.findOne({ name: countryName });
    if (!country) return res.status(404).json({ message: "Country not found" });

    // 🔎 Find the genre inside the country
    const genre = country.genres.find((g) => g.name === genreName);
    if (!genre) return res.status(404).json({ message: "Genre not found" });

    // 🔎 Find content inside `contentTypes`
    let foundContent = null;
    genre.contentTypes.forEach((type) => {
      const content = type.contents.find((c) => c.title === contentTitle);
      if (content) foundContent = content;
    });

    if (!foundContent) return res.status(404).json({ message: "Content not found" });

    res.json(foundContent);
  } catch (error) {
    console.error("Error fetching content:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getContent };
