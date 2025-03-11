const mongoose = require("mongoose");
const Country = require("./models/Country");

mongoose.connect("mongodb+srv://adityadikhit:gWxS7GeN8QFOkFo1@clusterott.nesg9.mongodb.net/combinedott", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  const countries = [
    {
      name: "Pakistan",
      genres: [
        {
          name: "Drama",
          contentTypes: [
            {
              type: "TV Shows",
              contents: [
                { title: "Humsafar", description: "A romantic drama...", releaseYear: 2011, imageUrl: "humsafar.jpg", videoUrl: "humsafar.mp4" },
                { title: "Zindagi Gulzar Hai", description: "A story of love...", releaseYear: 2013, imageUrl: "zg.jpg", videoUrl: "zg.mp4" },
                { title: "Meri Zaat Zarra-e-Benishan", description: "A heart-touching drama...", releaseYear: 2009, imageUrl: "mzzb.jpg", videoUrl: "mzzb.mp4" }
              ],
            },
          ],
        },
        {
          name: "Comedy",
          contentTypes: [
            {
              type: "TV Shows",
              contents: [
                { title: "Bulbulay", description: "A hilarious sitcom...", releaseYear: 2009, imageUrl: "bulbulay.jpg", videoUrl: "bulbulay.mp4" },
                { title: "Dolly Ki Ayegi Baraat", description: "A fun-filled family show...", releaseYear: 2010, imageUrl: "dolly.jpg", videoUrl: "dolly.mp4" }
              ],
            },
          ],
        },
        {
          name: "Action",
          contentTypes: [
            {
              type: "Movies",
              contents: [
                { title: "Waar", description: "An action thriller...", releaseYear: 2013, imageUrl: "waar.jpg", videoUrl: "waar.mp4" },
                { title: "Teefa in Trouble", description: "A blend of action and comedy...", releaseYear: 2018, imageUrl: "teefa.jpg", videoUrl: "teefa.mp4" }
              ],
            },
          ],
        },
      ],
    },
    {
      name: "India",
      genres: [
        {
          name: "Action",
          contentTypes: [
            {
              type: "Movies",
              contents: [
                { title: "Shershaah", description: "A biopic of a soldier...", releaseYear: 2021, imageUrl: "shershaah.jpg", videoUrl: "shershaah.mp4" },
                { title: "War", description: "A high-octane action thriller...", releaseYear: 2019, imageUrl: "war.jpg", videoUrl: "war.mp4" },
                { title: "Pathaan", description: "An intense spy thriller...", releaseYear: 2023, imageUrl: "pathaan.jpg", videoUrl: "pathaan.mp4" }
              ],
            },
          ],
        },
        {
          name: "Drama",
          contentTypes: [
            {
              type: "TV Shows",
              contents: [
                { title: "Kyunki Saas Bhi Kabhi Bahu Thi", description: "An Indian family drama...", releaseYear: 2000, imageUrl: "ksbkt.jpg", videoUrl: "ksbkt.mp4" },
                { title: "Yeh Rishta Kya Kehlata Hai", description: "A story of relationships...", releaseYear: 2009, imageUrl: "yrkkh.jpg", videoUrl: "yrkkh.mp4" }
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Japan", // ✅ All Anime Content Belongs Here 🇯🇵
      genres: [
        {
          name: "Anime",
          contentTypes: [
            {
              type: "Anime Series",
              contents: [
                { title: "Naruto", description: "A young ninja's journey...", releaseYear: 2002, imageUrl: "naruto.jpg", videoUrl: "naruto.mp4" },
                { title: "Attack on Titan", description: "A battle against the Titans...", releaseYear: 2013, imageUrl: "aot.jpg", videoUrl: "aot.mp4" },
                { title: "One Piece", description: "The journey of Luffy...", releaseYear: 1999, imageUrl: "onepiece.jpg", videoUrl: "onepiece.mp4" }
              ],
            },
            {
              type: "Anime Movies",
              contents: [
                { title: "Your Name", description: "A story of fate and love...", releaseYear: 2016, imageUrl: "yourname.jpg", videoUrl: "yourname.mp4" },
                { title: "Spirited Away", description: "A magical adventure...", releaseYear: 2001, imageUrl: "spiritedaway.jpg", videoUrl: "spiritedaway.mp4" },
                { title: "A Silent Voice", description: "A story of redemption...", releaseYear: 2016, imageUrl: "asilentvoice.jpg", videoUrl: "asilentvoice.mp4" }
              ],
            },
          ],
        },
      ],
    },
  ];

  await Country.insertMany(countries);
  console.log("✅ Database seeded successfully!");
  mongoose.connection.close();
};

seedData();
