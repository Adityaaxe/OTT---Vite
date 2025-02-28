const mongoose = require('mongoose');
const Country = require('./models/Country');

mongoose.connect('mongodb+srv://adityadikhit:Wcobt2phn9wZ4ndI@clusterott.nesg9.mongodb.net/combinedott', { useNewUrlParser: true, useUnifiedTopology: true });

const seedData = async () => {
  const countries = [
    {
      name: 'Pakistan',
      genres: [
        {
          name: 'Drama',
          contents: [
            { title: 'Humsafar', description: 'A romantic drama...', releaseYear: 2011, imageUrl: 'humsafar.jpg', videoUrl: 'humsafar.mp4' },
            { title: 'Zindagi Gulzar Hai', description: 'A story of love...', releaseYear: 2013, imageUrl: 'zg.jpg', videoUrl: 'zg.mp4' },
          ],
        },
        {
          name: 'Comedy',
          contents: [
            { title: 'Bulbulay', description: 'A hilarious sitcom...', releaseYear: 2009, imageUrl: 'bulbulay.jpg', videoUrl: 'bulbulay.mp4' },
          ],
        },
      ],
    },
    {
      name: 'India',
      genres: [
        {
          name: 'Action',
          contents: [
            { title: 'Shershaah', description: 'A biopic...', releaseYear: 2021, imageUrl: 'shershaah.jpg', videoUrl: 'shershaah.mp4' },
          ],
        },
      ],
    },
  ];

  await Country.insertMany(countries);
  console.log('Database seeded!');
  mongoose.connection.close();
};

seedData();
