const mongoose = require("mongoose");
const Country = require("./models/Movie"); // Import the Country model

// Connect to MongoDB
mongoose.connect("mongodb+srv://adityadikhit:gWxS7GeN8QFOkFo1@clusterott.nesg9.mongodb.net/combinedott", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Delete all existing data in the "countries" collection
Country.deleteMany({})
  .then(() => {
    console.log("✅ Old data deleted successfully!");
    mongoose.connection.close(); // Close DB connection
  })
  .catch((error) => {
    console.error("❌ Error deleting data:", error);
    mongoose.connection.close();
  });
