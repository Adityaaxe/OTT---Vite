const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const countryRoutes = require('./routes/countryRoutes');

dotenv.config();

const app = express();
const dbURI = 'mongodb+srv://adityadikhit:gWxS7GeN8QFOkFo1@clusterott.nesg9.mongodb.net/combinedott'; 

app.use(cors());
app.use(express.json());

app.use('/api', countryRoutes);

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
