// controllers/userController.js
const axios = require("axios");

const getAllUsers = async (req, res) => {
  try {
    const response = await axios.get("https://api.clerk.com/v1/users", {
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      },
    });

    res.status(200).json(response.data);
  } catch (err) {
    console.error("Failed to fetch users:", err.message);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

module.exports = { getAllUsers };
