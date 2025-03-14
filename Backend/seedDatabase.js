const mongoose = require("mongoose");
const Country = require("./models/Country");

mongoose.connect("mongodb+srv://adityadikhit:gWxS7GeN8QFOkFo1@clusterott.nesg9.mongodb.net/combinedott", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  const countries = [
    {
      "name": "India",
      "image": "https://example.com/images/india.jpg",
      "genres": [
        {
          "name": "Action",
          "image": "https://example.com/images/action.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Shadow Quest",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/shadow_quest.jpg",
                  "cardImage": "https://example.com/cards/shadow_quest.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Eternal Storm",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/eternal_storm.jpg",
                  "cardImage": "https://example.com/cards/eternal_storm.jpg",
                  "isCarousel": true,
                  "movieParts": [
                    {
                      "title": "Eternal Storm Part 1",
                      "partNumber": 1,
                      "releaseYear": 2019,
                      "duration": "87min",
                      "videoUrl": "https://example.com/eternal_storm_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Mystic Quest",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/mystic_quest.jpg",
                  "cardImage": "https://example.com/cards/mystic_quest.jpg",
                  "isCarousel": true,
                  "movieParts": [
                    {
                      "title": "Mystic Quest Part 1",
                      "partNumber": 1,
                      "releaseYear": 2000,
                      "duration": "125min",
                      "videoUrl": "https://example.com/mystic_quest_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Mystic Quest",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/mystic_quest.jpg",
                  "cardImage": "https://example.com/cards/mystic_quest.jpg",
                  "isCarousel": true,
                  "movieParts": [
                    {
                      "title": "Mystic Quest Part 1",
                      "partNumber": 1,
                      "releaseYear": 2007,
                      "duration": "168min",
                      "videoUrl": "https://example.com/mystic_quest_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Eternal Warrior",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/eternal_warrior.jpg",
                  "cardImage": "https://example.com/cards/eternal_warrior.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Mystic Prophecy",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/mystic_prophecy.jpg",
                  "cardImage": "https://example.com/cards/mystic_prophecy.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Phantom Storm",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/phantom_storm.jpg",
                  "cardImage": "https://example.com/cards/phantom_storm.jpg",
                  "isCarousel": true,
                  "movieParts": [
                    {
                      "title": "Phantom Storm Part 1",
                      "partNumber": 1,
                      "releaseYear": 2012,
                      "duration": "140min",
                      "videoUrl": "https://example.com/phantom_storm_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Shadow Prophecy",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/shadow_prophecy.jpg",
                  "cardImage": "https://example.com/cards/shadow_prophecy.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Shadow Storm",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/shadow_storm.jpg",
                  "cardImage": "https://example.com/cards/shadow_storm.jpg",
                  "isCarousel": true,
                  "movieParts": [
                    {
                      "title": "Shadow Storm Part 1",
                      "partNumber": 1,
                      "releaseYear": 2010,
                      "duration": "99min",
                      "videoUrl": "https://example.com/shadow_storm_part1.mp4"
                    }
                  ]
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Eternal Prophecy",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/eternal_prophecy.jpg",
                  "cardImage": "https://example.com/cards/eternal_prophecy.jpg",
                  "isCarousel": true,
                  "seasons": []
                },
                {
                  "title": "Phantom Warrior",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/phantom_warrior.jpg",
                  "cardImage": "https://example.com/cards/phantom_warrior.jpg",
                  "isCarousel": true,
                  "seasons": []
                },
                {
                  "title": "Infinity Saga",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/infinity_saga.jpg",
                  "cardImage": "https://example.com/cards/infinity_saga.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2022,
                      "episodes": [
                        {
                          "title": "Infinity Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "50min",
                          "releaseDate": "2006-10-13",
                          "videoUrl": "https://example.com/infinity_saga_ep1.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "34min",
                          "releaseDate": "2004-02-26",
                          "videoUrl": "https://example.com/infinity_saga_ep2.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "30min",
                          "releaseDate": "2000-09-23",
                          "videoUrl": "https://example.com/infinity_saga_ep3.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "32min",
                          "releaseDate": "2004-06-15",
                          "videoUrl": "https://example.com/infinity_saga_ep4.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "22min",
                          "releaseDate": "2005-09-05",
                          "videoUrl": "https://example.com/infinity_saga_ep5.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "37min",
                          "releaseDate": "2007-05-19",
                          "videoUrl": "https://example.com/infinity_saga_ep6.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "40min",
                          "releaseDate": "2000-03-25",
                          "videoUrl": "https://example.com/infinity_saga_ep7.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "35min",
                          "releaseDate": "2016-07-20",
                          "videoUrl": "https://example.com/infinity_saga_ep8.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "25min",
                          "releaseDate": "2015-10-06",
                          "videoUrl": "https://example.com/infinity_saga_ep9.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "21min",
                          "releaseDate": "2014-12-17",
                          "videoUrl": "https://example.com/infinity_saga_ep10.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "24min",
                          "releaseDate": "2007-07-12",
                          "videoUrl": "https://example.com/infinity_saga_ep11.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 12",
                          "episodeNumber": 12,
                          "duration": "47min",
                          "releaseDate": "2001-07-22",
                          "videoUrl": "https://example.com/infinity_saga_ep12.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 13",
                          "episodeNumber": 13,
                          "duration": "35min",
                          "releaseDate": "2019-08-27",
                          "videoUrl": "https://example.com/infinity_saga_ep13.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 14",
                          "episodeNumber": 14,
                          "duration": "26min",
                          "releaseDate": "2021-01-26",
                          "videoUrl": "https://example.com/infinity_saga_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Quest",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/eternal_quest.jpg",
                  "cardImage": "https://example.com/cards/eternal_quest.jpg",
                  "isCarousel": true,
                  "seasons": []
                },
                {
                  "title": "Dark Saga",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/dark_saga.jpg",
                  "cardImage": "https://example.com/cards/dark_saga.jpg",
                  "isCarousel": true,
                  "seasons": []
                },
                {
                  "title": "Shadow Empire",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/shadow_empire.jpg",
                  "cardImage": "https://example.com/cards/shadow_empire.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2015,
                      "episodes": [
                        {
                          "title": "Shadow Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "45min",
                          "releaseDate": "2011-01-21",
                          "videoUrl": "https://example.com/shadow_empire_ep1.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "39min",
                          "releaseDate": "2013-12-08",
                          "videoUrl": "https://example.com/shadow_empire_ep2.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "24min",
                          "releaseDate": "2009-11-15",
                          "videoUrl": "https://example.com/shadow_empire_ep3.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "35min",
                          "releaseDate": "2013-11-07",
                          "videoUrl": "https://example.com/shadow_empire_ep4.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "25min",
                          "releaseDate": "2020-05-09",
                          "videoUrl": "https://example.com/shadow_empire_ep5.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "20min",
                          "releaseDate": "2016-03-15",
                          "videoUrl": "https://example.com/shadow_empire_ep6.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "36min",
                          "releaseDate": "2018-12-28",
                          "videoUrl": "https://example.com/shadow_empire_ep7.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "28min",
                          "releaseDate": "2018-08-08",
                          "videoUrl": "https://example.com/shadow_empire_ep8.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "38min",
                          "releaseDate": "2023-11-05",
                          "videoUrl": "https://example.com/shadow_empire_ep9.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "45min",
                          "releaseDate": "2003-02-25",
                          "videoUrl": "https://example.com/shadow_empire_ep10.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "31min",
                          "releaseDate": "2019-01-28",
                          "videoUrl": "https://example.com/shadow_empire_ep11.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 12",
                          "episodeNumber": 12,
                          "duration": "20min",
                          "releaseDate": "2008-01-20",
                          "videoUrl": "https://example.com/shadow_empire_ep12.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 13",
                          "episodeNumber": 13,
                          "duration": "40min",
                          "releaseDate": "2022-02-28",
                          "videoUrl": "https://example.com/shadow_empire_ep13.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 14",
                          "episodeNumber": 14,
                          "duration": "30min",
                          "releaseDate": "2009-06-09",
                          "videoUrl": "https://example.com/shadow_empire_ep14.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2013,
                      "episodes": [
                        {
                          "title": "Shadow Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "44min",
                          "releaseDate": "2012-09-21",
                          "videoUrl": "https://example.com/shadow_empire_ep1.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "20min",
                          "releaseDate": "2018-01-28",
                          "videoUrl": "https://example.com/shadow_empire_ep2.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "42min",
                          "releaseDate": "2003-12-29",
                          "videoUrl": "https://example.com/shadow_empire_ep3.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "26min",
                          "releaseDate": "2000-10-16",
                          "videoUrl": "https://example.com/shadow_empire_ep4.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "29min",
                          "releaseDate": "2001-04-24",
                          "videoUrl": "https://example.com/shadow_empire_ep5.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "29min",
                          "releaseDate": "2011-01-19",
                          "videoUrl": "https://example.com/shadow_empire_ep6.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "36min",
                          "releaseDate": "2018-08-23",
                          "videoUrl": "https://example.com/shadow_empire_ep7.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "41min",
                          "releaseDate": "2021-08-08",
                          "videoUrl": "https://example.com/shadow_empire_ep8.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "40min",
                          "releaseDate": "2024-06-17",
                          "videoUrl": "https://example.com/shadow_empire_ep9.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "28min",
                          "releaseDate": "2021-01-17",
                          "videoUrl": "https://example.com/shadow_empire_ep10.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "34min",
                          "releaseDate": "2003-01-24",
                          "videoUrl": "https://example.com/shadow_empire_ep11.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 12",
                          "episodeNumber": 12,
                          "duration": "49min",
                          "releaseDate": "2020-11-15",
                          "videoUrl": "https://example.com/shadow_empire_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Prophecy",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/eternal_prophecy.jpg",
                  "cardImage": "https://example.com/cards/eternal_prophecy.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2014,
                      "episodes": [
                        {
                          "title": "Eternal Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "27min",
                          "releaseDate": "2013-02-11",
                          "videoUrl": "https://example.com/eternal_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "22min",
                          "releaseDate": "2018-08-16",
                          "videoUrl": "https://example.com/eternal_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "45min",
                          "releaseDate": "2004-08-11",
                          "videoUrl": "https://example.com/eternal_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "37min",
                          "releaseDate": "2019-08-20",
                          "videoUrl": "https://example.com/eternal_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "39min",
                          "releaseDate": "2004-08-17",
                          "videoUrl": "https://example.com/eternal_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "25min",
                          "releaseDate": "2015-02-15",
                          "videoUrl": "https://example.com/eternal_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "46min",
                          "releaseDate": "2021-02-02",
                          "videoUrl": "https://example.com/eternal_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "28min",
                          "releaseDate": "2006-01-20",
                          "videoUrl": "https://example.com/eternal_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "50min",
                          "releaseDate": "2000-07-31",
                          "videoUrl": "https://example.com/eternal_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "20min",
                          "releaseDate": "2011-04-04",
                          "videoUrl": "https://example.com/eternal_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "42min",
                          "releaseDate": "2024-01-23",
                          "videoUrl": "https://example.com/eternal_prophecy_ep11.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "36min",
                          "releaseDate": "2008-09-27",
                          "videoUrl": "https://example.com/eternal_prophecy_ep12.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "23min",
                          "releaseDate": "2013-10-09",
                          "videoUrl": "https://example.com/eternal_prophecy_ep13.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 14",
                          "episodeNumber": 14,
                          "duration": "23min",
                          "releaseDate": "2015-07-08",
                          "videoUrl": "https://example.com/eternal_prophecy_ep14.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Eternal Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "44min",
                          "releaseDate": "2014-05-11",
                          "videoUrl": "https://example.com/eternal_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "41min",
                          "releaseDate": "2011-07-18",
                          "videoUrl": "https://example.com/eternal_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "46min",
                          "releaseDate": "2017-04-09",
                          "videoUrl": "https://example.com/eternal_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "21min",
                          "releaseDate": "2016-10-20",
                          "videoUrl": "https://example.com/eternal_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "22min",
                          "releaseDate": "2000-10-06",
                          "videoUrl": "https://example.com/eternal_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "48min",
                          "releaseDate": "2001-10-01",
                          "videoUrl": "https://example.com/eternal_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "38min",
                          "releaseDate": "2014-02-01",
                          "videoUrl": "https://example.com/eternal_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "40min",
                          "releaseDate": "2014-01-28",
                          "videoUrl": "https://example.com/eternal_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "48min",
                          "releaseDate": "2007-10-26",
                          "videoUrl": "https://example.com/eternal_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "33min",
                          "releaseDate": "2001-08-03",
                          "videoUrl": "https://example.com/eternal_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "33min",
                          "releaseDate": "2001-09-14",
                          "videoUrl": "https://example.com/eternal_prophecy_ep11.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "49min",
                          "releaseDate": "2005-02-26",
                          "videoUrl": "https://example.com/eternal_prophecy_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Saga",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/eternal_saga.jpg",
                  "cardImage": "https://example.com/cards/eternal_saga.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2009,
                      "episodes": [
                        {
                          "title": "Eternal Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "37min",
                          "releaseDate": "2018-09-12",
                          "videoUrl": "https://example.com/eternal_saga_ep1.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "50min",
                          "releaseDate": "2016-06-21",
                          "videoUrl": "https://example.com/eternal_saga_ep2.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "35min",
                          "releaseDate": "2020-02-14",
                          "videoUrl": "https://example.com/eternal_saga_ep3.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "48min",
                          "releaseDate": "2002-02-12",
                          "videoUrl": "https://example.com/eternal_saga_ep4.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "30min",
                          "releaseDate": "2023-04-23",
                          "videoUrl": "https://example.com/eternal_saga_ep5.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "27min",
                          "releaseDate": "2021-10-24",
                          "videoUrl": "https://example.com/eternal_saga_ep6.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "37min",
                          "releaseDate": "2007-08-29",
                          "videoUrl": "https://example.com/eternal_saga_ep7.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "50min",
                          "releaseDate": "2013-03-18",
                          "videoUrl": "https://example.com/eternal_saga_ep8.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "31min",
                          "releaseDate": "2018-07-06",
                          "videoUrl": "https://example.com/eternal_saga_ep9.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "25min",
                          "releaseDate": "2011-01-06",
                          "videoUrl": "https://example.com/eternal_saga_ep10.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "36min",
                          "releaseDate": "2004-09-15",
                          "videoUrl": "https://example.com/eternal_saga_ep11.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 12",
                          "episodeNumber": 12,
                          "duration": "30min",
                          "releaseDate": "2008-04-25",
                          "videoUrl": "https://example.com/eternal_saga_ep12.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2006,
                      "episodes": [
                        {
                          "title": "Eternal Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "26min",
                          "releaseDate": "2008-11-21",
                          "videoUrl": "https://example.com/eternal_saga_ep1.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "29min",
                          "releaseDate": "2005-10-20",
                          "videoUrl": "https://example.com/eternal_saga_ep2.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "49min",
                          "releaseDate": "2017-11-08",
                          "videoUrl": "https://example.com/eternal_saga_ep3.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "35min",
                          "releaseDate": "2023-04-16",
                          "videoUrl": "https://example.com/eternal_saga_ep4.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "50min",
                          "releaseDate": "2018-05-29",
                          "videoUrl": "https://example.com/eternal_saga_ep5.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "50min",
                          "releaseDate": "2012-03-18",
                          "videoUrl": "https://example.com/eternal_saga_ep6.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "26min",
                          "releaseDate": "2021-02-06",
                          "videoUrl": "https://example.com/eternal_saga_ep7.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "25min",
                          "releaseDate": "2012-03-20",
                          "videoUrl": "https://example.com/eternal_saga_ep8.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "50min",
                          "releaseDate": "2015-04-30",
                          "videoUrl": "https://example.com/eternal_saga_ep9.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "37min",
                          "releaseDate": "2021-09-02",
                          "videoUrl": "https://example.com/eternal_saga_ep10.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "31min",
                          "releaseDate": "2016-10-14",
                          "videoUrl": "https://example.com/eternal_saga_ep11.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 12",
                          "episodeNumber": 12,
                          "duration": "44min",
                          "releaseDate": "2004-01-05",
                          "videoUrl": "https://example.com/eternal_saga_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Warrior",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/eternal_warrior.jpg",
                  "cardImage": "https://example.com/cards/eternal_warrior.jpg",
                  "isCarousel": true,
                  "seasons": []
                }
              ]
            }
          ]
        },
        {
          "name": "Drama",
          "image": "https://example.com/images/drama.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Infinity Empire",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/infinity_empire.jpg",
                  "cardImage": "https://example.com/cards/infinity_empire.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Infinity Empire Part 1",
                      "partNumber": 1,
                      "releaseYear": 2014,
                      "duration": "112min",
                      "videoUrl": "https://example.com/infinity_empire_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Dark Legacy",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/dark_legacy.jpg",
                  "cardImage": "https://example.com/cards/dark_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Storm",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/phantom_storm.jpg",
                  "cardImage": "https://example.com/cards/phantom_storm.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Dark Quest",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/dark_quest.jpg",
                  "cardImage": "https://example.com/cards/dark_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Dark Quest",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/dark_quest.jpg",
                  "cardImage": "https://example.com/cards/dark_quest.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Dark Quest Part 1",
                      "partNumber": 1,
                      "releaseYear": 2001,
                      "duration": "141min",
                      "videoUrl": "https://example.com/dark_quest_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Infinity Empire",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/infinity_empire.jpg",
                  "cardImage": "https://example.com/cards/infinity_empire.jpg",
                  "isCarousel": false,
                  "movieParts": []
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Infinity Warrior",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/infinity_warrior.jpg",
                  "cardImage": "https://example.com/cards/infinity_warrior.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Eternal Quest",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/eternal_quest.jpg",
                  "cardImage": "https://example.com/cards/eternal_quest.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Eternal Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "39min",
                          "releaseDate": "2009-11-22",
                          "videoUrl": "https://example.com/eternal_quest_ep1.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "36min",
                          "releaseDate": "2004-10-19",
                          "videoUrl": "https://example.com/eternal_quest_ep2.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "50min",
                          "releaseDate": "2011-09-11",
                          "videoUrl": "https://example.com/eternal_quest_ep3.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "26min",
                          "releaseDate": "2004-10-25",
                          "videoUrl": "https://example.com/eternal_quest_ep4.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "33min",
                          "releaseDate": "2005-12-29",
                          "videoUrl": "https://example.com/eternal_quest_ep5.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "39min",
                          "releaseDate": "2021-10-29",
                          "videoUrl": "https://example.com/eternal_quest_ep6.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "34min",
                          "releaseDate": "2005-12-04",
                          "videoUrl": "https://example.com/eternal_quest_ep7.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "27min",
                          "releaseDate": "2017-10-02",
                          "videoUrl": "https://example.com/eternal_quest_ep8.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "43min",
                          "releaseDate": "2015-03-23",
                          "videoUrl": "https://example.com/eternal_quest_ep9.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "43min",
                          "releaseDate": "2023-07-12",
                          "videoUrl": "https://example.com/eternal_quest_ep10.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Prophecy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/phantom_prophecy.jpg",
                  "cardImage": "https://example.com/cards/phantom_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2017,
                      "episodes": [
                        {
                          "title": "Phantom Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "47min",
                          "releaseDate": "2006-01-17",
                          "videoUrl": "https://example.com/phantom_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Phantom Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "21min",
                          "releaseDate": "2007-10-26",
                          "videoUrl": "https://example.com/phantom_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Phantom Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "30min",
                          "releaseDate": "2023-10-12",
                          "videoUrl": "https://example.com/phantom_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Phantom Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "47min",
                          "releaseDate": "2012-01-26",
                          "videoUrl": "https://example.com/phantom_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Phantom Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "46min",
                          "releaseDate": "2016-10-10",
                          "videoUrl": "https://example.com/phantom_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Phantom Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "48min",
                          "releaseDate": "2024-05-07",
                          "videoUrl": "https://example.com/phantom_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Phantom Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "26min",
                          "releaseDate": "2019-11-29",
                          "videoUrl": "https://example.com/phantom_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Phantom Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "50min",
                          "releaseDate": "2001-12-07",
                          "videoUrl": "https://example.com/phantom_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Phantom Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "46min",
                          "releaseDate": "2018-01-28",
                          "videoUrl": "https://example.com/phantom_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Phantom Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "42min",
                          "releaseDate": "2013-05-17",
                          "videoUrl": "https://example.com/phantom_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Phantom Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "20min",
                          "releaseDate": "2024-01-03",
                          "videoUrl": "https://example.com/phantom_prophecy_ep11.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Mystic Empire",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/mystic_empire.jpg",
                  "cardImage": "https://example.com/cards/mystic_empire.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Mystic Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "42min",
                          "releaseDate": "2008-12-17",
                          "videoUrl": "https://example.com/mystic_empire_ep1.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "47min",
                          "releaseDate": "2021-12-23",
                          "videoUrl": "https://example.com/mystic_empire_ep2.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "28min",
                          "releaseDate": "2009-07-15",
                          "videoUrl": "https://example.com/mystic_empire_ep3.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "31min",
                          "releaseDate": "2011-12-02",
                          "videoUrl": "https://example.com/mystic_empire_ep4.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "38min",
                          "releaseDate": "2011-08-25",
                          "videoUrl": "https://example.com/mystic_empire_ep5.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "30min",
                          "releaseDate": "2010-07-21",
                          "videoUrl": "https://example.com/mystic_empire_ep6.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "22min",
                          "releaseDate": "2006-11-14",
                          "videoUrl": "https://example.com/mystic_empire_ep7.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "40min",
                          "releaseDate": "2015-03-28",
                          "videoUrl": "https://example.com/mystic_empire_ep8.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "43min",
                          "releaseDate": "2014-10-24",
                          "videoUrl": "https://example.com/mystic_empire_ep9.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "34min",
                          "releaseDate": "2006-07-04",
                          "videoUrl": "https://example.com/mystic_empire_ep10.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2018,
                      "episodes": [
                        {
                          "title": "Mystic Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "39min",
                          "releaseDate": "2009-10-23",
                          "videoUrl": "https://example.com/mystic_empire_ep1.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "49min",
                          "releaseDate": "2007-03-12",
                          "videoUrl": "https://example.com/mystic_empire_ep2.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "42min",
                          "releaseDate": "2012-01-16",
                          "videoUrl": "https://example.com/mystic_empire_ep3.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "37min",
                          "releaseDate": "2013-10-06",
                          "videoUrl": "https://example.com/mystic_empire_ep4.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "47min",
                          "releaseDate": "2015-04-12",
                          "videoUrl": "https://example.com/mystic_empire_ep5.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "26min",
                          "releaseDate": "2008-05-06",
                          "videoUrl": "https://example.com/mystic_empire_ep6.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "42min",
                          "releaseDate": "2021-01-09",
                          "videoUrl": "https://example.com/mystic_empire_ep7.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "22min",
                          "releaseDate": "2003-09-16",
                          "videoUrl": "https://example.com/mystic_empire_ep8.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "35min",
                          "releaseDate": "2022-04-28",
                          "videoUrl": "https://example.com/mystic_empire_ep9.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "36min",
                          "releaseDate": "2014-04-10",
                          "videoUrl": "https://example.com/mystic_empire_ep10.mp4"
                        },
                        {
                          "title": "Mystic Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "39min",
                          "releaseDate": "2018-01-30",
                          "videoUrl": "https://example.com/mystic_empire_ep11.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Shadow Quest",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/shadow_quest.jpg",
                  "cardImage": "https://example.com/cards/shadow_quest.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2009,
                      "episodes": [
                        {
                          "title": "Shadow Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "28min",
                          "releaseDate": "2013-01-27",
                          "videoUrl": "https://example.com/shadow_quest_ep1.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "37min",
                          "releaseDate": "2006-01-15",
                          "videoUrl": "https://example.com/shadow_quest_ep2.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "43min",
                          "releaseDate": "2016-01-23",
                          "videoUrl": "https://example.com/shadow_quest_ep3.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "39min",
                          "releaseDate": "2009-08-07",
                          "videoUrl": "https://example.com/shadow_quest_ep4.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "42min",
                          "releaseDate": "2002-01-07",
                          "videoUrl": "https://example.com/shadow_quest_ep5.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "20min",
                          "releaseDate": "2024-10-06",
                          "videoUrl": "https://example.com/shadow_quest_ep6.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "33min",
                          "releaseDate": "2012-08-05",
                          "videoUrl": "https://example.com/shadow_quest_ep7.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "37min",
                          "releaseDate": "2019-09-22",
                          "videoUrl": "https://example.com/shadow_quest_ep8.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "30min",
                          "releaseDate": "2004-08-26",
                          "videoUrl": "https://example.com/shadow_quest_ep9.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "46min",
                          "releaseDate": "2000-11-03",
                          "videoUrl": "https://example.com/shadow_quest_ep10.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 11",
                          "episodeNumber": 11,
                          "duration": "36min",
                          "releaseDate": "2002-01-10",
                          "videoUrl": "https://example.com/shadow_quest_ep11.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 12",
                          "episodeNumber": 12,
                          "duration": "44min",
                          "releaseDate": "2009-06-03",
                          "videoUrl": "https://example.com/shadow_quest_ep12.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 13",
                          "episodeNumber": 13,
                          "duration": "22min",
                          "releaseDate": "2010-12-23",
                          "videoUrl": "https://example.com/shadow_quest_ep13.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2009,
                      "episodes": [
                        {
                          "title": "Shadow Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "24min",
                          "releaseDate": "2014-07-21",
                          "videoUrl": "https://example.com/shadow_quest_ep1.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "38min",
                          "releaseDate": "2015-03-08",
                          "videoUrl": "https://example.com/shadow_quest_ep2.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "26min",
                          "releaseDate": "2006-02-01",
                          "videoUrl": "https://example.com/shadow_quest_ep3.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "47min",
                          "releaseDate": "2016-12-29",
                          "videoUrl": "https://example.com/shadow_quest_ep4.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "34min",
                          "releaseDate": "2009-12-02",
                          "videoUrl": "https://example.com/shadow_quest_ep5.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "38min",
                          "releaseDate": "2011-11-24",
                          "videoUrl": "https://example.com/shadow_quest_ep6.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "27min",
                          "releaseDate": "2015-05-06",
                          "videoUrl": "https://example.com/shadow_quest_ep7.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "36min",
                          "releaseDate": "2015-11-12",
                          "videoUrl": "https://example.com/shadow_quest_ep8.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "22min",
                          "releaseDate": "2006-03-01",
                          "videoUrl": "https://example.com/shadow_quest_ep9.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "22min",
                          "releaseDate": "2023-11-13",
                          "videoUrl": "https://example.com/shadow_quest_ep10.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Warrior",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/legend_warrior.jpg",
                  "cardImage": "https://example.com/cards/legend_warrior.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2015,
                      "episodes": [
                        {
                          "title": "Legend Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "23min",
                          "releaseDate": "2009-05-24",
                          "videoUrl": "https://example.com/legend_warrior_ep1.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "22min",
                          "releaseDate": "2020-01-25",
                          "videoUrl": "https://example.com/legend_warrior_ep2.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "34min",
                          "releaseDate": "2017-06-29",
                          "videoUrl": "https://example.com/legend_warrior_ep3.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "24min",
                          "releaseDate": "2009-06-23",
                          "videoUrl": "https://example.com/legend_warrior_ep4.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "26min",
                          "releaseDate": "2001-11-13",
                          "videoUrl": "https://example.com/legend_warrior_ep5.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "34min",
                          "releaseDate": "2022-03-21",
                          "videoUrl": "https://example.com/legend_warrior_ep6.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "29min",
                          "releaseDate": "2003-09-14",
                          "videoUrl": "https://example.com/legend_warrior_ep7.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "45min",
                          "releaseDate": "2020-05-04",
                          "videoUrl": "https://example.com/legend_warrior_ep8.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "21min",
                          "releaseDate": "2007-10-01",
                          "videoUrl": "https://example.com/legend_warrior_ep9.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 10",
                          "episodeNumber": 10,
                          "duration": "24min",
                          "releaseDate": "2008-03-14",
                          "videoUrl": "https://example.com/legend_warrior_ep10.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 11",
                          "episodeNumber": 11,
                          "duration": "25min",
                          "releaseDate": "2006-09-21",
                          "videoUrl": "https://example.com/legend_warrior_ep11.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 12",
                          "episodeNumber": 12,
                          "duration": "37min",
                          "releaseDate": "2000-11-15",
                          "videoUrl": "https://example.com/legend_warrior_ep12.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 13",
                          "episodeNumber": 13,
                          "duration": "46min",
                          "releaseDate": "2006-09-24",
                          "videoUrl": "https://example.com/legend_warrior_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Warrior",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/dark_warrior.jpg",
                  "cardImage": "https://example.com/cards/dark_warrior.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2018,
                      "episodes": [
                        {
                          "title": "Dark Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "21min",
                          "releaseDate": "2016-07-01",
                          "videoUrl": "https://example.com/dark_warrior_ep1.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "40min",
                          "releaseDate": "2013-12-03",
                          "videoUrl": "https://example.com/dark_warrior_ep2.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "27min",
                          "releaseDate": "2012-01-02",
                          "videoUrl": "https://example.com/dark_warrior_ep3.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "43min",
                          "releaseDate": "2010-03-19",
                          "videoUrl": "https://example.com/dark_warrior_ep4.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "30min",
                          "releaseDate": "2013-10-12",
                          "videoUrl": "https://example.com/dark_warrior_ep5.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "24min",
                          "releaseDate": "2022-04-25",
                          "videoUrl": "https://example.com/dark_warrior_ep6.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "46min",
                          "releaseDate": "2005-05-13",
                          "videoUrl": "https://example.com/dark_warrior_ep7.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "43min",
                          "releaseDate": "2003-05-01",
                          "videoUrl": "https://example.com/dark_warrior_ep8.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "46min",
                          "releaseDate": "2002-03-27",
                          "videoUrl": "https://example.com/dark_warrior_ep9.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 10",
                          "episodeNumber": 10,
                          "duration": "36min",
                          "releaseDate": "2007-10-18",
                          "videoUrl": "https://example.com/dark_warrior_ep10.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 11",
                          "episodeNumber": 11,
                          "duration": "46min",
                          "releaseDate": "2022-05-07",
                          "videoUrl": "https://example.com/dark_warrior_ep11.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 12",
                          "episodeNumber": 12,
                          "duration": "46min",
                          "releaseDate": "2008-05-07",
                          "videoUrl": "https://example.com/dark_warrior_ep12.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Comedy",
          "image": "https://example.com/images/comedy.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Infinity Storm",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/infinity_storm.jpg",
                  "cardImage": "https://example.com/cards/infinity_storm.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Dark Prophecy",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/dark_prophecy.jpg",
                  "cardImage": "https://example.com/cards/dark_prophecy.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Dark Prophecy Part 1",
                      "partNumber": 1,
                      "releaseYear": 2016,
                      "duration": "174min",
                      "videoUrl": "https://example.com/dark_prophecy_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Legend Quest",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/legend_quest.jpg",
                  "cardImage": "https://example.com/cards/legend_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Eternal Quest",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/eternal_quest.jpg",
                  "cardImage": "https://example.com/cards/eternal_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Shadow Legacy",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/shadow_legacy.jpg",
                  "cardImage": "https://example.com/cards/shadow_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Shadow Legacy Part 1",
                      "partNumber": 1,
                      "releaseYear": 2024,
                      "duration": "167min",
                      "videoUrl": "https://example.com/shadow_legacy_part1.mp4"
                    }
                  ]
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Shadow Legacy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/shadow_legacy.jpg",
                  "cardImage": "https://example.com/cards/shadow_legacy.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Shadow Legacy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/shadow_legacy.jpg",
                  "cardImage": "https://example.com/cards/shadow_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Shadow Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "29min",
                          "releaseDate": "2024-09-13",
                          "videoUrl": "https://example.com/shadow_legacy_ep1.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "50min",
                          "releaseDate": "2018-04-03",
                          "videoUrl": "https://example.com/shadow_legacy_ep2.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "27min",
                          "releaseDate": "2002-04-08",
                          "videoUrl": "https://example.com/shadow_legacy_ep3.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "38min",
                          "releaseDate": "2005-11-01",
                          "videoUrl": "https://example.com/shadow_legacy_ep4.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "36min",
                          "releaseDate": "2023-10-25",
                          "videoUrl": "https://example.com/shadow_legacy_ep5.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "23min",
                          "releaseDate": "2006-10-21",
                          "videoUrl": "https://example.com/shadow_legacy_ep6.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "34min",
                          "releaseDate": "2009-02-05",
                          "videoUrl": "https://example.com/shadow_legacy_ep7.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "43min",
                          "releaseDate": "2001-06-17",
                          "videoUrl": "https://example.com/shadow_legacy_ep8.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "43min",
                          "releaseDate": "2020-01-29",
                          "videoUrl": "https://example.com/shadow_legacy_ep9.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "32min",
                          "releaseDate": "2014-02-27",
                          "videoUrl": "https://example.com/shadow_legacy_ep10.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "20min",
                          "releaseDate": "2004-01-27",
                          "videoUrl": "https://example.com/shadow_legacy_ep11.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "21min",
                          "releaseDate": "2011-08-15",
                          "videoUrl": "https://example.com/shadow_legacy_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Legacy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/phantom_legacy.jpg",
                  "cardImage": "https://example.com/cards/phantom_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2014,
                      "episodes": [
                        {
                          "title": "Phantom Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "34min",
                          "releaseDate": "2006-11-03",
                          "videoUrl": "https://example.com/phantom_legacy_ep1.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "34min",
                          "releaseDate": "2010-10-15",
                          "videoUrl": "https://example.com/phantom_legacy_ep2.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "32min",
                          "releaseDate": "2006-11-06",
                          "videoUrl": "https://example.com/phantom_legacy_ep3.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "25min",
                          "releaseDate": "2020-12-07",
                          "videoUrl": "https://example.com/phantom_legacy_ep4.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "20min",
                          "releaseDate": "2013-07-04",
                          "videoUrl": "https://example.com/phantom_legacy_ep5.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "27min",
                          "releaseDate": "2001-08-18",
                          "videoUrl": "https://example.com/phantom_legacy_ep6.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "30min",
                          "releaseDate": "2004-06-14",
                          "videoUrl": "https://example.com/phantom_legacy_ep7.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "21min",
                          "releaseDate": "2003-01-23",
                          "videoUrl": "https://example.com/phantom_legacy_ep8.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "49min",
                          "releaseDate": "2000-07-21",
                          "videoUrl": "https://example.com/phantom_legacy_ep9.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "39min",
                          "releaseDate": "2024-05-11",
                          "videoUrl": "https://example.com/phantom_legacy_ep10.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "35min",
                          "releaseDate": "2024-01-04",
                          "videoUrl": "https://example.com/phantom_legacy_ep11.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "39min",
                          "releaseDate": "2017-02-28",
                          "videoUrl": "https://example.com/phantom_legacy_ep12.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "33min",
                          "releaseDate": "2023-09-01",
                          "videoUrl": "https://example.com/phantom_legacy_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Mystic Storm",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/mystic_storm.jpg",
                  "cardImage": "https://example.com/cards/mystic_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2024,
                      "episodes": [
                        {
                          "title": "Mystic Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "45min",
                          "releaseDate": "2011-02-20",
                          "videoUrl": "https://example.com/mystic_storm_ep1.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "35min",
                          "releaseDate": "2004-04-22",
                          "videoUrl": "https://example.com/mystic_storm_ep2.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "47min",
                          "releaseDate": "2017-12-10",
                          "videoUrl": "https://example.com/mystic_storm_ep3.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "33min",
                          "releaseDate": "2019-10-23",
                          "videoUrl": "https://example.com/mystic_storm_ep4.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "45min",
                          "releaseDate": "2012-10-19",
                          "videoUrl": "https://example.com/mystic_storm_ep5.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "31min",
                          "releaseDate": "2012-05-01",
                          "videoUrl": "https://example.com/mystic_storm_ep6.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "36min",
                          "releaseDate": "2009-06-16",
                          "videoUrl": "https://example.com/mystic_storm_ep7.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "35min",
                          "releaseDate": "2022-05-10",
                          "videoUrl": "https://example.com/mystic_storm_ep8.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "42min",
                          "releaseDate": "2003-07-27",
                          "videoUrl": "https://example.com/mystic_storm_ep9.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "34min",
                          "releaseDate": "2015-03-05",
                          "videoUrl": "https://example.com/mystic_storm_ep10.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "21min",
                          "releaseDate": "2002-04-29",
                          "videoUrl": "https://example.com/mystic_storm_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2023,
                      "episodes": [
                        {
                          "title": "Mystic Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "45min",
                          "releaseDate": "2002-04-03",
                          "videoUrl": "https://example.com/mystic_storm_ep1.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "26min",
                          "releaseDate": "2001-09-30",
                          "videoUrl": "https://example.com/mystic_storm_ep2.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "28min",
                          "releaseDate": "2000-08-04",
                          "videoUrl": "https://example.com/mystic_storm_ep3.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "27min",
                          "releaseDate": "2012-10-08",
                          "videoUrl": "https://example.com/mystic_storm_ep4.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "27min",
                          "releaseDate": "2011-02-23",
                          "videoUrl": "https://example.com/mystic_storm_ep5.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "44min",
                          "releaseDate": "2008-12-14",
                          "videoUrl": "https://example.com/mystic_storm_ep6.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "44min",
                          "releaseDate": "2010-01-21",
                          "videoUrl": "https://example.com/mystic_storm_ep7.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "29min",
                          "releaseDate": "2020-07-10",
                          "videoUrl": "https://example.com/mystic_storm_ep8.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "44min",
                          "releaseDate": "2010-12-21",
                          "videoUrl": "https://example.com/mystic_storm_ep9.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "36min",
                          "releaseDate": "2024-06-05",
                          "videoUrl": "https://example.com/mystic_storm_ep10.mp4"
                        },
                        {
                          "title": "Mystic Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "21min",
                          "releaseDate": "2011-03-08",
                          "videoUrl": "https://example.com/mystic_storm_ep11.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Quest",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/legend_quest.jpg",
                  "cardImage": "https://example.com/cards/legend_quest.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2017,
                      "episodes": [
                        {
                          "title": "Legend Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "41min",
                          "releaseDate": "2018-02-06",
                          "videoUrl": "https://example.com/legend_quest_ep1.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "37min",
                          "releaseDate": "2002-01-28",
                          "videoUrl": "https://example.com/legend_quest_ep2.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "44min",
                          "releaseDate": "2003-02-09",
                          "videoUrl": "https://example.com/legend_quest_ep3.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "26min",
                          "releaseDate": "2016-04-10",
                          "videoUrl": "https://example.com/legend_quest_ep4.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "34min",
                          "releaseDate": "2017-08-24",
                          "videoUrl": "https://example.com/legend_quest_ep5.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "37min",
                          "releaseDate": "2010-04-18",
                          "videoUrl": "https://example.com/legend_quest_ep6.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "36min",
                          "releaseDate": "2008-12-15",
                          "videoUrl": "https://example.com/legend_quest_ep7.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "49min",
                          "releaseDate": "2013-09-13",
                          "videoUrl": "https://example.com/legend_quest_ep8.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "33min",
                          "releaseDate": "2013-08-03",
                          "videoUrl": "https://example.com/legend_quest_ep9.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "33min",
                          "releaseDate": "2015-02-26",
                          "videoUrl": "https://example.com/legend_quest_ep10.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 11",
                          "episodeNumber": 11,
                          "duration": "32min",
                          "releaseDate": "2008-03-11",
                          "videoUrl": "https://example.com/legend_quest_ep11.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Mystic Legacy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/mystic_legacy.jpg",
                  "cardImage": "https://example.com/cards/mystic_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2019,
                      "episodes": [
                        {
                          "title": "Mystic Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "27min",
                          "releaseDate": "2016-07-08",
                          "videoUrl": "https://example.com/mystic_legacy_ep1.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "40min",
                          "releaseDate": "2006-08-31",
                          "videoUrl": "https://example.com/mystic_legacy_ep2.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "28min",
                          "releaseDate": "2014-10-18",
                          "videoUrl": "https://example.com/mystic_legacy_ep3.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "40min",
                          "releaseDate": "2000-03-19",
                          "videoUrl": "https://example.com/mystic_legacy_ep4.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "37min",
                          "releaseDate": "2008-05-17",
                          "videoUrl": "https://example.com/mystic_legacy_ep5.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "36min",
                          "releaseDate": "2022-05-01",
                          "videoUrl": "https://example.com/mystic_legacy_ep6.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "25min",
                          "releaseDate": "2000-07-03",
                          "videoUrl": "https://example.com/mystic_legacy_ep7.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "30min",
                          "releaseDate": "2019-01-28",
                          "videoUrl": "https://example.com/mystic_legacy_ep8.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "38min",
                          "releaseDate": "2024-09-18",
                          "videoUrl": "https://example.com/mystic_legacy_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Prophecy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/dark_prophecy.jpg",
                  "cardImage": "https://example.com/cards/dark_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2008,
                      "episodes": [
                        {
                          "title": "Dark Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "28min",
                          "releaseDate": "2022-12-25",
                          "videoUrl": "https://example.com/dark_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "20min",
                          "releaseDate": "2000-06-16",
                          "videoUrl": "https://example.com/dark_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "28min",
                          "releaseDate": "2011-04-11",
                          "videoUrl": "https://example.com/dark_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "36min",
                          "releaseDate": "2014-08-06",
                          "videoUrl": "https://example.com/dark_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "36min",
                          "releaseDate": "2002-01-29",
                          "videoUrl": "https://example.com/dark_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "37min",
                          "releaseDate": "2004-04-30",
                          "videoUrl": "https://example.com/dark_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "46min",
                          "releaseDate": "2016-12-09",
                          "videoUrl": "https://example.com/dark_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "39min",
                          "releaseDate": "2024-06-05",
                          "videoUrl": "https://example.com/dark_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "23min",
                          "releaseDate": "2012-01-06",
                          "videoUrl": "https://example.com/dark_prophecy_ep9.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Sci-Fi",
          "image": "https://example.com/images/sci-fi.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Legend Warrior",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/legend_warrior.jpg",
                  "cardImage": "https://example.com/cards/legend_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Legend Legacy",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/legend_legacy.jpg",
                  "cardImage": "https://example.com/cards/legend_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Legend Legacy Part 1",
                      "partNumber": 1,
                      "releaseYear": 2020,
                      "duration": "159min",
                      "videoUrl": "https://example.com/legend_legacy_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Dark Quest",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/dark_quest.jpg",
                  "cardImage": "https://example.com/cards/dark_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Dark Warrior",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/dark_warrior.jpg",
                  "cardImage": "https://example.com/cards/dark_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Dark Warrior Part 1",
                      "partNumber": 1,
                      "releaseYear": 2004,
                      "duration": "172min",
                      "videoUrl": "https://example.com/dark_warrior_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Infinity Saga",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/infinity_saga.jpg",
                  "cardImage": "https://example.com/cards/infinity_saga.jpg",
                  "isCarousel": false,
                  "movieParts": []
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Legend Prophecy",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/legend_prophecy.jpg",
                  "cardImage": "https://example.com/cards/legend_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2006,
                      "episodes": [
                        {
                          "title": "Legend Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "45min",
                          "releaseDate": "2006-03-24",
                          "videoUrl": "https://example.com/legend_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "43min",
                          "releaseDate": "2011-09-19",
                          "videoUrl": "https://example.com/legend_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "44min",
                          "releaseDate": "2002-10-22",
                          "videoUrl": "https://example.com/legend_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "38min",
                          "releaseDate": "2017-08-05",
                          "videoUrl": "https://example.com/legend_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "28min",
                          "releaseDate": "2024-05-21",
                          "videoUrl": "https://example.com/legend_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "46min",
                          "releaseDate": "2019-01-26",
                          "videoUrl": "https://example.com/legend_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "40min",
                          "releaseDate": "2015-09-17",
                          "videoUrl": "https://example.com/legend_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "25min",
                          "releaseDate": "2013-07-16",
                          "videoUrl": "https://example.com/legend_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "42min",
                          "releaseDate": "2009-06-12",
                          "videoUrl": "https://example.com/legend_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "20min",
                          "releaseDate": "2016-11-27",
                          "videoUrl": "https://example.com/legend_prophecy_ep10.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Mystic Warrior",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/mystic_warrior.jpg",
                  "cardImage": "https://example.com/cards/mystic_warrior.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Eternal Storm",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/eternal_storm.jpg",
                  "cardImage": "https://example.com/cards/eternal_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2014,
                      "episodes": [
                        {
                          "title": "Eternal Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "32min",
                          "releaseDate": "2013-02-15",
                          "videoUrl": "https://example.com/eternal_storm_ep1.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "29min",
                          "releaseDate": "2009-02-09",
                          "videoUrl": "https://example.com/eternal_storm_ep2.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "30min",
                          "releaseDate": "2017-11-11",
                          "videoUrl": "https://example.com/eternal_storm_ep3.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "25min",
                          "releaseDate": "2006-01-07",
                          "videoUrl": "https://example.com/eternal_storm_ep4.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "20min",
                          "releaseDate": "2002-01-19",
                          "videoUrl": "https://example.com/eternal_storm_ep5.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "47min",
                          "releaseDate": "2001-12-23",
                          "videoUrl": "https://example.com/eternal_storm_ep6.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "29min",
                          "releaseDate": "2002-02-17",
                          "videoUrl": "https://example.com/eternal_storm_ep7.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "26min",
                          "releaseDate": "2024-04-14",
                          "videoUrl": "https://example.com/eternal_storm_ep8.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "43min",
                          "releaseDate": "2004-08-02",
                          "videoUrl": "https://example.com/eternal_storm_ep9.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "30min",
                          "releaseDate": "2009-08-21",
                          "videoUrl": "https://example.com/eternal_storm_ep10.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "36min",
                          "releaseDate": "2016-10-10",
                          "videoUrl": "https://example.com/eternal_storm_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Eternal Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "39min",
                          "releaseDate": "2012-10-28",
                          "videoUrl": "https://example.com/eternal_storm_ep1.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "27min",
                          "releaseDate": "2007-01-29",
                          "videoUrl": "https://example.com/eternal_storm_ep2.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "50min",
                          "releaseDate": "2022-11-11",
                          "videoUrl": "https://example.com/eternal_storm_ep3.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "44min",
                          "releaseDate": "2017-02-22",
                          "videoUrl": "https://example.com/eternal_storm_ep4.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "42min",
                          "releaseDate": "2003-03-16",
                          "videoUrl": "https://example.com/eternal_storm_ep5.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "44min",
                          "releaseDate": "2001-07-16",
                          "videoUrl": "https://example.com/eternal_storm_ep6.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "44min",
                          "releaseDate": "2010-12-05",
                          "videoUrl": "https://example.com/eternal_storm_ep7.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "22min",
                          "releaseDate": "2009-08-03",
                          "videoUrl": "https://example.com/eternal_storm_ep8.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "32min",
                          "releaseDate": "2000-08-16",
                          "videoUrl": "https://example.com/eternal_storm_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Legacy",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/eternal_legacy.jpg",
                  "cardImage": "https://example.com/cards/eternal_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2017,
                      "episodes": [
                        {
                          "title": "Eternal Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "21min",
                          "releaseDate": "2015-04-17",
                          "videoUrl": "https://example.com/eternal_legacy_ep1.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "31min",
                          "releaseDate": "2017-11-02",
                          "videoUrl": "https://example.com/eternal_legacy_ep2.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "25min",
                          "releaseDate": "2010-08-22",
                          "videoUrl": "https://example.com/eternal_legacy_ep3.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "21min",
                          "releaseDate": "2010-11-08",
                          "videoUrl": "https://example.com/eternal_legacy_ep4.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "38min",
                          "releaseDate": "2015-06-26",
                          "videoUrl": "https://example.com/eternal_legacy_ep5.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "20min",
                          "releaseDate": "2011-07-06",
                          "videoUrl": "https://example.com/eternal_legacy_ep6.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "43min",
                          "releaseDate": "2013-07-31",
                          "videoUrl": "https://example.com/eternal_legacy_ep7.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "23min",
                          "releaseDate": "2009-11-10",
                          "videoUrl": "https://example.com/eternal_legacy_ep8.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "21min",
                          "releaseDate": "2024-03-21",
                          "videoUrl": "https://example.com/eternal_legacy_ep9.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "29min",
                          "releaseDate": "2016-07-02",
                          "videoUrl": "https://example.com/eternal_legacy_ep10.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "22min",
                          "releaseDate": "2011-10-19",
                          "videoUrl": "https://example.com/eternal_legacy_ep11.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "37min",
                          "releaseDate": "2017-01-22",
                          "videoUrl": "https://example.com/eternal_legacy_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Infinity Storm",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/infinity_storm.jpg",
                  "cardImage": "https://example.com/cards/infinity_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2014,
                      "episodes": [
                        {
                          "title": "Infinity Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "30min",
                          "releaseDate": "2009-08-18",
                          "videoUrl": "https://example.com/infinity_storm_ep1.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "30min",
                          "releaseDate": "2005-06-02",
                          "videoUrl": "https://example.com/infinity_storm_ep2.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "42min",
                          "releaseDate": "2014-08-18",
                          "videoUrl": "https://example.com/infinity_storm_ep3.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "32min",
                          "releaseDate": "2024-02-08",
                          "videoUrl": "https://example.com/infinity_storm_ep4.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "25min",
                          "releaseDate": "2003-04-26",
                          "videoUrl": "https://example.com/infinity_storm_ep5.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "33min",
                          "releaseDate": "2022-02-03",
                          "videoUrl": "https://example.com/infinity_storm_ep6.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "44min",
                          "releaseDate": "2001-10-23",
                          "videoUrl": "https://example.com/infinity_storm_ep7.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "24min",
                          "releaseDate": "2012-03-07",
                          "videoUrl": "https://example.com/infinity_storm_ep8.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "22min",
                          "releaseDate": "2004-09-27",
                          "videoUrl": "https://example.com/infinity_storm_ep9.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "38min",
                          "releaseDate": "2014-09-06",
                          "videoUrl": "https://example.com/infinity_storm_ep10.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "47min",
                          "releaseDate": "2012-08-18",
                          "videoUrl": "https://example.com/infinity_storm_ep11.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 12",
                          "episodeNumber": 12,
                          "duration": "42min",
                          "releaseDate": "2007-09-16",
                          "videoUrl": "https://example.com/infinity_storm_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Infinity Quest",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/infinity_quest.jpg",
                  "cardImage": "https://example.com/cards/infinity_quest.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2019,
                      "episodes": [
                        {
                          "title": "Infinity Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "31min",
                          "releaseDate": "2005-04-15",
                          "videoUrl": "https://example.com/infinity_quest_ep1.mp4"
                        },
                        {
                          "title": "Infinity Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "37min",
                          "releaseDate": "2019-08-04",
                          "videoUrl": "https://example.com/infinity_quest_ep2.mp4"
                        },
                        {
                          "title": "Infinity Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "25min",
                          "releaseDate": "2016-09-17",
                          "videoUrl": "https://example.com/infinity_quest_ep3.mp4"
                        },
                        {
                          "title": "Infinity Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "21min",
                          "releaseDate": "2011-05-14",
                          "videoUrl": "https://example.com/infinity_quest_ep4.mp4"
                        },
                        {
                          "title": "Infinity Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "24min",
                          "releaseDate": "2008-06-24",
                          "videoUrl": "https://example.com/infinity_quest_ep5.mp4"
                        },
                        {
                          "title": "Infinity Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "37min",
                          "releaseDate": "2016-10-07",
                          "videoUrl": "https://example.com/infinity_quest_ep6.mp4"
                        },
                        {
                          "title": "Infinity Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "47min",
                          "releaseDate": "2016-06-02",
                          "videoUrl": "https://example.com/infinity_quest_ep7.mp4"
                        },
                        {
                          "title": "Infinity Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "39min",
                          "releaseDate": "2004-04-08",
                          "videoUrl": "https://example.com/infinity_quest_ep8.mp4"
                        },
                        {
                          "title": "Infinity Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "42min",
                          "releaseDate": "2014-07-19",
                          "videoUrl": "https://example.com/infinity_quest_ep9.mp4"
                        },
                        {
                          "title": "Infinity Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "46min",
                          "releaseDate": "2003-11-01",
                          "videoUrl": "https://example.com/infinity_quest_ep10.mp4"
                        },
                        {
                          "title": "Infinity Quest - Episode 11",
                          "episodeNumber": 11,
                          "duration": "28min",
                          "releaseDate": "2014-01-02",
                          "videoUrl": "https://example.com/infinity_quest_ep11.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Mystic Empire",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/mystic_empire.jpg",
                  "cardImage": "https://example.com/cards/mystic_empire.jpg",
                  "isCarousel": false,
                  "seasons": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "USA",
      "image": "https://example.com/images/usa.jpg",
      "genres": [
        {
          "name": "Action",
          "image": "https://example.com/images/action.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Eternal Storm",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/eternal_storm.jpg",
                  "cardImage": "https://example.com/cards/eternal_storm.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Mystic Empire",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/mystic_empire.jpg",
                  "cardImage": "https://example.com/cards/mystic_empire.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Mystic Quest",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/mystic_quest.jpg",
                  "cardImage": "https://example.com/cards/mystic_quest.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Legend Quest",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/legend_quest.jpg",
                  "cardImage": "https://example.com/cards/legend_quest.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Phantom Warrior",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/phantom_warrior.jpg",
                  "cardImage": "https://example.com/cards/phantom_warrior.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Eternal Warrior",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/eternal_warrior.jpg",
                  "cardImage": "https://example.com/cards/eternal_warrior.jpg",
                  "isCarousel": true,
                  "movieParts": []
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Legend Empire",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/legend_empire.jpg",
                  "cardImage": "https://example.com/cards/legend_empire.jpg",
                  "isCarousel": true,
                  "seasons": []
                },
                {
                  "title": "Eternal Storm",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/eternal_storm.jpg",
                  "cardImage": "https://example.com/cards/eternal_storm.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2019,
                      "episodes": [
                        {
                          "title": "Eternal Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "24min",
                          "releaseDate": "2000-03-01",
                          "videoUrl": "https://example.com/eternal_storm_ep1.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "45min",
                          "releaseDate": "2011-01-27",
                          "videoUrl": "https://example.com/eternal_storm_ep2.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "50min",
                          "releaseDate": "2014-01-13",
                          "videoUrl": "https://example.com/eternal_storm_ep3.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "48min",
                          "releaseDate": "2024-03-17",
                          "videoUrl": "https://example.com/eternal_storm_ep4.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "27min",
                          "releaseDate": "2021-09-11",
                          "videoUrl": "https://example.com/eternal_storm_ep5.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "26min",
                          "releaseDate": "2001-12-13",
                          "videoUrl": "https://example.com/eternal_storm_ep6.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "48min",
                          "releaseDate": "2014-11-30",
                          "videoUrl": "https://example.com/eternal_storm_ep7.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "40min",
                          "releaseDate": "2005-03-19",
                          "videoUrl": "https://example.com/eternal_storm_ep8.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "20min",
                          "releaseDate": "2011-12-25",
                          "videoUrl": "https://example.com/eternal_storm_ep9.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "44min",
                          "releaseDate": "2010-04-04",
                          "videoUrl": "https://example.com/eternal_storm_ep10.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "29min",
                          "releaseDate": "2000-09-10",
                          "videoUrl": "https://example.com/eternal_storm_ep11.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 12",
                          "episodeNumber": 12,
                          "duration": "21min",
                          "releaseDate": "2012-11-18",
                          "videoUrl": "https://example.com/eternal_storm_ep12.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 13",
                          "episodeNumber": 13,
                          "duration": "45min",
                          "releaseDate": "2017-07-24",
                          "videoUrl": "https://example.com/eternal_storm_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Warrior",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/dark_warrior.jpg",
                  "cardImage": "https://example.com/cards/dark_warrior.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2021,
                      "episodes": [
                        {
                          "title": "Dark Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "44min",
                          "releaseDate": "2011-04-22",
                          "videoUrl": "https://example.com/dark_warrior_ep1.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "22min",
                          "releaseDate": "2017-12-06",
                          "videoUrl": "https://example.com/dark_warrior_ep2.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "50min",
                          "releaseDate": "2009-04-24",
                          "videoUrl": "https://example.com/dark_warrior_ep3.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "39min",
                          "releaseDate": "2020-04-24",
                          "videoUrl": "https://example.com/dark_warrior_ep4.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "49min",
                          "releaseDate": "2011-01-04",
                          "videoUrl": "https://example.com/dark_warrior_ep5.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "34min",
                          "releaseDate": "2006-08-10",
                          "videoUrl": "https://example.com/dark_warrior_ep6.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "28min",
                          "releaseDate": "2009-01-15",
                          "videoUrl": "https://example.com/dark_warrior_ep7.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "35min",
                          "releaseDate": "2003-02-26",
                          "videoUrl": "https://example.com/dark_warrior_ep8.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "36min",
                          "releaseDate": "2001-09-07",
                          "videoUrl": "https://example.com/dark_warrior_ep9.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 10",
                          "episodeNumber": 10,
                          "duration": "28min",
                          "releaseDate": "2010-03-19",
                          "videoUrl": "https://example.com/dark_warrior_ep10.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 11",
                          "episodeNumber": 11,
                          "duration": "22min",
                          "releaseDate": "2023-05-22",
                          "videoUrl": "https://example.com/dark_warrior_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2014,
                      "episodes": [
                        {
                          "title": "Dark Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "43min",
                          "releaseDate": "2001-02-10",
                          "videoUrl": "https://example.com/dark_warrior_ep1.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "46min",
                          "releaseDate": "2018-11-08",
                          "videoUrl": "https://example.com/dark_warrior_ep2.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "24min",
                          "releaseDate": "2002-09-04",
                          "videoUrl": "https://example.com/dark_warrior_ep3.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "27min",
                          "releaseDate": "2017-06-17",
                          "videoUrl": "https://example.com/dark_warrior_ep4.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "44min",
                          "releaseDate": "2000-12-20",
                          "videoUrl": "https://example.com/dark_warrior_ep5.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "37min",
                          "releaseDate": "2011-10-21",
                          "videoUrl": "https://example.com/dark_warrior_ep6.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "33min",
                          "releaseDate": "2017-10-01",
                          "videoUrl": "https://example.com/dark_warrior_ep7.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "27min",
                          "releaseDate": "2005-03-19",
                          "videoUrl": "https://example.com/dark_warrior_ep8.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "48min",
                          "releaseDate": "2018-07-07",
                          "videoUrl": "https://example.com/dark_warrior_ep9.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 10",
                          "episodeNumber": 10,
                          "duration": "39min",
                          "releaseDate": "2008-09-09",
                          "videoUrl": "https://example.com/dark_warrior_ep10.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 11",
                          "episodeNumber": 11,
                          "duration": "20min",
                          "releaseDate": "2009-08-29",
                          "videoUrl": "https://example.com/dark_warrior_ep11.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 12",
                          "episodeNumber": 12,
                          "duration": "30min",
                          "releaseDate": "2001-11-30",
                          "videoUrl": "https://example.com/dark_warrior_ep12.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 13",
                          "episodeNumber": 13,
                          "duration": "30min",
                          "releaseDate": "2024-05-28",
                          "videoUrl": "https://example.com/dark_warrior_ep13.mp4"
                        },
                        {
                          "title": "Dark Warrior - Episode 14",
                          "episodeNumber": 14,
                          "duration": "48min",
                          "releaseDate": "2009-06-01",
                          "videoUrl": "https://example.com/dark_warrior_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Prophecy",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/legend_prophecy.jpg",
                  "cardImage": "https://example.com/cards/legend_prophecy.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2018,
                      "episodes": [
                        {
                          "title": "Legend Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "27min",
                          "releaseDate": "2003-02-09",
                          "videoUrl": "https://example.com/legend_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "42min",
                          "releaseDate": "2019-01-24",
                          "videoUrl": "https://example.com/legend_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "49min",
                          "releaseDate": "2003-05-05",
                          "videoUrl": "https://example.com/legend_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "24min",
                          "releaseDate": "2018-02-03",
                          "videoUrl": "https://example.com/legend_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "25min",
                          "releaseDate": "2011-06-04",
                          "videoUrl": "https://example.com/legend_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "28min",
                          "releaseDate": "2012-09-06",
                          "videoUrl": "https://example.com/legend_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "23min",
                          "releaseDate": "2021-06-05",
                          "videoUrl": "https://example.com/legend_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "20min",
                          "releaseDate": "2010-11-19",
                          "videoUrl": "https://example.com/legend_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "27min",
                          "releaseDate": "2002-11-08",
                          "videoUrl": "https://example.com/legend_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "45min",
                          "releaseDate": "2011-11-25",
                          "videoUrl": "https://example.com/legend_prophecy_ep10.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2016,
                      "episodes": [
                        {
                          "title": "Legend Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "39min",
                          "releaseDate": "2014-07-27",
                          "videoUrl": "https://example.com/legend_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "25min",
                          "releaseDate": "2002-09-07",
                          "videoUrl": "https://example.com/legend_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "48min",
                          "releaseDate": "2022-05-31",
                          "videoUrl": "https://example.com/legend_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "40min",
                          "releaseDate": "2002-02-20",
                          "videoUrl": "https://example.com/legend_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "35min",
                          "releaseDate": "2023-08-06",
                          "videoUrl": "https://example.com/legend_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "46min",
                          "releaseDate": "2004-05-31",
                          "videoUrl": "https://example.com/legend_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "30min",
                          "releaseDate": "2023-10-21",
                          "videoUrl": "https://example.com/legend_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "23min",
                          "releaseDate": "2017-09-25",
                          "videoUrl": "https://example.com/legend_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "22min",
                          "releaseDate": "2003-02-18",
                          "videoUrl": "https://example.com/legend_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "41min",
                          "releaseDate": "2008-10-09",
                          "videoUrl": "https://example.com/legend_prophecy_ep10.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Legacy",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/dark_legacy.jpg",
                  "cardImage": "https://example.com/cards/dark_legacy.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2023,
                      "episodes": [
                        {
                          "title": "Dark Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "43min",
                          "releaseDate": "2008-09-20",
                          "videoUrl": "https://example.com/dark_legacy_ep1.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "41min",
                          "releaseDate": "2021-08-08",
                          "videoUrl": "https://example.com/dark_legacy_ep2.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "44min",
                          "releaseDate": "2021-05-03",
                          "videoUrl": "https://example.com/dark_legacy_ep3.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "29min",
                          "releaseDate": "2000-01-13",
                          "videoUrl": "https://example.com/dark_legacy_ep4.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "45min",
                          "releaseDate": "2003-12-25",
                          "videoUrl": "https://example.com/dark_legacy_ep5.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "20min",
                          "releaseDate": "2017-04-06",
                          "videoUrl": "https://example.com/dark_legacy_ep6.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "22min",
                          "releaseDate": "2013-11-03",
                          "videoUrl": "https://example.com/dark_legacy_ep7.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "39min",
                          "releaseDate": "2013-11-28",
                          "videoUrl": "https://example.com/dark_legacy_ep8.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "44min",
                          "releaseDate": "2001-07-29",
                          "videoUrl": "https://example.com/dark_legacy_ep9.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "25min",
                          "releaseDate": "2015-09-19",
                          "videoUrl": "https://example.com/dark_legacy_ep10.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Storm",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/phantom_storm.jpg",
                  "cardImage": "https://example.com/cards/phantom_storm.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Phantom Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "30min",
                          "releaseDate": "2012-12-20",
                          "videoUrl": "https://example.com/phantom_storm_ep1.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "41min",
                          "releaseDate": "2008-08-18",
                          "videoUrl": "https://example.com/phantom_storm_ep2.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "37min",
                          "releaseDate": "2014-01-10",
                          "videoUrl": "https://example.com/phantom_storm_ep3.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "22min",
                          "releaseDate": "2016-03-23",
                          "videoUrl": "https://example.com/phantom_storm_ep4.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "36min",
                          "releaseDate": "2023-08-28",
                          "videoUrl": "https://example.com/phantom_storm_ep5.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "23min",
                          "releaseDate": "2012-11-10",
                          "videoUrl": "https://example.com/phantom_storm_ep6.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "21min",
                          "releaseDate": "2003-06-04",
                          "videoUrl": "https://example.com/phantom_storm_ep7.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "39min",
                          "releaseDate": "2010-07-17",
                          "videoUrl": "https://example.com/phantom_storm_ep8.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "46min",
                          "releaseDate": "2000-03-01",
                          "videoUrl": "https://example.com/phantom_storm_ep9.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "47min",
                          "releaseDate": "2014-01-02",
                          "videoUrl": "https://example.com/phantom_storm_ep10.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "38min",
                          "releaseDate": "2015-01-26",
                          "videoUrl": "https://example.com/phantom_storm_ep11.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 12",
                          "episodeNumber": 12,
                          "duration": "49min",
                          "releaseDate": "2002-04-28",
                          "videoUrl": "https://example.com/phantom_storm_ep12.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 13",
                          "episodeNumber": 13,
                          "duration": "25min",
                          "releaseDate": "2012-06-14",
                          "videoUrl": "https://example.com/phantom_storm_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Infinity Storm",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/infinity_storm.jpg",
                  "cardImage": "https://example.com/cards/infinity_storm.jpg",
                  "isCarousel": true,
                  "seasons": []
                },
                {
                  "title": "Eternal Saga",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/eternal_saga.jpg",
                  "cardImage": "https://example.com/cards/eternal_saga.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2015,
                      "episodes": [
                        {
                          "title": "Eternal Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "37min",
                          "releaseDate": "2005-04-23",
                          "videoUrl": "https://example.com/eternal_saga_ep1.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "20min",
                          "releaseDate": "2006-01-09",
                          "videoUrl": "https://example.com/eternal_saga_ep2.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "48min",
                          "releaseDate": "2000-06-25",
                          "videoUrl": "https://example.com/eternal_saga_ep3.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "44min",
                          "releaseDate": "2021-06-07",
                          "videoUrl": "https://example.com/eternal_saga_ep4.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "46min",
                          "releaseDate": "2017-01-08",
                          "videoUrl": "https://example.com/eternal_saga_ep5.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "29min",
                          "releaseDate": "2011-07-15",
                          "videoUrl": "https://example.com/eternal_saga_ep6.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "45min",
                          "releaseDate": "2001-05-19",
                          "videoUrl": "https://example.com/eternal_saga_ep7.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "20min",
                          "releaseDate": "2004-02-23",
                          "videoUrl": "https://example.com/eternal_saga_ep8.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "47min",
                          "releaseDate": "2018-04-18",
                          "videoUrl": "https://example.com/eternal_saga_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Mystic Legacy",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/mystic_legacy.jpg",
                  "cardImage": "https://example.com/cards/mystic_legacy.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2020,
                      "episodes": [
                        {
                          "title": "Mystic Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "49min",
                          "releaseDate": "2003-10-30",
                          "videoUrl": "https://example.com/mystic_legacy_ep1.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "30min",
                          "releaseDate": "2015-12-26",
                          "videoUrl": "https://example.com/mystic_legacy_ep2.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "35min",
                          "releaseDate": "2012-12-31",
                          "videoUrl": "https://example.com/mystic_legacy_ep3.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "36min",
                          "releaseDate": "2001-04-07",
                          "videoUrl": "https://example.com/mystic_legacy_ep4.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "40min",
                          "releaseDate": "2002-02-07",
                          "videoUrl": "https://example.com/mystic_legacy_ep5.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "37min",
                          "releaseDate": "2007-04-04",
                          "videoUrl": "https://example.com/mystic_legacy_ep6.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "44min",
                          "releaseDate": "2004-04-12",
                          "videoUrl": "https://example.com/mystic_legacy_ep7.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "32min",
                          "releaseDate": "2016-04-05",
                          "videoUrl": "https://example.com/mystic_legacy_ep8.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "37min",
                          "releaseDate": "2013-10-25",
                          "videoUrl": "https://example.com/mystic_legacy_ep9.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "36min",
                          "releaseDate": "2002-12-15",
                          "videoUrl": "https://example.com/mystic_legacy_ep10.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "32min",
                          "releaseDate": "2018-07-04",
                          "videoUrl": "https://example.com/mystic_legacy_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2019,
                      "episodes": [
                        {
                          "title": "Mystic Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "41min",
                          "releaseDate": "2001-09-06",
                          "videoUrl": "https://example.com/mystic_legacy_ep1.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "22min",
                          "releaseDate": "2018-09-16",
                          "videoUrl": "https://example.com/mystic_legacy_ep2.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "21min",
                          "releaseDate": "2021-12-09",
                          "videoUrl": "https://example.com/mystic_legacy_ep3.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "37min",
                          "releaseDate": "2002-11-23",
                          "videoUrl": "https://example.com/mystic_legacy_ep4.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "23min",
                          "releaseDate": "2000-10-29",
                          "videoUrl": "https://example.com/mystic_legacy_ep5.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "29min",
                          "releaseDate": "2019-09-11",
                          "videoUrl": "https://example.com/mystic_legacy_ep6.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "27min",
                          "releaseDate": "2022-03-15",
                          "videoUrl": "https://example.com/mystic_legacy_ep7.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "41min",
                          "releaseDate": "2005-03-20",
                          "videoUrl": "https://example.com/mystic_legacy_ep8.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "48min",
                          "releaseDate": "2015-06-25",
                          "videoUrl": "https://example.com/mystic_legacy_ep9.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Drama",
          "image": "https://example.com/images/drama.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Legend Empire",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/legend_empire.jpg",
                  "cardImage": "https://example.com/cards/legend_empire.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Infinity Quest",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/infinity_quest.jpg",
                  "cardImage": "https://example.com/cards/infinity_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Legend Storm",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/legend_storm.jpg",
                  "cardImage": "https://example.com/cards/legend_storm.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Legend Storm Part 1",
                      "partNumber": 1,
                      "releaseYear": 2015,
                      "duration": "125min",
                      "videoUrl": "https://example.com/legend_storm_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Legend Saga",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/legend_saga.jpg",
                  "cardImage": "https://example.com/cards/legend_saga.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Eternal Warrior",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/eternal_warrior.jpg",
                  "cardImage": "https://example.com/cards/eternal_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Storm",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/phantom_storm.jpg",
                  "cardImage": "https://example.com/cards/phantom_storm.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Mystic Prophecy",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/mystic_prophecy.jpg",
                  "cardImage": "https://example.com/cards/mystic_prophecy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Infinity Legacy",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/infinity_legacy.jpg",
                  "cardImage": "https://example.com/cards/infinity_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Infinity Legacy Part 1",
                      "partNumber": 1,
                      "releaseYear": 2012,
                      "duration": "108min",
                      "videoUrl": "https://example.com/infinity_legacy_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Dark Storm",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/dark_storm.jpg",
                  "cardImage": "https://example.com/cards/dark_storm.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Shadow Saga",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/shadow_saga.jpg",
                  "cardImage": "https://example.com/cards/shadow_saga.jpg",
                  "isCarousel": false,
                  "movieParts": []
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Infinity Prophecy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/infinity_prophecy.jpg",
                  "cardImage": "https://example.com/cards/infinity_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2017,
                      "episodes": [
                        {
                          "title": "Infinity Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "33min",
                          "releaseDate": "2011-02-24",
                          "videoUrl": "https://example.com/infinity_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "23min",
                          "releaseDate": "2021-08-05",
                          "videoUrl": "https://example.com/infinity_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "44min",
                          "releaseDate": "2001-05-08",
                          "videoUrl": "https://example.com/infinity_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "50min",
                          "releaseDate": "2019-04-04",
                          "videoUrl": "https://example.com/infinity_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "27min",
                          "releaseDate": "2021-01-04",
                          "videoUrl": "https://example.com/infinity_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "34min",
                          "releaseDate": "2003-12-18",
                          "videoUrl": "https://example.com/infinity_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "23min",
                          "releaseDate": "2015-09-01",
                          "videoUrl": "https://example.com/infinity_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "21min",
                          "releaseDate": "2015-02-08",
                          "videoUrl": "https://example.com/infinity_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "20min",
                          "releaseDate": "2020-09-20",
                          "videoUrl": "https://example.com/infinity_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "49min",
                          "releaseDate": "2011-10-15",
                          "videoUrl": "https://example.com/infinity_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "50min",
                          "releaseDate": "2024-04-17",
                          "videoUrl": "https://example.com/infinity_prophecy_ep11.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "20min",
                          "releaseDate": "2019-07-26",
                          "videoUrl": "https://example.com/infinity_prophecy_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Quest",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/phantom_quest.jpg",
                  "cardImage": "https://example.com/cards/phantom_quest.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2019,
                      "episodes": [
                        {
                          "title": "Phantom Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "26min",
                          "releaseDate": "2014-10-22",
                          "videoUrl": "https://example.com/phantom_quest_ep1.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "22min",
                          "releaseDate": "2013-11-25",
                          "videoUrl": "https://example.com/phantom_quest_ep2.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "30min",
                          "releaseDate": "2014-10-22",
                          "videoUrl": "https://example.com/phantom_quest_ep3.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "31min",
                          "releaseDate": "2001-09-10",
                          "videoUrl": "https://example.com/phantom_quest_ep4.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "24min",
                          "releaseDate": "2009-10-01",
                          "videoUrl": "https://example.com/phantom_quest_ep5.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "26min",
                          "releaseDate": "2002-09-19",
                          "videoUrl": "https://example.com/phantom_quest_ep6.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "38min",
                          "releaseDate": "2024-05-24",
                          "videoUrl": "https://example.com/phantom_quest_ep7.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "23min",
                          "releaseDate": "2009-01-26",
                          "videoUrl": "https://example.com/phantom_quest_ep8.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "20min",
                          "releaseDate": "2001-12-11",
                          "videoUrl": "https://example.com/phantom_quest_ep9.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "45min",
                          "releaseDate": "2008-02-04",
                          "videoUrl": "https://example.com/phantom_quest_ep10.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 11",
                          "episodeNumber": 11,
                          "duration": "36min",
                          "releaseDate": "2024-02-04",
                          "videoUrl": "https://example.com/phantom_quest_ep11.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 12",
                          "episodeNumber": 12,
                          "duration": "24min",
                          "releaseDate": "2018-07-31",
                          "videoUrl": "https://example.com/phantom_quest_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Storm",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/eternal_storm.jpg",
                  "cardImage": "https://example.com/cards/eternal_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2018,
                      "episodes": [
                        {
                          "title": "Eternal Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "38min",
                          "releaseDate": "2004-05-05",
                          "videoUrl": "https://example.com/eternal_storm_ep1.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "22min",
                          "releaseDate": "2009-06-11",
                          "videoUrl": "https://example.com/eternal_storm_ep2.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "44min",
                          "releaseDate": "2008-11-03",
                          "videoUrl": "https://example.com/eternal_storm_ep3.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "38min",
                          "releaseDate": "2013-05-20",
                          "videoUrl": "https://example.com/eternal_storm_ep4.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "32min",
                          "releaseDate": "2015-12-04",
                          "videoUrl": "https://example.com/eternal_storm_ep5.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "35min",
                          "releaseDate": "2002-02-09",
                          "videoUrl": "https://example.com/eternal_storm_ep6.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "45min",
                          "releaseDate": "2004-05-12",
                          "videoUrl": "https://example.com/eternal_storm_ep7.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "26min",
                          "releaseDate": "2001-08-04",
                          "videoUrl": "https://example.com/eternal_storm_ep8.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "20min",
                          "releaseDate": "2015-07-12",
                          "videoUrl": "https://example.com/eternal_storm_ep9.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "29min",
                          "releaseDate": "2008-11-01",
                          "videoUrl": "https://example.com/eternal_storm_ep10.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "35min",
                          "releaseDate": "2018-06-21",
                          "videoUrl": "https://example.com/eternal_storm_ep11.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Legacy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/legend_legacy.jpg",
                  "cardImage": "https://example.com/cards/legend_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Legend Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "42min",
                          "releaseDate": "2000-11-03",
                          "videoUrl": "https://example.com/legend_legacy_ep1.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "42min",
                          "releaseDate": "2002-03-06",
                          "videoUrl": "https://example.com/legend_legacy_ep2.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "23min",
                          "releaseDate": "2006-10-11",
                          "videoUrl": "https://example.com/legend_legacy_ep3.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "26min",
                          "releaseDate": "2010-08-13",
                          "videoUrl": "https://example.com/legend_legacy_ep4.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "44min",
                          "releaseDate": "2018-06-27",
                          "videoUrl": "https://example.com/legend_legacy_ep5.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "21min",
                          "releaseDate": "2012-04-10",
                          "videoUrl": "https://example.com/legend_legacy_ep6.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "30min",
                          "releaseDate": "2021-11-10",
                          "videoUrl": "https://example.com/legend_legacy_ep7.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "40min",
                          "releaseDate": "2020-01-29",
                          "videoUrl": "https://example.com/legend_legacy_ep8.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "44min",
                          "releaseDate": "2002-10-22",
                          "videoUrl": "https://example.com/legend_legacy_ep9.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "32min",
                          "releaseDate": "2012-10-19",
                          "videoUrl": "https://example.com/legend_legacy_ep10.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "23min",
                          "releaseDate": "2007-08-26",
                          "videoUrl": "https://example.com/legend_legacy_ep11.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "22min",
                          "releaseDate": "2008-01-05",
                          "videoUrl": "https://example.com/legend_legacy_ep12.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "33min",
                          "releaseDate": "2012-04-09",
                          "videoUrl": "https://example.com/legend_legacy_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Shadow Storm",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/shadow_storm.jpg",
                  "cardImage": "https://example.com/cards/shadow_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2018,
                      "episodes": [
                        {
                          "title": "Shadow Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "27min",
                          "releaseDate": "2003-01-31",
                          "videoUrl": "https://example.com/shadow_storm_ep1.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "33min",
                          "releaseDate": "2000-06-17",
                          "videoUrl": "https://example.com/shadow_storm_ep2.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "31min",
                          "releaseDate": "2020-02-22",
                          "videoUrl": "https://example.com/shadow_storm_ep3.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "29min",
                          "releaseDate": "2006-06-27",
                          "videoUrl": "https://example.com/shadow_storm_ep4.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "44min",
                          "releaseDate": "2007-04-23",
                          "videoUrl": "https://example.com/shadow_storm_ep5.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "45min",
                          "releaseDate": "2021-07-20",
                          "videoUrl": "https://example.com/shadow_storm_ep6.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "49min",
                          "releaseDate": "2008-01-15",
                          "videoUrl": "https://example.com/shadow_storm_ep7.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "33min",
                          "releaseDate": "2011-05-30",
                          "videoUrl": "https://example.com/shadow_storm_ep8.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "46min",
                          "releaseDate": "2011-11-09",
                          "videoUrl": "https://example.com/shadow_storm_ep9.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "29min",
                          "releaseDate": "2021-08-11",
                          "videoUrl": "https://example.com/shadow_storm_ep10.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "27min",
                          "releaseDate": "2005-09-01",
                          "videoUrl": "https://example.com/shadow_storm_ep11.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 12",
                          "episodeNumber": 12,
                          "duration": "32min",
                          "releaseDate": "2000-12-04",
                          "videoUrl": "https://example.com/shadow_storm_ep12.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 13",
                          "episodeNumber": 13,
                          "duration": "35min",
                          "releaseDate": "2023-05-16",
                          "videoUrl": "https://example.com/shadow_storm_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Shadow Prophecy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/shadow_prophecy.jpg",
                  "cardImage": "https://example.com/cards/shadow_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2022,
                      "episodes": [
                        {
                          "title": "Shadow Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "43min",
                          "releaseDate": "2010-11-25",
                          "videoUrl": "https://example.com/shadow_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "40min",
                          "releaseDate": "2022-08-21",
                          "videoUrl": "https://example.com/shadow_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "34min",
                          "releaseDate": "2008-09-04",
                          "videoUrl": "https://example.com/shadow_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "47min",
                          "releaseDate": "2006-06-06",
                          "videoUrl": "https://example.com/shadow_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "20min",
                          "releaseDate": "2002-08-24",
                          "videoUrl": "https://example.com/shadow_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "34min",
                          "releaseDate": "2016-11-13",
                          "videoUrl": "https://example.com/shadow_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "48min",
                          "releaseDate": "2006-08-27",
                          "videoUrl": "https://example.com/shadow_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "22min",
                          "releaseDate": "2010-02-18",
                          "videoUrl": "https://example.com/shadow_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "32min",
                          "releaseDate": "2002-04-08",
                          "videoUrl": "https://example.com/shadow_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "40min",
                          "releaseDate": "2010-04-27",
                          "videoUrl": "https://example.com/shadow_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "38min",
                          "releaseDate": "2018-10-02",
                          "videoUrl": "https://example.com/shadow_prophecy_ep11.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "29min",
                          "releaseDate": "2011-05-15",
                          "videoUrl": "https://example.com/shadow_prophecy_ep12.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "38min",
                          "releaseDate": "2016-09-21",
                          "videoUrl": "https://example.com/shadow_prophecy_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Warrior",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/phantom_warrior.jpg",
                  "cardImage": "https://example.com/cards/phantom_warrior.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Phantom Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "23min",
                          "releaseDate": "2004-08-01",
                          "videoUrl": "https://example.com/phantom_warrior_ep1.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "41min",
                          "releaseDate": "2009-05-09",
                          "videoUrl": "https://example.com/phantom_warrior_ep2.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "20min",
                          "releaseDate": "2008-08-29",
                          "videoUrl": "https://example.com/phantom_warrior_ep3.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "45min",
                          "releaseDate": "2001-09-21",
                          "videoUrl": "https://example.com/phantom_warrior_ep4.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "32min",
                          "releaseDate": "2000-04-04",
                          "videoUrl": "https://example.com/phantom_warrior_ep5.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "46min",
                          "releaseDate": "2003-11-28",
                          "videoUrl": "https://example.com/phantom_warrior_ep6.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "45min",
                          "releaseDate": "2009-07-20",
                          "videoUrl": "https://example.com/phantom_warrior_ep7.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "27min",
                          "releaseDate": "2014-12-23",
                          "videoUrl": "https://example.com/phantom_warrior_ep8.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "22min",
                          "releaseDate": "2009-07-22",
                          "videoUrl": "https://example.com/phantom_warrior_ep9.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 10",
                          "episodeNumber": 10,
                          "duration": "36min",
                          "releaseDate": "2003-03-12",
                          "videoUrl": "https://example.com/phantom_warrior_ep10.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Saga",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/eternal_saga.jpg",
                  "cardImage": "https://example.com/cards/eternal_saga.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Eternal Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "20min",
                          "releaseDate": "2024-01-09",
                          "videoUrl": "https://example.com/eternal_saga_ep1.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "43min",
                          "releaseDate": "2012-06-13",
                          "videoUrl": "https://example.com/eternal_saga_ep2.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "47min",
                          "releaseDate": "2004-03-26",
                          "videoUrl": "https://example.com/eternal_saga_ep3.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "43min",
                          "releaseDate": "2012-02-13",
                          "videoUrl": "https://example.com/eternal_saga_ep4.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "49min",
                          "releaseDate": "2008-05-18",
                          "videoUrl": "https://example.com/eternal_saga_ep5.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "44min",
                          "releaseDate": "2011-08-05",
                          "videoUrl": "https://example.com/eternal_saga_ep6.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "38min",
                          "releaseDate": "2024-01-14",
                          "videoUrl": "https://example.com/eternal_saga_ep7.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "20min",
                          "releaseDate": "2004-09-11",
                          "videoUrl": "https://example.com/eternal_saga_ep8.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "21min",
                          "releaseDate": "2024-06-20",
                          "videoUrl": "https://example.com/eternal_saga_ep9.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "23min",
                          "releaseDate": "2003-07-18",
                          "videoUrl": "https://example.com/eternal_saga_ep10.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "24min",
                          "releaseDate": "2015-06-22",
                          "videoUrl": "https://example.com/eternal_saga_ep11.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Legacy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/phantom_legacy.jpg",
                  "cardImage": "https://example.com/cards/phantom_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2013,
                      "episodes": [
                        {
                          "title": "Phantom Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "38min",
                          "releaseDate": "2017-04-25",
                          "videoUrl": "https://example.com/phantom_legacy_ep1.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "30min",
                          "releaseDate": "2005-06-09",
                          "videoUrl": "https://example.com/phantom_legacy_ep2.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "27min",
                          "releaseDate": "2019-07-14",
                          "videoUrl": "https://example.com/phantom_legacy_ep3.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "23min",
                          "releaseDate": "2000-02-02",
                          "videoUrl": "https://example.com/phantom_legacy_ep4.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "29min",
                          "releaseDate": "2006-12-30",
                          "videoUrl": "https://example.com/phantom_legacy_ep5.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "31min",
                          "releaseDate": "2022-10-14",
                          "videoUrl": "https://example.com/phantom_legacy_ep6.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "25min",
                          "releaseDate": "2002-01-23",
                          "videoUrl": "https://example.com/phantom_legacy_ep7.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "23min",
                          "releaseDate": "2019-09-12",
                          "videoUrl": "https://example.com/phantom_legacy_ep8.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "41min",
                          "releaseDate": "2017-04-24",
                          "videoUrl": "https://example.com/phantom_legacy_ep9.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "33min",
                          "releaseDate": "2015-01-06",
                          "videoUrl": "https://example.com/phantom_legacy_ep10.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "42min",
                          "releaseDate": "2000-03-28",
                          "videoUrl": "https://example.com/phantom_legacy_ep11.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "43min",
                          "releaseDate": "2017-03-23",
                          "videoUrl": "https://example.com/phantom_legacy_ep12.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "33min",
                          "releaseDate": "2009-11-24",
                          "videoUrl": "https://example.com/phantom_legacy_ep13.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2007,
                      "episodes": [
                        {
                          "title": "Phantom Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "20min",
                          "releaseDate": "2008-06-18",
                          "videoUrl": "https://example.com/phantom_legacy_ep1.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "29min",
                          "releaseDate": "2000-04-22",
                          "videoUrl": "https://example.com/phantom_legacy_ep2.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "28min",
                          "releaseDate": "2007-11-03",
                          "videoUrl": "https://example.com/phantom_legacy_ep3.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "31min",
                          "releaseDate": "2014-08-16",
                          "videoUrl": "https://example.com/phantom_legacy_ep4.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "45min",
                          "releaseDate": "2015-10-26",
                          "videoUrl": "https://example.com/phantom_legacy_ep5.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "22min",
                          "releaseDate": "2006-03-11",
                          "videoUrl": "https://example.com/phantom_legacy_ep6.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "24min",
                          "releaseDate": "2013-09-13",
                          "videoUrl": "https://example.com/phantom_legacy_ep7.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "43min",
                          "releaseDate": "2007-05-27",
                          "videoUrl": "https://example.com/phantom_legacy_ep8.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "39min",
                          "releaseDate": "2000-02-25",
                          "videoUrl": "https://example.com/phantom_legacy_ep9.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "50min",
                          "releaseDate": "2009-06-23",
                          "videoUrl": "https://example.com/phantom_legacy_ep10.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Empire",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/legend_empire.jpg",
                  "cardImage": "https://example.com/cards/legend_empire.jpg",
                  "isCarousel": false,
                  "seasons": []
                }
              ]
            }
          ]
        },
        {
          "name": "Comedy",
          "image": "https://example.com/images/comedy.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Dark Warrior",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/dark_warrior.jpg",
                  "cardImage": "https://example.com/cards/dark_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Shadow Saga",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/shadow_saga.jpg",
                  "cardImage": "https://example.com/cards/shadow_saga.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Legacy",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/phantom_legacy.jpg",
                  "cardImage": "https://example.com/cards/phantom_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Eternal Quest",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/eternal_quest.jpg",
                  "cardImage": "https://example.com/cards/eternal_quest.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Eternal Quest Part 1",
                      "partNumber": 1,
                      "releaseYear": 2018,
                      "duration": "155min",
                      "videoUrl": "https://example.com/eternal_quest_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Shadow Storm",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/shadow_storm.jpg",
                  "cardImage": "https://example.com/cards/shadow_storm.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Shadow Storm Part 1",
                      "partNumber": 1,
                      "releaseYear": 2008,
                      "duration": "171min",
                      "videoUrl": "https://example.com/shadow_storm_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Dark Prophecy",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/dark_prophecy.jpg",
                  "cardImage": "https://example.com/cards/dark_prophecy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Warrior",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/phantom_warrior.jpg",
                  "cardImage": "https://example.com/cards/phantom_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Eternal Legacy",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/eternal_legacy.jpg",
                  "cardImage": "https://example.com/cards/eternal_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Shadow Prophecy",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/shadow_prophecy.jpg",
                  "cardImage": "https://example.com/cards/shadow_prophecy.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Shadow Prophecy Part 1",
                      "partNumber": 1,
                      "releaseYear": 2018,
                      "duration": "101min",
                      "videoUrl": "https://example.com/shadow_prophecy_part1.mp4"
                    }
                  ]
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Mystic Legacy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/mystic_legacy.jpg",
                  "cardImage": "https://example.com/cards/mystic_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2009,
                      "episodes": [
                        {
                          "title": "Mystic Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "37min",
                          "releaseDate": "2000-02-10",
                          "videoUrl": "https://example.com/mystic_legacy_ep1.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "30min",
                          "releaseDate": "2020-09-02",
                          "videoUrl": "https://example.com/mystic_legacy_ep2.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "50min",
                          "releaseDate": "2008-04-11",
                          "videoUrl": "https://example.com/mystic_legacy_ep3.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "37min",
                          "releaseDate": "2019-07-26",
                          "videoUrl": "https://example.com/mystic_legacy_ep4.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "49min",
                          "releaseDate": "2010-02-07",
                          "videoUrl": "https://example.com/mystic_legacy_ep5.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "27min",
                          "releaseDate": "2001-02-26",
                          "videoUrl": "https://example.com/mystic_legacy_ep6.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "28min",
                          "releaseDate": "2003-07-30",
                          "videoUrl": "https://example.com/mystic_legacy_ep7.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "39min",
                          "releaseDate": "2012-09-22",
                          "videoUrl": "https://example.com/mystic_legacy_ep8.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "26min",
                          "releaseDate": "2012-04-13",
                          "videoUrl": "https://example.com/mystic_legacy_ep9.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "45min",
                          "releaseDate": "2022-05-07",
                          "videoUrl": "https://example.com/mystic_legacy_ep10.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "44min",
                          "releaseDate": "2021-12-02",
                          "videoUrl": "https://example.com/mystic_legacy_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Mystic Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "36min",
                          "releaseDate": "2012-09-28",
                          "videoUrl": "https://example.com/mystic_legacy_ep1.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "31min",
                          "releaseDate": "2016-07-31",
                          "videoUrl": "https://example.com/mystic_legacy_ep2.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "43min",
                          "releaseDate": "2018-05-21",
                          "videoUrl": "https://example.com/mystic_legacy_ep3.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "30min",
                          "releaseDate": "2017-04-05",
                          "videoUrl": "https://example.com/mystic_legacy_ep4.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "38min",
                          "releaseDate": "2003-04-18",
                          "videoUrl": "https://example.com/mystic_legacy_ep5.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "42min",
                          "releaseDate": "2024-04-07",
                          "videoUrl": "https://example.com/mystic_legacy_ep6.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "29min",
                          "releaseDate": "2018-06-03",
                          "videoUrl": "https://example.com/mystic_legacy_ep7.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "22min",
                          "releaseDate": "2002-12-17",
                          "videoUrl": "https://example.com/mystic_legacy_ep8.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "40min",
                          "releaseDate": "2001-10-14",
                          "videoUrl": "https://example.com/mystic_legacy_ep9.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "27min",
                          "releaseDate": "2022-02-26",
                          "videoUrl": "https://example.com/mystic_legacy_ep10.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "25min",
                          "releaseDate": "2016-10-31",
                          "videoUrl": "https://example.com/mystic_legacy_ep11.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "41min",
                          "releaseDate": "2012-01-27",
                          "videoUrl": "https://example.com/mystic_legacy_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Legacy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/eternal_legacy.jpg",
                  "cardImage": "https://example.com/cards/eternal_legacy.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Dark Prophecy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/dark_prophecy.jpg",
                  "cardImage": "https://example.com/cards/dark_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2023,
                      "episodes": [
                        {
                          "title": "Dark Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "49min",
                          "releaseDate": "2020-01-15",
                          "videoUrl": "https://example.com/dark_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "29min",
                          "releaseDate": "2007-04-14",
                          "videoUrl": "https://example.com/dark_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "20min",
                          "releaseDate": "2022-07-16",
                          "videoUrl": "https://example.com/dark_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "50min",
                          "releaseDate": "2003-07-28",
                          "videoUrl": "https://example.com/dark_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "37min",
                          "releaseDate": "2020-05-04",
                          "videoUrl": "https://example.com/dark_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "37min",
                          "releaseDate": "2022-08-21",
                          "videoUrl": "https://example.com/dark_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "34min",
                          "releaseDate": "2003-08-19",
                          "videoUrl": "https://example.com/dark_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "26min",
                          "releaseDate": "2013-05-06",
                          "videoUrl": "https://example.com/dark_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "34min",
                          "releaseDate": "2024-12-28",
                          "videoUrl": "https://example.com/dark_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "20min",
                          "releaseDate": "2020-05-08",
                          "videoUrl": "https://example.com/dark_prophecy_ep10.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Quest",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/legend_quest.jpg",
                  "cardImage": "https://example.com/cards/legend_quest.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Dark Legacy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/dark_legacy.jpg",
                  "cardImage": "https://example.com/cards/dark_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2017,
                      "episodes": [
                        {
                          "title": "Dark Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "35min",
                          "releaseDate": "2007-03-10",
                          "videoUrl": "https://example.com/dark_legacy_ep1.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "20min",
                          "releaseDate": "2022-12-02",
                          "videoUrl": "https://example.com/dark_legacy_ep2.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "46min",
                          "releaseDate": "2003-09-11",
                          "videoUrl": "https://example.com/dark_legacy_ep3.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "37min",
                          "releaseDate": "2016-12-02",
                          "videoUrl": "https://example.com/dark_legacy_ep4.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "23min",
                          "releaseDate": "2021-02-28",
                          "videoUrl": "https://example.com/dark_legacy_ep5.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "21min",
                          "releaseDate": "2022-07-29",
                          "videoUrl": "https://example.com/dark_legacy_ep6.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "42min",
                          "releaseDate": "2007-04-24",
                          "videoUrl": "https://example.com/dark_legacy_ep7.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "44min",
                          "releaseDate": "2010-02-03",
                          "videoUrl": "https://example.com/dark_legacy_ep8.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "46min",
                          "releaseDate": "2015-11-27",
                          "videoUrl": "https://example.com/dark_legacy_ep9.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2021,
                      "episodes": [
                        {
                          "title": "Dark Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "42min",
                          "releaseDate": "2000-08-30",
                          "videoUrl": "https://example.com/dark_legacy_ep1.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "33min",
                          "releaseDate": "2000-12-18",
                          "videoUrl": "https://example.com/dark_legacy_ep2.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "40min",
                          "releaseDate": "2011-08-24",
                          "videoUrl": "https://example.com/dark_legacy_ep3.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "27min",
                          "releaseDate": "2024-11-25",
                          "videoUrl": "https://example.com/dark_legacy_ep4.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "36min",
                          "releaseDate": "2012-03-01",
                          "videoUrl": "https://example.com/dark_legacy_ep5.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "32min",
                          "releaseDate": "2003-07-02",
                          "videoUrl": "https://example.com/dark_legacy_ep6.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "38min",
                          "releaseDate": "2005-03-22",
                          "videoUrl": "https://example.com/dark_legacy_ep7.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "32min",
                          "releaseDate": "2021-09-12",
                          "videoUrl": "https://example.com/dark_legacy_ep8.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "29min",
                          "releaseDate": "2008-09-18",
                          "videoUrl": "https://example.com/dark_legacy_ep9.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "26min",
                          "releaseDate": "2009-12-03",
                          "videoUrl": "https://example.com/dark_legacy_ep10.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "21min",
                          "releaseDate": "2003-04-19",
                          "videoUrl": "https://example.com/dark_legacy_ep11.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Legacy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/dark_legacy.jpg",
                  "cardImage": "https://example.com/cards/dark_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2009,
                      "episodes": [
                        {
                          "title": "Dark Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "23min",
                          "releaseDate": "2009-12-03",
                          "videoUrl": "https://example.com/dark_legacy_ep1.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "21min",
                          "releaseDate": "2009-11-18",
                          "videoUrl": "https://example.com/dark_legacy_ep2.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "24min",
                          "releaseDate": "2004-04-14",
                          "videoUrl": "https://example.com/dark_legacy_ep3.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "20min",
                          "releaseDate": "2024-07-20",
                          "videoUrl": "https://example.com/dark_legacy_ep4.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "20min",
                          "releaseDate": "2007-03-28",
                          "videoUrl": "https://example.com/dark_legacy_ep5.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "20min",
                          "releaseDate": "2002-04-25",
                          "videoUrl": "https://example.com/dark_legacy_ep6.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "45min",
                          "releaseDate": "2000-03-11",
                          "videoUrl": "https://example.com/dark_legacy_ep7.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "29min",
                          "releaseDate": "2017-04-23",
                          "videoUrl": "https://example.com/dark_legacy_ep8.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "28min",
                          "releaseDate": "2014-08-21",
                          "videoUrl": "https://example.com/dark_legacy_ep9.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "27min",
                          "releaseDate": "2024-01-23",
                          "videoUrl": "https://example.com/dark_legacy_ep10.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2007,
                      "episodes": [
                        {
                          "title": "Dark Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "27min",
                          "releaseDate": "2016-07-13",
                          "videoUrl": "https://example.com/dark_legacy_ep1.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "28min",
                          "releaseDate": "2022-07-10",
                          "videoUrl": "https://example.com/dark_legacy_ep2.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "21min",
                          "releaseDate": "2016-01-12",
                          "videoUrl": "https://example.com/dark_legacy_ep3.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "32min",
                          "releaseDate": "2003-01-10",
                          "videoUrl": "https://example.com/dark_legacy_ep4.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "36min",
                          "releaseDate": "2006-06-23",
                          "videoUrl": "https://example.com/dark_legacy_ep5.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "37min",
                          "releaseDate": "2013-09-08",
                          "videoUrl": "https://example.com/dark_legacy_ep6.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "43min",
                          "releaseDate": "2021-01-16",
                          "videoUrl": "https://example.com/dark_legacy_ep7.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "25min",
                          "releaseDate": "2022-03-01",
                          "videoUrl": "https://example.com/dark_legacy_ep8.mp4"
                        },
                        {
                          "title": "Dark Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "49min",
                          "releaseDate": "2002-08-19",
                          "videoUrl": "https://example.com/dark_legacy_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Quest",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/dark_quest.jpg",
                  "cardImage": "https://example.com/cards/dark_quest.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Shadow Empire",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/shadow_empire.jpg",
                  "cardImage": "https://example.com/cards/shadow_empire.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Shadow Empire",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/shadow_empire.jpg",
                  "cardImage": "https://example.com/cards/shadow_empire.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2013,
                      "episodes": [
                        {
                          "title": "Shadow Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "49min",
                          "releaseDate": "2014-01-13",
                          "videoUrl": "https://example.com/shadow_empire_ep1.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "45min",
                          "releaseDate": "2000-12-27",
                          "videoUrl": "https://example.com/shadow_empire_ep2.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "38min",
                          "releaseDate": "2002-06-19",
                          "videoUrl": "https://example.com/shadow_empire_ep3.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "46min",
                          "releaseDate": "2000-04-06",
                          "videoUrl": "https://example.com/shadow_empire_ep4.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "20min",
                          "releaseDate": "2014-08-01",
                          "videoUrl": "https://example.com/shadow_empire_ep5.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "46min",
                          "releaseDate": "2001-12-28",
                          "videoUrl": "https://example.com/shadow_empire_ep6.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "45min",
                          "releaseDate": "2012-04-25",
                          "videoUrl": "https://example.com/shadow_empire_ep7.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "28min",
                          "releaseDate": "2017-05-23",
                          "videoUrl": "https://example.com/shadow_empire_ep8.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "27min",
                          "releaseDate": "2002-04-21",
                          "videoUrl": "https://example.com/shadow_empire_ep9.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "22min",
                          "releaseDate": "2009-11-04",
                          "videoUrl": "https://example.com/shadow_empire_ep10.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "42min",
                          "releaseDate": "2018-11-27",
                          "videoUrl": "https://example.com/shadow_empire_ep11.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 12",
                          "episodeNumber": 12,
                          "duration": "45min",
                          "releaseDate": "2023-12-08",
                          "videoUrl": "https://example.com/shadow_empire_ep12.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 13",
                          "episodeNumber": 13,
                          "duration": "48min",
                          "releaseDate": "2014-06-07",
                          "videoUrl": "https://example.com/shadow_empire_ep13.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2012,
                      "episodes": [
                        {
                          "title": "Shadow Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "45min",
                          "releaseDate": "2024-01-10",
                          "videoUrl": "https://example.com/shadow_empire_ep1.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "44min",
                          "releaseDate": "2001-04-16",
                          "videoUrl": "https://example.com/shadow_empire_ep2.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "40min",
                          "releaseDate": "2004-10-06",
                          "videoUrl": "https://example.com/shadow_empire_ep3.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "29min",
                          "releaseDate": "2003-01-01",
                          "videoUrl": "https://example.com/shadow_empire_ep4.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "36min",
                          "releaseDate": "2011-02-19",
                          "videoUrl": "https://example.com/shadow_empire_ep5.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "48min",
                          "releaseDate": "2007-09-05",
                          "videoUrl": "https://example.com/shadow_empire_ep6.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "32min",
                          "releaseDate": "2024-04-24",
                          "videoUrl": "https://example.com/shadow_empire_ep7.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "24min",
                          "releaseDate": "2002-09-25",
                          "videoUrl": "https://example.com/shadow_empire_ep8.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "46min",
                          "releaseDate": "2007-12-25",
                          "videoUrl": "https://example.com/shadow_empire_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Legacy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/eternal_legacy.jpg",
                  "cardImage": "https://example.com/cards/eternal_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2009,
                      "episodes": [
                        {
                          "title": "Eternal Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "28min",
                          "releaseDate": "2015-01-14",
                          "videoUrl": "https://example.com/eternal_legacy_ep1.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "20min",
                          "releaseDate": "2007-07-16",
                          "videoUrl": "https://example.com/eternal_legacy_ep2.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "34min",
                          "releaseDate": "2009-11-20",
                          "videoUrl": "https://example.com/eternal_legacy_ep3.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "50min",
                          "releaseDate": "2018-05-03",
                          "videoUrl": "https://example.com/eternal_legacy_ep4.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "27min",
                          "releaseDate": "2002-03-27",
                          "videoUrl": "https://example.com/eternal_legacy_ep5.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "36min",
                          "releaseDate": "2008-05-04",
                          "videoUrl": "https://example.com/eternal_legacy_ep6.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "35min",
                          "releaseDate": "2006-05-04",
                          "videoUrl": "https://example.com/eternal_legacy_ep7.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "40min",
                          "releaseDate": "2018-08-26",
                          "videoUrl": "https://example.com/eternal_legacy_ep8.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "29min",
                          "releaseDate": "2023-06-19",
                          "videoUrl": "https://example.com/eternal_legacy_ep9.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "36min",
                          "releaseDate": "2019-09-10",
                          "videoUrl": "https://example.com/eternal_legacy_ep10.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "29min",
                          "releaseDate": "2024-07-14",
                          "videoUrl": "https://example.com/eternal_legacy_ep11.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "29min",
                          "releaseDate": "2018-03-26",
                          "videoUrl": "https://example.com/eternal_legacy_ep12.mp4"
                        },
                        {
                          "title": "Eternal Legacy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "35min",
                          "releaseDate": "2015-11-25",
                          "videoUrl": "https://example.com/eternal_legacy_ep13.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Sci-Fi",
          "image": "https://example.com/images/sci-fi.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Eternal Quest",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/eternal_quest.jpg",
                  "cardImage": "https://example.com/cards/eternal_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Dark Empire",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/dark_empire.jpg",
                  "cardImage": "https://example.com/cards/dark_empire.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Saga",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/phantom_saga.jpg",
                  "cardImage": "https://example.com/cards/phantom_saga.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Legend Legacy",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/legend_legacy.jpg",
                  "cardImage": "https://example.com/cards/legend_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Shadow Prophecy",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/shadow_prophecy.jpg",
                  "cardImage": "https://example.com/cards/shadow_prophecy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Legend Quest",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/legend_quest.jpg",
                  "cardImage": "https://example.com/cards/legend_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Infinity Storm",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/infinity_storm.jpg",
                  "cardImage": "https://example.com/cards/infinity_storm.jpg",
                  "isCarousel": false,
                  "movieParts": []
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Phantom Saga",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/phantom_saga.jpg",
                  "cardImage": "https://example.com/cards/phantom_saga.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2007,
                      "episodes": [
                        {
                          "title": "Phantom Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "34min",
                          "releaseDate": "2012-02-13",
                          "videoUrl": "https://example.com/phantom_saga_ep1.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "41min",
                          "releaseDate": "2018-06-20",
                          "videoUrl": "https://example.com/phantom_saga_ep2.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "26min",
                          "releaseDate": "2009-05-15",
                          "videoUrl": "https://example.com/phantom_saga_ep3.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "44min",
                          "releaseDate": "2017-05-07",
                          "videoUrl": "https://example.com/phantom_saga_ep4.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "34min",
                          "releaseDate": "2022-11-29",
                          "videoUrl": "https://example.com/phantom_saga_ep5.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "38min",
                          "releaseDate": "2004-10-29",
                          "videoUrl": "https://example.com/phantom_saga_ep6.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "21min",
                          "releaseDate": "2003-03-29",
                          "videoUrl": "https://example.com/phantom_saga_ep7.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "24min",
                          "releaseDate": "2008-04-25",
                          "videoUrl": "https://example.com/phantom_saga_ep8.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "38min",
                          "releaseDate": "2020-03-21",
                          "videoUrl": "https://example.com/phantom_saga_ep9.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2013,
                      "episodes": [
                        {
                          "title": "Phantom Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "34min",
                          "releaseDate": "2008-12-14",
                          "videoUrl": "https://example.com/phantom_saga_ep1.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "23min",
                          "releaseDate": "2002-08-16",
                          "videoUrl": "https://example.com/phantom_saga_ep2.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "42min",
                          "releaseDate": "2001-11-19",
                          "videoUrl": "https://example.com/phantom_saga_ep3.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "42min",
                          "releaseDate": "2018-07-16",
                          "videoUrl": "https://example.com/phantom_saga_ep4.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "46min",
                          "releaseDate": "2023-04-21",
                          "videoUrl": "https://example.com/phantom_saga_ep5.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "29min",
                          "releaseDate": "2007-05-05",
                          "videoUrl": "https://example.com/phantom_saga_ep6.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "28min",
                          "releaseDate": "2022-02-20",
                          "videoUrl": "https://example.com/phantom_saga_ep7.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "35min",
                          "releaseDate": "2021-01-21",
                          "videoUrl": "https://example.com/phantom_saga_ep8.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "50min",
                          "releaseDate": "2010-12-17",
                          "videoUrl": "https://example.com/phantom_saga_ep9.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "30min",
                          "releaseDate": "2017-05-10",
                          "videoUrl": "https://example.com/phantom_saga_ep10.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "35min",
                          "releaseDate": "2000-04-24",
                          "videoUrl": "https://example.com/phantom_saga_ep11.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 12",
                          "episodeNumber": 12,
                          "duration": "26min",
                          "releaseDate": "2017-01-30",
                          "videoUrl": "https://example.com/phantom_saga_ep12.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 13",
                          "episodeNumber": 13,
                          "duration": "25min",
                          "releaseDate": "2000-04-12",
                          "videoUrl": "https://example.com/phantom_saga_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Shadow Quest",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/shadow_quest.jpg",
                  "cardImage": "https://example.com/cards/shadow_quest.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Legend Legacy",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/legend_legacy.jpg",
                  "cardImage": "https://example.com/cards/legend_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2016,
                      "episodes": [
                        {
                          "title": "Legend Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "22min",
                          "releaseDate": "2020-08-14",
                          "videoUrl": "https://example.com/legend_legacy_ep1.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "44min",
                          "releaseDate": "2024-07-14",
                          "videoUrl": "https://example.com/legend_legacy_ep2.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "29min",
                          "releaseDate": "2005-12-06",
                          "videoUrl": "https://example.com/legend_legacy_ep3.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "44min",
                          "releaseDate": "2022-08-30",
                          "videoUrl": "https://example.com/legend_legacy_ep4.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "31min",
                          "releaseDate": "2007-03-10",
                          "videoUrl": "https://example.com/legend_legacy_ep5.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "22min",
                          "releaseDate": "2002-10-09",
                          "videoUrl": "https://example.com/legend_legacy_ep6.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "34min",
                          "releaseDate": "2013-06-26",
                          "videoUrl": "https://example.com/legend_legacy_ep7.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "34min",
                          "releaseDate": "2002-03-25",
                          "videoUrl": "https://example.com/legend_legacy_ep8.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "24min",
                          "releaseDate": "2021-11-22",
                          "videoUrl": "https://example.com/legend_legacy_ep9.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "31min",
                          "releaseDate": "2013-06-14",
                          "videoUrl": "https://example.com/legend_legacy_ep10.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "27min",
                          "releaseDate": "2023-06-26",
                          "videoUrl": "https://example.com/legend_legacy_ep11.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "23min",
                          "releaseDate": "2012-10-05",
                          "videoUrl": "https://example.com/legend_legacy_ep12.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "23min",
                          "releaseDate": "2006-09-19",
                          "videoUrl": "https://example.com/legend_legacy_ep13.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2017,
                      "episodes": [
                        {
                          "title": "Legend Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "22min",
                          "releaseDate": "2006-06-28",
                          "videoUrl": "https://example.com/legend_legacy_ep1.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "23min",
                          "releaseDate": "2013-09-08",
                          "videoUrl": "https://example.com/legend_legacy_ep2.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "45min",
                          "releaseDate": "2013-01-01",
                          "videoUrl": "https://example.com/legend_legacy_ep3.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "32min",
                          "releaseDate": "2000-08-05",
                          "videoUrl": "https://example.com/legend_legacy_ep4.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "39min",
                          "releaseDate": "2013-08-01",
                          "videoUrl": "https://example.com/legend_legacy_ep5.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "39min",
                          "releaseDate": "2015-07-03",
                          "videoUrl": "https://example.com/legend_legacy_ep6.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "35min",
                          "releaseDate": "2013-03-02",
                          "videoUrl": "https://example.com/legend_legacy_ep7.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "20min",
                          "releaseDate": "2001-11-15",
                          "videoUrl": "https://example.com/legend_legacy_ep8.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "29min",
                          "releaseDate": "2001-11-09",
                          "videoUrl": "https://example.com/legend_legacy_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Warrior",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/eternal_warrior.jpg",
                  "cardImage": "https://example.com/cards/eternal_warrior.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2010,
                      "episodes": [
                        {
                          "title": "Eternal Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "30min",
                          "releaseDate": "2021-07-11",
                          "videoUrl": "https://example.com/eternal_warrior_ep1.mp4"
                        },
                        {
                          "title": "Eternal Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "22min",
                          "releaseDate": "2021-03-09",
                          "videoUrl": "https://example.com/eternal_warrior_ep2.mp4"
                        },
                        {
                          "title": "Eternal Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "44min",
                          "releaseDate": "2014-02-21",
                          "videoUrl": "https://example.com/eternal_warrior_ep3.mp4"
                        },
                        {
                          "title": "Eternal Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "22min",
                          "releaseDate": "2015-08-04",
                          "videoUrl": "https://example.com/eternal_warrior_ep4.mp4"
                        },
                        {
                          "title": "Eternal Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "39min",
                          "releaseDate": "2019-04-07",
                          "videoUrl": "https://example.com/eternal_warrior_ep5.mp4"
                        },
                        {
                          "title": "Eternal Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "35min",
                          "releaseDate": "2010-01-26",
                          "videoUrl": "https://example.com/eternal_warrior_ep6.mp4"
                        },
                        {
                          "title": "Eternal Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "29min",
                          "releaseDate": "2018-03-09",
                          "videoUrl": "https://example.com/eternal_warrior_ep7.mp4"
                        },
                        {
                          "title": "Eternal Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "32min",
                          "releaseDate": "2002-03-16",
                          "videoUrl": "https://example.com/eternal_warrior_ep8.mp4"
                        },
                        {
                          "title": "Eternal Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "30min",
                          "releaseDate": "2010-03-16",
                          "videoUrl": "https://example.com/eternal_warrior_ep9.mp4"
                        },
                        {
                          "title": "Eternal Warrior - Episode 10",
                          "episodeNumber": 10,
                          "duration": "45min",
                          "releaseDate": "2008-09-21",
                          "videoUrl": "https://example.com/eternal_warrior_ep10.mp4"
                        },
                        {
                          "title": "Eternal Warrior - Episode 11",
                          "episodeNumber": 11,
                          "duration": "35min",
                          "releaseDate": "2001-10-08",
                          "videoUrl": "https://example.com/eternal_warrior_ep11.mp4"
                        },
                        {
                          "title": "Eternal Warrior - Episode 12",
                          "episodeNumber": 12,
                          "duration": "42min",
                          "releaseDate": "2021-09-03",
                          "videoUrl": "https://example.com/eternal_warrior_ep12.mp4"
                        },
                        {
                          "title": "Eternal Warrior - Episode 13",
                          "episodeNumber": 13,
                          "duration": "27min",
                          "releaseDate": "2009-03-14",
                          "videoUrl": "https://example.com/eternal_warrior_ep13.mp4"
                        },
                        {
                          "title": "Eternal Warrior - Episode 14",
                          "episodeNumber": 14,
                          "duration": "37min",
                          "releaseDate": "2015-10-03",
                          "videoUrl": "https://example.com/eternal_warrior_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Mystic Saga",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/mystic_saga.jpg",
                  "cardImage": "https://example.com/cards/mystic_saga.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2023,
                      "episodes": [
                        {
                          "title": "Mystic Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "48min",
                          "releaseDate": "2014-01-26",
                          "videoUrl": "https://example.com/mystic_saga_ep1.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "20min",
                          "releaseDate": "2013-04-11",
                          "videoUrl": "https://example.com/mystic_saga_ep2.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "34min",
                          "releaseDate": "2019-06-26",
                          "videoUrl": "https://example.com/mystic_saga_ep3.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "26min",
                          "releaseDate": "2002-12-13",
                          "videoUrl": "https://example.com/mystic_saga_ep4.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "23min",
                          "releaseDate": "2012-07-12",
                          "videoUrl": "https://example.com/mystic_saga_ep5.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "38min",
                          "releaseDate": "2024-12-14",
                          "videoUrl": "https://example.com/mystic_saga_ep6.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "33min",
                          "releaseDate": "2016-02-11",
                          "videoUrl": "https://example.com/mystic_saga_ep7.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "34min",
                          "releaseDate": "2011-11-07",
                          "videoUrl": "https://example.com/mystic_saga_ep8.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "40min",
                          "releaseDate": "2005-09-11",
                          "videoUrl": "https://example.com/mystic_saga_ep9.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "48min",
                          "releaseDate": "2008-03-02",
                          "videoUrl": "https://example.com/mystic_saga_ep10.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "26min",
                          "releaseDate": "2008-09-23",
                          "videoUrl": "https://example.com/mystic_saga_ep11.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 12",
                          "episodeNumber": 12,
                          "duration": "45min",
                          "releaseDate": "2020-04-26",
                          "videoUrl": "https://example.com/mystic_saga_ep12.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 13",
                          "episodeNumber": 13,
                          "duration": "49min",
                          "releaseDate": "2015-06-10",
                          "videoUrl": "https://example.com/mystic_saga_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Mystic Warrior",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/mystic_warrior.jpg",
                  "cardImage": "https://example.com/cards/mystic_warrior.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2018,
                      "episodes": [
                        {
                          "title": "Mystic Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "20min",
                          "releaseDate": "2011-06-02",
                          "videoUrl": "https://example.com/mystic_warrior_ep1.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "29min",
                          "releaseDate": "2024-11-24",
                          "videoUrl": "https://example.com/mystic_warrior_ep2.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "38min",
                          "releaseDate": "2006-05-03",
                          "videoUrl": "https://example.com/mystic_warrior_ep3.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "45min",
                          "releaseDate": "2020-08-13",
                          "videoUrl": "https://example.com/mystic_warrior_ep4.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "26min",
                          "releaseDate": "2007-11-06",
                          "videoUrl": "https://example.com/mystic_warrior_ep5.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "36min",
                          "releaseDate": "2018-10-17",
                          "videoUrl": "https://example.com/mystic_warrior_ep6.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "21min",
                          "releaseDate": "2014-07-12",
                          "videoUrl": "https://example.com/mystic_warrior_ep7.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "38min",
                          "releaseDate": "2007-04-25",
                          "videoUrl": "https://example.com/mystic_warrior_ep8.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "34min",
                          "releaseDate": "2021-05-02",
                          "videoUrl": "https://example.com/mystic_warrior_ep9.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 10",
                          "episodeNumber": 10,
                          "duration": "42min",
                          "releaseDate": "2002-01-26",
                          "videoUrl": "https://example.com/mystic_warrior_ep10.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 11",
                          "episodeNumber": 11,
                          "duration": "39min",
                          "releaseDate": "2012-06-16",
                          "videoUrl": "https://example.com/mystic_warrior_ep11.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Pakistan",
      "image": "https://example.com/images/pakistan.jpg",
      "genres": [
        {
          "name": "Action",
          "image": "https://example.com/images/action.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Shadow Storm",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/shadow_storm.jpg",
                  "cardImage": "https://example.com/cards/shadow_storm.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Infinity Warrior",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/infinity_warrior.jpg",
                  "cardImage": "https://example.com/cards/infinity_warrior.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Shadow Storm",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/shadow_storm.jpg",
                  "cardImage": "https://example.com/cards/shadow_storm.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Infinity Storm",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/infinity_storm.jpg",
                  "cardImage": "https://example.com/cards/infinity_storm.jpg",
                  "isCarousel": true,
                  "movieParts": [
                    {
                      "title": "Infinity Storm Part 1",
                      "partNumber": 1,
                      "releaseYear": 2010,
                      "duration": "100min",
                      "videoUrl": "https://example.com/infinity_storm_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Legend Warrior",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/legend_warrior.jpg",
                  "cardImage": "https://example.com/cards/legend_warrior.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Infinity Quest",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/infinity_quest.jpg",
                  "cardImage": "https://example.com/cards/infinity_quest.jpg",
                  "isCarousel": true,
                  "movieParts": [
                    {
                      "title": "Infinity Quest Part 1",
                      "partNumber": 1,
                      "releaseYear": 2018,
                      "duration": "126min",
                      "videoUrl": "https://example.com/infinity_quest_part1.mp4"
                    }
                  ]
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Legend Legacy",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/legend_legacy.jpg",
                  "cardImage": "https://example.com/cards/legend_legacy.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2009,
                      "episodes": [
                        {
                          "title": "Legend Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "25min",
                          "releaseDate": "2002-08-08",
                          "videoUrl": "https://example.com/legend_legacy_ep1.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "50min",
                          "releaseDate": "2008-11-04",
                          "videoUrl": "https://example.com/legend_legacy_ep2.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "35min",
                          "releaseDate": "2011-05-30",
                          "videoUrl": "https://example.com/legend_legacy_ep3.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "34min",
                          "releaseDate": "2015-09-28",
                          "videoUrl": "https://example.com/legend_legacy_ep4.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "45min",
                          "releaseDate": "2010-01-21",
                          "videoUrl": "https://example.com/legend_legacy_ep5.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "40min",
                          "releaseDate": "2016-11-02",
                          "videoUrl": "https://example.com/legend_legacy_ep6.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "43min",
                          "releaseDate": "2006-04-28",
                          "videoUrl": "https://example.com/legend_legacy_ep7.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "33min",
                          "releaseDate": "2005-02-06",
                          "videoUrl": "https://example.com/legend_legacy_ep8.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "48min",
                          "releaseDate": "2024-10-07",
                          "videoUrl": "https://example.com/legend_legacy_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Quest",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/dark_quest.jpg",
                  "cardImage": "https://example.com/cards/dark_quest.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2023,
                      "episodes": [
                        {
                          "title": "Dark Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "38min",
                          "releaseDate": "2012-10-22",
                          "videoUrl": "https://example.com/dark_quest_ep1.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "36min",
                          "releaseDate": "2013-11-08",
                          "videoUrl": "https://example.com/dark_quest_ep2.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "42min",
                          "releaseDate": "2007-12-18",
                          "videoUrl": "https://example.com/dark_quest_ep3.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "29min",
                          "releaseDate": "2007-12-14",
                          "videoUrl": "https://example.com/dark_quest_ep4.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "36min",
                          "releaseDate": "2006-07-31",
                          "videoUrl": "https://example.com/dark_quest_ep5.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "37min",
                          "releaseDate": "2014-04-24",
                          "videoUrl": "https://example.com/dark_quest_ep6.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "46min",
                          "releaseDate": "2016-12-01",
                          "videoUrl": "https://example.com/dark_quest_ep7.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "26min",
                          "releaseDate": "2003-09-18",
                          "videoUrl": "https://example.com/dark_quest_ep8.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "45min",
                          "releaseDate": "2008-09-29",
                          "videoUrl": "https://example.com/dark_quest_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Legacy",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/legend_legacy.jpg",
                  "cardImage": "https://example.com/cards/legend_legacy.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2018,
                      "episodes": [
                        {
                          "title": "Legend Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "42min",
                          "releaseDate": "2012-11-22",
                          "videoUrl": "https://example.com/legend_legacy_ep1.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "34min",
                          "releaseDate": "2007-08-09",
                          "videoUrl": "https://example.com/legend_legacy_ep2.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "32min",
                          "releaseDate": "2014-04-27",
                          "videoUrl": "https://example.com/legend_legacy_ep3.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "50min",
                          "releaseDate": "2022-12-15",
                          "videoUrl": "https://example.com/legend_legacy_ep4.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "31min",
                          "releaseDate": "2006-08-29",
                          "videoUrl": "https://example.com/legend_legacy_ep5.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "22min",
                          "releaseDate": "2014-09-29",
                          "videoUrl": "https://example.com/legend_legacy_ep6.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "21min",
                          "releaseDate": "2001-06-23",
                          "videoUrl": "https://example.com/legend_legacy_ep7.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "48min",
                          "releaseDate": "2012-12-11",
                          "videoUrl": "https://example.com/legend_legacy_ep8.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "49min",
                          "releaseDate": "2022-12-12",
                          "videoUrl": "https://example.com/legend_legacy_ep9.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "40min",
                          "releaseDate": "2007-04-25",
                          "videoUrl": "https://example.com/legend_legacy_ep10.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "50min",
                          "releaseDate": "2018-06-06",
                          "videoUrl": "https://example.com/legend_legacy_ep11.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "41min",
                          "releaseDate": "2004-03-26",
                          "videoUrl": "https://example.com/legend_legacy_ep12.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "40min",
                          "releaseDate": "2023-10-11",
                          "videoUrl": "https://example.com/legend_legacy_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Shadow Empire",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/shadow_empire.jpg",
                  "cardImage": "https://example.com/cards/shadow_empire.jpg",
                  "isCarousel": true,
                  "seasons": []
                },
                {
                  "title": "Eternal Quest",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/eternal_quest.jpg",
                  "cardImage": "https://example.com/cards/eternal_quest.jpg",
                  "isCarousel": true,
                  "seasons": []
                },
                {
                  "title": "Legend Quest",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/legend_quest.jpg",
                  "cardImage": "https://example.com/cards/legend_quest.jpg",
                  "isCarousel": true,
                  "seasons": []
                },
                {
                  "title": "Legend Warrior",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/legend_warrior.jpg",
                  "cardImage": "https://example.com/cards/legend_warrior.jpg",
                  "isCarousel": true,
                  "seasons": []
                },
                {
                  "title": "Phantom Warrior",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/phantom_warrior.jpg",
                  "cardImage": "https://example.com/cards/phantom_warrior.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2014,
                      "episodes": [
                        {
                          "title": "Phantom Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "21min",
                          "releaseDate": "2015-10-28",
                          "videoUrl": "https://example.com/phantom_warrior_ep1.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "31min",
                          "releaseDate": "2015-04-30",
                          "videoUrl": "https://example.com/phantom_warrior_ep2.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "20min",
                          "releaseDate": "2017-11-18",
                          "videoUrl": "https://example.com/phantom_warrior_ep3.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "38min",
                          "releaseDate": "2004-10-08",
                          "videoUrl": "https://example.com/phantom_warrior_ep4.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "41min",
                          "releaseDate": "2005-03-23",
                          "videoUrl": "https://example.com/phantom_warrior_ep5.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "44min",
                          "releaseDate": "2016-12-25",
                          "videoUrl": "https://example.com/phantom_warrior_ep6.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "46min",
                          "releaseDate": "2013-03-11",
                          "videoUrl": "https://example.com/phantom_warrior_ep7.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "40min",
                          "releaseDate": "2006-11-20",
                          "videoUrl": "https://example.com/phantom_warrior_ep8.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "28min",
                          "releaseDate": "2002-09-13",
                          "videoUrl": "https://example.com/phantom_warrior_ep9.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Drama",
          "image": "https://example.com/images/drama.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Shadow Warrior",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/shadow_warrior.jpg",
                  "cardImage": "https://example.com/cards/shadow_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Mystic Warrior",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/mystic_warrior.jpg",
                  "cardImage": "https://example.com/cards/mystic_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Eternal Saga",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/eternal_saga.jpg",
                  "cardImage": "https://example.com/cards/eternal_saga.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Eternal Saga",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/eternal_saga.jpg",
                  "cardImage": "https://example.com/cards/eternal_saga.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Eternal Saga Part 1",
                      "partNumber": 1,
                      "releaseYear": 2007,
                      "duration": "91min",
                      "videoUrl": "https://example.com/eternal_saga_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Infinity Empire",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/infinity_empire.jpg",
                  "cardImage": "https://example.com/cards/infinity_empire.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Mystic Prophecy",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/mystic_prophecy.jpg",
                  "cardImage": "https://example.com/cards/mystic_prophecy.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Mystic Prophecy Part 1",
                      "partNumber": 1,
                      "releaseYear": 2004,
                      "duration": "163min",
                      "videoUrl": "https://example.com/mystic_prophecy_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Mystic Warrior",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/mystic_warrior.jpg",
                  "cardImage": "https://example.com/cards/mystic_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Mystic Warrior Part 1",
                      "partNumber": 1,
                      "releaseYear": 2004,
                      "duration": "103min",
                      "videoUrl": "https://example.com/mystic_warrior_part1.mp4"
                    }
                  ]
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Infinity Legacy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/infinity_legacy.jpg",
                  "cardImage": "https://example.com/cards/infinity_legacy.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Phantom Quest",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/phantom_quest.jpg",
                  "cardImage": "https://example.com/cards/phantom_quest.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Eternal Storm",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/eternal_storm.jpg",
                  "cardImage": "https://example.com/cards/eternal_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2011,
                      "episodes": [
                        {
                          "title": "Eternal Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "42min",
                          "releaseDate": "2010-12-29",
                          "videoUrl": "https://example.com/eternal_storm_ep1.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "37min",
                          "releaseDate": "2012-09-04",
                          "videoUrl": "https://example.com/eternal_storm_ep2.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "20min",
                          "releaseDate": "2014-06-26",
                          "videoUrl": "https://example.com/eternal_storm_ep3.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "50min",
                          "releaseDate": "2013-02-21",
                          "videoUrl": "https://example.com/eternal_storm_ep4.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "31min",
                          "releaseDate": "2006-05-26",
                          "videoUrl": "https://example.com/eternal_storm_ep5.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "45min",
                          "releaseDate": "2023-10-15",
                          "videoUrl": "https://example.com/eternal_storm_ep6.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "36min",
                          "releaseDate": "2003-06-17",
                          "videoUrl": "https://example.com/eternal_storm_ep7.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "46min",
                          "releaseDate": "2000-06-01",
                          "videoUrl": "https://example.com/eternal_storm_ep8.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "48min",
                          "releaseDate": "2006-04-26",
                          "videoUrl": "https://example.com/eternal_storm_ep9.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "44min",
                          "releaseDate": "2004-12-14",
                          "videoUrl": "https://example.com/eternal_storm_ep10.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Warrior",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/legend_warrior.jpg",
                  "cardImage": "https://example.com/cards/legend_warrior.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2008,
                      "episodes": [
                        {
                          "title": "Legend Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "45min",
                          "releaseDate": "2007-01-14",
                          "videoUrl": "https://example.com/legend_warrior_ep1.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "34min",
                          "releaseDate": "2002-01-26",
                          "videoUrl": "https://example.com/legend_warrior_ep2.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "27min",
                          "releaseDate": "2012-12-07",
                          "videoUrl": "https://example.com/legend_warrior_ep3.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "28min",
                          "releaseDate": "2006-06-09",
                          "videoUrl": "https://example.com/legend_warrior_ep4.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "32min",
                          "releaseDate": "2013-05-04",
                          "videoUrl": "https://example.com/legend_warrior_ep5.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "50min",
                          "releaseDate": "2004-10-05",
                          "videoUrl": "https://example.com/legend_warrior_ep6.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "29min",
                          "releaseDate": "2004-09-19",
                          "videoUrl": "https://example.com/legend_warrior_ep7.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "25min",
                          "releaseDate": "2007-07-02",
                          "videoUrl": "https://example.com/legend_warrior_ep8.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "27min",
                          "releaseDate": "2003-07-26",
                          "videoUrl": "https://example.com/legend_warrior_ep9.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 10",
                          "episodeNumber": 10,
                          "duration": "20min",
                          "releaseDate": "2002-04-25",
                          "videoUrl": "https://example.com/legend_warrior_ep10.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Infinity Legacy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/infinity_legacy.jpg",
                  "cardImage": "https://example.com/cards/infinity_legacy.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Phantom Quest",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/phantom_quest.jpg",
                  "cardImage": "https://example.com/cards/phantom_quest.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2012,
                      "episodes": [
                        {
                          "title": "Phantom Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "36min",
                          "releaseDate": "2011-10-30",
                          "videoUrl": "https://example.com/phantom_quest_ep1.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "33min",
                          "releaseDate": "2016-11-02",
                          "videoUrl": "https://example.com/phantom_quest_ep2.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "44min",
                          "releaseDate": "2001-08-20",
                          "videoUrl": "https://example.com/phantom_quest_ep3.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "43min",
                          "releaseDate": "2007-09-30",
                          "videoUrl": "https://example.com/phantom_quest_ep4.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "47min",
                          "releaseDate": "2014-10-02",
                          "videoUrl": "https://example.com/phantom_quest_ep5.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "40min",
                          "releaseDate": "2006-03-02",
                          "videoUrl": "https://example.com/phantom_quest_ep6.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "23min",
                          "releaseDate": "2014-10-14",
                          "videoUrl": "https://example.com/phantom_quest_ep7.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "31min",
                          "releaseDate": "2017-09-28",
                          "videoUrl": "https://example.com/phantom_quest_ep8.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "48min",
                          "releaseDate": "2008-06-20",
                          "videoUrl": "https://example.com/phantom_quest_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Saga",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/eternal_saga.jpg",
                  "cardImage": "https://example.com/cards/eternal_saga.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2015,
                      "episodes": [
                        {
                          "title": "Eternal Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "42min",
                          "releaseDate": "2018-02-12",
                          "videoUrl": "https://example.com/eternal_saga_ep1.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "25min",
                          "releaseDate": "2000-08-02",
                          "videoUrl": "https://example.com/eternal_saga_ep2.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "33min",
                          "releaseDate": "2001-05-09",
                          "videoUrl": "https://example.com/eternal_saga_ep3.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "36min",
                          "releaseDate": "2021-12-11",
                          "videoUrl": "https://example.com/eternal_saga_ep4.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "43min",
                          "releaseDate": "2010-12-21",
                          "videoUrl": "https://example.com/eternal_saga_ep5.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "34min",
                          "releaseDate": "2020-04-19",
                          "videoUrl": "https://example.com/eternal_saga_ep6.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "35min",
                          "releaseDate": "2002-06-19",
                          "videoUrl": "https://example.com/eternal_saga_ep7.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "25min",
                          "releaseDate": "2001-01-30",
                          "videoUrl": "https://example.com/eternal_saga_ep8.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "48min",
                          "releaseDate": "2017-01-21",
                          "videoUrl": "https://example.com/eternal_saga_ep9.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2023,
                      "episodes": [
                        {
                          "title": "Eternal Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "37min",
                          "releaseDate": "2009-12-09",
                          "videoUrl": "https://example.com/eternal_saga_ep1.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "42min",
                          "releaseDate": "2016-02-17",
                          "videoUrl": "https://example.com/eternal_saga_ep2.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "43min",
                          "releaseDate": "2020-12-14",
                          "videoUrl": "https://example.com/eternal_saga_ep3.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "46min",
                          "releaseDate": "2014-09-25",
                          "videoUrl": "https://example.com/eternal_saga_ep4.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "27min",
                          "releaseDate": "2021-04-01",
                          "videoUrl": "https://example.com/eternal_saga_ep5.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "24min",
                          "releaseDate": "2002-01-18",
                          "videoUrl": "https://example.com/eternal_saga_ep6.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "40min",
                          "releaseDate": "2004-07-17",
                          "videoUrl": "https://example.com/eternal_saga_ep7.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "22min",
                          "releaseDate": "2013-05-25",
                          "videoUrl": "https://example.com/eternal_saga_ep8.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "26min",
                          "releaseDate": "2012-08-17",
                          "videoUrl": "https://example.com/eternal_saga_ep9.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "50min",
                          "releaseDate": "2022-11-06",
                          "videoUrl": "https://example.com/eternal_saga_ep10.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "24min",
                          "releaseDate": "2001-09-30",
                          "videoUrl": "https://example.com/eternal_saga_ep11.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 12",
                          "episodeNumber": 12,
                          "duration": "29min",
                          "releaseDate": "2019-03-10",
                          "videoUrl": "https://example.com/eternal_saga_ep12.mp4"
                        },
                        {
                          "title": "Eternal Saga - Episode 13",
                          "episodeNumber": 13,
                          "duration": "27min",
                          "releaseDate": "2000-04-18",
                          "videoUrl": "https://example.com/eternal_saga_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Prophecy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/dark_prophecy.jpg",
                  "cardImage": "https://example.com/cards/dark_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2024,
                      "episodes": [
                        {
                          "title": "Dark Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "36min",
                          "releaseDate": "2018-07-07",
                          "videoUrl": "https://example.com/dark_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "25min",
                          "releaseDate": "2018-04-02",
                          "videoUrl": "https://example.com/dark_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "27min",
                          "releaseDate": "2003-05-21",
                          "videoUrl": "https://example.com/dark_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "49min",
                          "releaseDate": "2003-09-30",
                          "videoUrl": "https://example.com/dark_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "44min",
                          "releaseDate": "2013-03-16",
                          "videoUrl": "https://example.com/dark_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "25min",
                          "releaseDate": "2014-05-28",
                          "videoUrl": "https://example.com/dark_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "33min",
                          "releaseDate": "2008-04-03",
                          "videoUrl": "https://example.com/dark_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "30min",
                          "releaseDate": "2023-06-09",
                          "videoUrl": "https://example.com/dark_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "40min",
                          "releaseDate": "2007-10-13",
                          "videoUrl": "https://example.com/dark_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "34min",
                          "releaseDate": "2002-06-13",
                          "videoUrl": "https://example.com/dark_prophecy_ep10.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Comedy",
          "image": "https://example.com/images/comedy.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Mystic Legacy",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/mystic_legacy.jpg",
                  "cardImage": "https://example.com/cards/mystic_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Legacy",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/phantom_legacy.jpg",
                  "cardImage": "https://example.com/cards/phantom_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Legend Quest",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/legend_quest.jpg",
                  "cardImage": "https://example.com/cards/legend_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Legend Empire",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/legend_empire.jpg",
                  "cardImage": "https://example.com/cards/legend_empire.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Legend Empire Part 1",
                      "partNumber": 1,
                      "releaseYear": 2004,
                      "duration": "108min",
                      "videoUrl": "https://example.com/legend_empire_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Legend Prophecy",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/legend_prophecy.jpg",
                  "cardImage": "https://example.com/cards/legend_prophecy.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Legend Prophecy Part 1",
                      "partNumber": 1,
                      "releaseYear": 2014,
                      "duration": "133min",
                      "videoUrl": "https://example.com/legend_prophecy_part1.mp4"
                    }
                  ]
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Shadow Saga",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/shadow_saga.jpg",
                  "cardImage": "https://example.com/cards/shadow_saga.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2016,
                      "episodes": [
                        {
                          "title": "Shadow Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "38min",
                          "releaseDate": "2002-07-09",
                          "videoUrl": "https://example.com/shadow_saga_ep1.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "33min",
                          "releaseDate": "2023-03-08",
                          "videoUrl": "https://example.com/shadow_saga_ep2.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "29min",
                          "releaseDate": "2023-06-25",
                          "videoUrl": "https://example.com/shadow_saga_ep3.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "40min",
                          "releaseDate": "2004-03-14",
                          "videoUrl": "https://example.com/shadow_saga_ep4.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "27min",
                          "releaseDate": "2020-06-18",
                          "videoUrl": "https://example.com/shadow_saga_ep5.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "40min",
                          "releaseDate": "2023-07-05",
                          "videoUrl": "https://example.com/shadow_saga_ep6.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "28min",
                          "releaseDate": "2010-05-11",
                          "videoUrl": "https://example.com/shadow_saga_ep7.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "33min",
                          "releaseDate": "2023-03-31",
                          "videoUrl": "https://example.com/shadow_saga_ep8.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "25min",
                          "releaseDate": "2013-04-09",
                          "videoUrl": "https://example.com/shadow_saga_ep9.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "22min",
                          "releaseDate": "2022-08-19",
                          "videoUrl": "https://example.com/shadow_saga_ep10.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "21min",
                          "releaseDate": "2001-03-25",
                          "videoUrl": "https://example.com/shadow_saga_ep11.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Prophecy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/dark_prophecy.jpg",
                  "cardImage": "https://example.com/cards/dark_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Dark Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "29min",
                          "releaseDate": "2013-06-02",
                          "videoUrl": "https://example.com/dark_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "22min",
                          "releaseDate": "2018-12-17",
                          "videoUrl": "https://example.com/dark_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "24min",
                          "releaseDate": "2019-12-15",
                          "videoUrl": "https://example.com/dark_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "38min",
                          "releaseDate": "2017-06-18",
                          "videoUrl": "https://example.com/dark_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "20min",
                          "releaseDate": "2002-09-13",
                          "videoUrl": "https://example.com/dark_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "28min",
                          "releaseDate": "2008-05-10",
                          "videoUrl": "https://example.com/dark_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "27min",
                          "releaseDate": "2014-10-24",
                          "videoUrl": "https://example.com/dark_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "36min",
                          "releaseDate": "2020-05-30",
                          "videoUrl": "https://example.com/dark_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "27min",
                          "releaseDate": "2018-09-14",
                          "videoUrl": "https://example.com/dark_prophecy_ep9.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2016,
                      "episodes": [
                        {
                          "title": "Dark Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "24min",
                          "releaseDate": "2010-07-28",
                          "videoUrl": "https://example.com/dark_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "37min",
                          "releaseDate": "2003-03-28",
                          "videoUrl": "https://example.com/dark_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "20min",
                          "releaseDate": "2018-02-24",
                          "videoUrl": "https://example.com/dark_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "20min",
                          "releaseDate": "2024-07-15",
                          "videoUrl": "https://example.com/dark_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "33min",
                          "releaseDate": "2013-05-28",
                          "videoUrl": "https://example.com/dark_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "26min",
                          "releaseDate": "2000-08-22",
                          "videoUrl": "https://example.com/dark_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "43min",
                          "releaseDate": "2005-08-17",
                          "videoUrl": "https://example.com/dark_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "49min",
                          "releaseDate": "2010-03-02",
                          "videoUrl": "https://example.com/dark_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "24min",
                          "releaseDate": "2019-08-13",
                          "videoUrl": "https://example.com/dark_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "42min",
                          "releaseDate": "2013-02-21",
                          "videoUrl": "https://example.com/dark_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "36min",
                          "releaseDate": "2011-02-26",
                          "videoUrl": "https://example.com/dark_prophecy_ep11.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "24min",
                          "releaseDate": "2019-07-14",
                          "videoUrl": "https://example.com/dark_prophecy_ep12.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "28min",
                          "releaseDate": "2012-06-07",
                          "videoUrl": "https://example.com/dark_prophecy_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Saga",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/dark_saga.jpg",
                  "cardImage": "https://example.com/cards/dark_saga.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2020,
                      "episodes": [
                        {
                          "title": "Dark Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "27min",
                          "releaseDate": "2004-08-09",
                          "videoUrl": "https://example.com/dark_saga_ep1.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "35min",
                          "releaseDate": "2020-05-25",
                          "videoUrl": "https://example.com/dark_saga_ep2.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "43min",
                          "releaseDate": "2024-01-11",
                          "videoUrl": "https://example.com/dark_saga_ep3.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "32min",
                          "releaseDate": "2013-06-29",
                          "videoUrl": "https://example.com/dark_saga_ep4.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "27min",
                          "releaseDate": "2003-06-05",
                          "videoUrl": "https://example.com/dark_saga_ep5.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "39min",
                          "releaseDate": "2001-08-19",
                          "videoUrl": "https://example.com/dark_saga_ep6.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "36min",
                          "releaseDate": "2012-05-26",
                          "videoUrl": "https://example.com/dark_saga_ep7.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "26min",
                          "releaseDate": "2019-08-24",
                          "videoUrl": "https://example.com/dark_saga_ep8.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "20min",
                          "releaseDate": "2017-03-19",
                          "videoUrl": "https://example.com/dark_saga_ep9.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "37min",
                          "releaseDate": "2019-07-26",
                          "videoUrl": "https://example.com/dark_saga_ep10.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "29min",
                          "releaseDate": "2009-05-04",
                          "videoUrl": "https://example.com/dark_saga_ep11.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 12",
                          "episodeNumber": 12,
                          "duration": "22min",
                          "releaseDate": "2021-08-26",
                          "videoUrl": "https://example.com/dark_saga_ep12.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2012,
                      "episodes": [
                        {
                          "title": "Dark Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "35min",
                          "releaseDate": "2006-05-23",
                          "videoUrl": "https://example.com/dark_saga_ep1.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "45min",
                          "releaseDate": "2002-03-02",
                          "videoUrl": "https://example.com/dark_saga_ep2.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "48min",
                          "releaseDate": "2008-04-27",
                          "videoUrl": "https://example.com/dark_saga_ep3.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "35min",
                          "releaseDate": "2006-07-03",
                          "videoUrl": "https://example.com/dark_saga_ep4.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "39min",
                          "releaseDate": "2001-08-21",
                          "videoUrl": "https://example.com/dark_saga_ep5.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "30min",
                          "releaseDate": "2011-12-22",
                          "videoUrl": "https://example.com/dark_saga_ep6.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "20min",
                          "releaseDate": "2005-08-28",
                          "videoUrl": "https://example.com/dark_saga_ep7.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "26min",
                          "releaseDate": "2015-07-23",
                          "videoUrl": "https://example.com/dark_saga_ep8.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "37min",
                          "releaseDate": "2005-07-15",
                          "videoUrl": "https://example.com/dark_saga_ep9.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "28min",
                          "releaseDate": "2006-12-05",
                          "videoUrl": "https://example.com/dark_saga_ep10.mp4"
                        },
                        {
                          "title": "Dark Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "49min",
                          "releaseDate": "2007-09-20",
                          "videoUrl": "https://example.com/dark_saga_ep11.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Quest",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/legend_quest.jpg",
                  "cardImage": "https://example.com/cards/legend_quest.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2016,
                      "episodes": [
                        {
                          "title": "Legend Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "40min",
                          "releaseDate": "2003-01-07",
                          "videoUrl": "https://example.com/legend_quest_ep1.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "22min",
                          "releaseDate": "2021-08-27",
                          "videoUrl": "https://example.com/legend_quest_ep2.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "21min",
                          "releaseDate": "2000-08-05",
                          "videoUrl": "https://example.com/legend_quest_ep3.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "40min",
                          "releaseDate": "2011-05-07",
                          "videoUrl": "https://example.com/legend_quest_ep4.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "37min",
                          "releaseDate": "2019-05-10",
                          "videoUrl": "https://example.com/legend_quest_ep5.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "41min",
                          "releaseDate": "2010-06-09",
                          "videoUrl": "https://example.com/legend_quest_ep6.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "40min",
                          "releaseDate": "2010-11-13",
                          "videoUrl": "https://example.com/legend_quest_ep7.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "48min",
                          "releaseDate": "2020-03-27",
                          "videoUrl": "https://example.com/legend_quest_ep8.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "46min",
                          "releaseDate": "2024-09-13",
                          "videoUrl": "https://example.com/legend_quest_ep9.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "49min",
                          "releaseDate": "2005-06-26",
                          "videoUrl": "https://example.com/legend_quest_ep10.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Storm",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/phantom_storm.jpg",
                  "cardImage": "https://example.com/cards/phantom_storm.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Phantom Storm",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/phantom_storm.jpg",
                  "cardImage": "https://example.com/cards/phantom_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2015,
                      "episodes": [
                        {
                          "title": "Phantom Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "47min",
                          "releaseDate": "2006-02-27",
                          "videoUrl": "https://example.com/phantom_storm_ep1.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "43min",
                          "releaseDate": "2016-03-28",
                          "videoUrl": "https://example.com/phantom_storm_ep2.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "41min",
                          "releaseDate": "2022-08-20",
                          "videoUrl": "https://example.com/phantom_storm_ep3.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "50min",
                          "releaseDate": "2004-06-23",
                          "videoUrl": "https://example.com/phantom_storm_ep4.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "34min",
                          "releaseDate": "2010-11-30",
                          "videoUrl": "https://example.com/phantom_storm_ep5.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "46min",
                          "releaseDate": "2017-03-25",
                          "videoUrl": "https://example.com/phantom_storm_ep6.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "24min",
                          "releaseDate": "2008-01-28",
                          "videoUrl": "https://example.com/phantom_storm_ep7.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "47min",
                          "releaseDate": "2023-10-30",
                          "videoUrl": "https://example.com/phantom_storm_ep8.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "45min",
                          "releaseDate": "2023-06-04",
                          "videoUrl": "https://example.com/phantom_storm_ep9.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "30min",
                          "releaseDate": "2016-09-12",
                          "videoUrl": "https://example.com/phantom_storm_ep10.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Sci-Fi",
          "image": "https://example.com/images/sci-fi.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Shadow Prophecy",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/shadow_prophecy.jpg",
                  "cardImage": "https://example.com/cards/shadow_prophecy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Mystic Quest",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/mystic_quest.jpg",
                  "cardImage": "https://example.com/cards/mystic_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Infinity Storm",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/infinity_storm.jpg",
                  "cardImage": "https://example.com/cards/infinity_storm.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Infinity Storm Part 1",
                      "partNumber": 1,
                      "releaseYear": 2010,
                      "duration": "164min",
                      "videoUrl": "https://example.com/infinity_storm_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Eternal Empire",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/eternal_empire.jpg",
                  "cardImage": "https://example.com/cards/eternal_empire.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Shadow Quest",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/shadow_quest.jpg",
                  "cardImage": "https://example.com/cards/shadow_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Shadow Legacy",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/shadow_legacy.jpg",
                  "cardImage": "https://example.com/cards/shadow_legacy.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Eternal Storm",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/eternal_storm.jpg",
                  "cardImage": "https://example.com/cards/eternal_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2014,
                      "episodes": [
                        {
                          "title": "Eternal Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "45min",
                          "releaseDate": "2001-06-29",
                          "videoUrl": "https://example.com/eternal_storm_ep1.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "40min",
                          "releaseDate": "2013-12-14",
                          "videoUrl": "https://example.com/eternal_storm_ep2.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "39min",
                          "releaseDate": "2000-09-07",
                          "videoUrl": "https://example.com/eternal_storm_ep3.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "20min",
                          "releaseDate": "2005-07-18",
                          "videoUrl": "https://example.com/eternal_storm_ep4.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "28min",
                          "releaseDate": "2014-02-26",
                          "videoUrl": "https://example.com/eternal_storm_ep5.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "27min",
                          "releaseDate": "2008-12-28",
                          "videoUrl": "https://example.com/eternal_storm_ep6.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "31min",
                          "releaseDate": "2016-11-30",
                          "videoUrl": "https://example.com/eternal_storm_ep7.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "43min",
                          "releaseDate": "2024-03-06",
                          "videoUrl": "https://example.com/eternal_storm_ep8.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "24min",
                          "releaseDate": "2002-08-20",
                          "videoUrl": "https://example.com/eternal_storm_ep9.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "50min",
                          "releaseDate": "2000-05-08",
                          "videoUrl": "https://example.com/eternal_storm_ep10.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "35min",
                          "releaseDate": "2009-07-21",
                          "videoUrl": "https://example.com/eternal_storm_ep11.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 12",
                          "episodeNumber": 12,
                          "duration": "50min",
                          "releaseDate": "2009-02-17",
                          "videoUrl": "https://example.com/eternal_storm_ep12.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 13",
                          "episodeNumber": 13,
                          "duration": "46min",
                          "releaseDate": "2023-10-01",
                          "videoUrl": "https://example.com/eternal_storm_ep13.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 14",
                          "episodeNumber": 14,
                          "duration": "44min",
                          "releaseDate": "2006-01-31",
                          "videoUrl": "https://example.com/eternal_storm_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Shadow Empire",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/shadow_empire.jpg",
                  "cardImage": "https://example.com/cards/shadow_empire.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2021,
                      "episodes": [
                        {
                          "title": "Shadow Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "46min",
                          "releaseDate": "2020-10-01",
                          "videoUrl": "https://example.com/shadow_empire_ep1.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "23min",
                          "releaseDate": "2002-12-16",
                          "videoUrl": "https://example.com/shadow_empire_ep2.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "31min",
                          "releaseDate": "2011-06-29",
                          "videoUrl": "https://example.com/shadow_empire_ep3.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "29min",
                          "releaseDate": "2022-06-17",
                          "videoUrl": "https://example.com/shadow_empire_ep4.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "24min",
                          "releaseDate": "2014-07-21",
                          "videoUrl": "https://example.com/shadow_empire_ep5.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "28min",
                          "releaseDate": "2005-05-09",
                          "videoUrl": "https://example.com/shadow_empire_ep6.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "30min",
                          "releaseDate": "2003-04-17",
                          "videoUrl": "https://example.com/shadow_empire_ep7.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "35min",
                          "releaseDate": "2024-12-25",
                          "videoUrl": "https://example.com/shadow_empire_ep8.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "49min",
                          "releaseDate": "2020-11-12",
                          "videoUrl": "https://example.com/shadow_empire_ep9.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "41min",
                          "releaseDate": "2006-06-06",
                          "videoUrl": "https://example.com/shadow_empire_ep10.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "29min",
                          "releaseDate": "2020-03-01",
                          "videoUrl": "https://example.com/shadow_empire_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2020,
                      "episodes": [
                        {
                          "title": "Shadow Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "41min",
                          "releaseDate": "2007-10-22",
                          "videoUrl": "https://example.com/shadow_empire_ep1.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "42min",
                          "releaseDate": "2012-02-27",
                          "videoUrl": "https://example.com/shadow_empire_ep2.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "29min",
                          "releaseDate": "2014-01-23",
                          "videoUrl": "https://example.com/shadow_empire_ep3.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "33min",
                          "releaseDate": "2006-11-16",
                          "videoUrl": "https://example.com/shadow_empire_ep4.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "24min",
                          "releaseDate": "2003-11-12",
                          "videoUrl": "https://example.com/shadow_empire_ep5.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "36min",
                          "releaseDate": "2019-01-01",
                          "videoUrl": "https://example.com/shadow_empire_ep6.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "39min",
                          "releaseDate": "2016-07-13",
                          "videoUrl": "https://example.com/shadow_empire_ep7.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "46min",
                          "releaseDate": "2022-02-08",
                          "videoUrl": "https://example.com/shadow_empire_ep8.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "37min",
                          "releaseDate": "2022-01-17",
                          "videoUrl": "https://example.com/shadow_empire_ep9.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "29min",
                          "releaseDate": "2017-12-07",
                          "videoUrl": "https://example.com/shadow_empire_ep10.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "44min",
                          "releaseDate": "2011-10-15",
                          "videoUrl": "https://example.com/shadow_empire_ep11.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 12",
                          "episodeNumber": 12,
                          "duration": "27min",
                          "releaseDate": "2020-10-31",
                          "videoUrl": "https://example.com/shadow_empire_ep12.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 13",
                          "episodeNumber": 13,
                          "duration": "39min",
                          "releaseDate": "2015-04-16",
                          "videoUrl": "https://example.com/shadow_empire_ep13.mp4"
                        },
                        {
                          "title": "Shadow Empire - Episode 14",
                          "episodeNumber": 14,
                          "duration": "46min",
                          "releaseDate": "2019-03-04",
                          "videoUrl": "https://example.com/shadow_empire_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Shadow Storm",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/shadow_storm.jpg",
                  "cardImage": "https://example.com/cards/shadow_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2020,
                      "episodes": [
                        {
                          "title": "Shadow Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "30min",
                          "releaseDate": "2019-10-10",
                          "videoUrl": "https://example.com/shadow_storm_ep1.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "49min",
                          "releaseDate": "2011-04-25",
                          "videoUrl": "https://example.com/shadow_storm_ep2.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "39min",
                          "releaseDate": "2019-06-06",
                          "videoUrl": "https://example.com/shadow_storm_ep3.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "40min",
                          "releaseDate": "2022-02-17",
                          "videoUrl": "https://example.com/shadow_storm_ep4.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "32min",
                          "releaseDate": "2019-11-24",
                          "videoUrl": "https://example.com/shadow_storm_ep5.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "45min",
                          "releaseDate": "2005-07-19",
                          "videoUrl": "https://example.com/shadow_storm_ep6.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "38min",
                          "releaseDate": "2005-06-19",
                          "videoUrl": "https://example.com/shadow_storm_ep7.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "33min",
                          "releaseDate": "2024-08-07",
                          "videoUrl": "https://example.com/shadow_storm_ep8.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "23min",
                          "releaseDate": "2006-09-06",
                          "videoUrl": "https://example.com/shadow_storm_ep9.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "30min",
                          "releaseDate": "2008-10-14",
                          "videoUrl": "https://example.com/shadow_storm_ep10.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "26min",
                          "releaseDate": "2021-03-23",
                          "videoUrl": "https://example.com/shadow_storm_ep11.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 12",
                          "episodeNumber": 12,
                          "duration": "28min",
                          "releaseDate": "2018-06-25",
                          "videoUrl": "https://example.com/shadow_storm_ep12.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 13",
                          "episodeNumber": 13,
                          "duration": "27min",
                          "releaseDate": "2019-09-15",
                          "videoUrl": "https://example.com/shadow_storm_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Shadow Prophecy",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/shadow_prophecy.jpg",
                  "cardImage": "https://example.com/cards/shadow_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2011,
                      "episodes": [
                        {
                          "title": "Shadow Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "26min",
                          "releaseDate": "2004-06-26",
                          "videoUrl": "https://example.com/shadow_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "48min",
                          "releaseDate": "2015-08-16",
                          "videoUrl": "https://example.com/shadow_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "24min",
                          "releaseDate": "2006-03-12",
                          "videoUrl": "https://example.com/shadow_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "32min",
                          "releaseDate": "2021-07-06",
                          "videoUrl": "https://example.com/shadow_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "33min",
                          "releaseDate": "2005-01-25",
                          "videoUrl": "https://example.com/shadow_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "33min",
                          "releaseDate": "2000-04-13",
                          "videoUrl": "https://example.com/shadow_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "38min",
                          "releaseDate": "2017-09-29",
                          "videoUrl": "https://example.com/shadow_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "29min",
                          "releaseDate": "2013-06-18",
                          "videoUrl": "https://example.com/shadow_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "48min",
                          "releaseDate": "2010-06-13",
                          "videoUrl": "https://example.com/shadow_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "27min",
                          "releaseDate": "2018-03-28",
                          "videoUrl": "https://example.com/shadow_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "46min",
                          "releaseDate": "2005-10-17",
                          "videoUrl": "https://example.com/shadow_prophecy_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2013,
                      "episodes": [
                        {
                          "title": "Shadow Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "38min",
                          "releaseDate": "2013-05-16",
                          "videoUrl": "https://example.com/shadow_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "39min",
                          "releaseDate": "2021-11-12",
                          "videoUrl": "https://example.com/shadow_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "32min",
                          "releaseDate": "2015-12-12",
                          "videoUrl": "https://example.com/shadow_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "50min",
                          "releaseDate": "2019-04-13",
                          "videoUrl": "https://example.com/shadow_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "27min",
                          "releaseDate": "2023-08-17",
                          "videoUrl": "https://example.com/shadow_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "31min",
                          "releaseDate": "2014-01-03",
                          "videoUrl": "https://example.com/shadow_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "48min",
                          "releaseDate": "2005-12-18",
                          "videoUrl": "https://example.com/shadow_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "20min",
                          "releaseDate": "2012-04-17",
                          "videoUrl": "https://example.com/shadow_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "30min",
                          "releaseDate": "2018-02-26",
                          "videoUrl": "https://example.com/shadow_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "49min",
                          "releaseDate": "2010-04-18",
                          "videoUrl": "https://example.com/shadow_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "40min",
                          "releaseDate": "2022-03-11",
                          "videoUrl": "https://example.com/shadow_prophecy_ep11.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "31min",
                          "releaseDate": "2001-02-07",
                          "videoUrl": "https://example.com/shadow_prophecy_ep12.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "38min",
                          "releaseDate": "2000-08-05",
                          "videoUrl": "https://example.com/shadow_prophecy_ep13.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 14",
                          "episodeNumber": 14,
                          "duration": "20min",
                          "releaseDate": "2009-04-15",
                          "videoUrl": "https://example.com/shadow_prophecy_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Quest",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/dark_quest.jpg",
                  "cardImage": "https://example.com/cards/dark_quest.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2017,
                      "episodes": [
                        {
                          "title": "Dark Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "45min",
                          "releaseDate": "2016-02-20",
                          "videoUrl": "https://example.com/dark_quest_ep1.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "29min",
                          "releaseDate": "2020-11-01",
                          "videoUrl": "https://example.com/dark_quest_ep2.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "35min",
                          "releaseDate": "2015-07-21",
                          "videoUrl": "https://example.com/dark_quest_ep3.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "48min",
                          "releaseDate": "2005-05-02",
                          "videoUrl": "https://example.com/dark_quest_ep4.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "26min",
                          "releaseDate": "2010-08-18",
                          "videoUrl": "https://example.com/dark_quest_ep5.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "45min",
                          "releaseDate": "2013-09-11",
                          "videoUrl": "https://example.com/dark_quest_ep6.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "24min",
                          "releaseDate": "2021-03-02",
                          "videoUrl": "https://example.com/dark_quest_ep7.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "50min",
                          "releaseDate": "2011-08-07",
                          "videoUrl": "https://example.com/dark_quest_ep8.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "28min",
                          "releaseDate": "2019-11-11",
                          "videoUrl": "https://example.com/dark_quest_ep9.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "27min",
                          "releaseDate": "2000-06-17",
                          "videoUrl": "https://example.com/dark_quest_ep10.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 11",
                          "episodeNumber": 11,
                          "duration": "40min",
                          "releaseDate": "2008-03-04",
                          "videoUrl": "https://example.com/dark_quest_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Dark Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "20min",
                          "releaseDate": "2016-01-05",
                          "videoUrl": "https://example.com/dark_quest_ep1.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "50min",
                          "releaseDate": "2008-06-08",
                          "videoUrl": "https://example.com/dark_quest_ep2.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "23min",
                          "releaseDate": "2012-04-20",
                          "videoUrl": "https://example.com/dark_quest_ep3.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "26min",
                          "releaseDate": "2017-11-05",
                          "videoUrl": "https://example.com/dark_quest_ep4.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "23min",
                          "releaseDate": "2017-01-21",
                          "videoUrl": "https://example.com/dark_quest_ep5.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "27min",
                          "releaseDate": "2023-10-19",
                          "videoUrl": "https://example.com/dark_quest_ep6.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "40min",
                          "releaseDate": "2003-11-02",
                          "videoUrl": "https://example.com/dark_quest_ep7.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "44min",
                          "releaseDate": "2018-06-04",
                          "videoUrl": "https://example.com/dark_quest_ep8.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "24min",
                          "releaseDate": "2008-01-04",
                          "videoUrl": "https://example.com/dark_quest_ep9.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Japan",
      "image": "https://example.com/images/japan.jpg",
      "genres": [
        {
          "name": "Action",
          "image": "https://example.com/images/action.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Eternal Quest",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/eternal_quest.jpg",
                  "cardImage": "https://example.com/cards/eternal_quest.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Legend Storm",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/legend_storm.jpg",
                  "cardImage": "https://example.com/cards/legend_storm.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Shadow Quest",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/shadow_quest.jpg",
                  "cardImage": "https://example.com/cards/shadow_quest.jpg",
                  "isCarousel": true,
                  "movieParts": [
                    {
                      "title": "Shadow Quest Part 1",
                      "partNumber": 1,
                      "releaseYear": 2005,
                      "duration": "85min",
                      "videoUrl": "https://example.com/shadow_quest_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Legend Quest",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/legend_quest.jpg",
                  "cardImage": "https://example.com/cards/legend_quest.jpg",
                  "isCarousel": true,
                  "movieParts": [
                    {
                      "title": "Legend Quest Part 1",
                      "partNumber": 1,
                      "releaseYear": 2022,
                      "duration": "151min",
                      "videoUrl": "https://example.com/legend_quest_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Phantom Empire",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/phantom_empire.jpg",
                  "cardImage": "https://example.com/cards/phantom_empire.jpg",
                  "isCarousel": true,
                  "movieParts": []
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Phantom Warrior",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/phantom_warrior.jpg",
                  "cardImage": "https://example.com/cards/phantom_warrior.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2007,
                      "episodes": [
                        {
                          "title": "Phantom Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "28min",
                          "releaseDate": "2012-03-30",
                          "videoUrl": "https://example.com/phantom_warrior_ep1.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "23min",
                          "releaseDate": "2015-08-27",
                          "videoUrl": "https://example.com/phantom_warrior_ep2.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "22min",
                          "releaseDate": "2011-01-04",
                          "videoUrl": "https://example.com/phantom_warrior_ep3.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "29min",
                          "releaseDate": "2022-01-22",
                          "videoUrl": "https://example.com/phantom_warrior_ep4.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "42min",
                          "releaseDate": "2003-05-21",
                          "videoUrl": "https://example.com/phantom_warrior_ep5.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "44min",
                          "releaseDate": "2009-05-08",
                          "videoUrl": "https://example.com/phantom_warrior_ep6.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "31min",
                          "releaseDate": "2000-06-16",
                          "videoUrl": "https://example.com/phantom_warrior_ep7.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "39min",
                          "releaseDate": "2001-05-11",
                          "videoUrl": "https://example.com/phantom_warrior_ep8.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "42min",
                          "releaseDate": "2003-12-24",
                          "videoUrl": "https://example.com/phantom_warrior_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Infinity Saga",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/infinity_saga.jpg",
                  "cardImage": "https://example.com/cards/infinity_saga.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2013,
                      "episodes": [
                        {
                          "title": "Infinity Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "39min",
                          "releaseDate": "2003-10-10",
                          "videoUrl": "https://example.com/infinity_saga_ep1.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "47min",
                          "releaseDate": "2006-01-01",
                          "videoUrl": "https://example.com/infinity_saga_ep2.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "23min",
                          "releaseDate": "2016-01-22",
                          "videoUrl": "https://example.com/infinity_saga_ep3.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "41min",
                          "releaseDate": "2000-03-26",
                          "videoUrl": "https://example.com/infinity_saga_ep4.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "33min",
                          "releaseDate": "2012-03-02",
                          "videoUrl": "https://example.com/infinity_saga_ep5.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "42min",
                          "releaseDate": "2006-11-25",
                          "videoUrl": "https://example.com/infinity_saga_ep6.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "30min",
                          "releaseDate": "2020-07-24",
                          "videoUrl": "https://example.com/infinity_saga_ep7.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "20min",
                          "releaseDate": "2011-02-03",
                          "videoUrl": "https://example.com/infinity_saga_ep8.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "42min",
                          "releaseDate": "2006-08-24",
                          "videoUrl": "https://example.com/infinity_saga_ep9.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "36min",
                          "releaseDate": "2005-09-24",
                          "videoUrl": "https://example.com/infinity_saga_ep10.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "20min",
                          "releaseDate": "2008-03-13",
                          "videoUrl": "https://example.com/infinity_saga_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2014,
                      "episodes": [
                        {
                          "title": "Infinity Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "23min",
                          "releaseDate": "2016-03-24",
                          "videoUrl": "https://example.com/infinity_saga_ep1.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "33min",
                          "releaseDate": "2000-09-24",
                          "videoUrl": "https://example.com/infinity_saga_ep2.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "49min",
                          "releaseDate": "2014-09-24",
                          "videoUrl": "https://example.com/infinity_saga_ep3.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "45min",
                          "releaseDate": "2017-11-13",
                          "videoUrl": "https://example.com/infinity_saga_ep4.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "24min",
                          "releaseDate": "2016-08-03",
                          "videoUrl": "https://example.com/infinity_saga_ep5.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "20min",
                          "releaseDate": "2012-05-10",
                          "videoUrl": "https://example.com/infinity_saga_ep6.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "20min",
                          "releaseDate": "2018-05-20",
                          "videoUrl": "https://example.com/infinity_saga_ep7.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "22min",
                          "releaseDate": "2003-06-22",
                          "videoUrl": "https://example.com/infinity_saga_ep8.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "24min",
                          "releaseDate": "2024-01-04",
                          "videoUrl": "https://example.com/infinity_saga_ep9.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "27min",
                          "releaseDate": "2022-10-15",
                          "videoUrl": "https://example.com/infinity_saga_ep10.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "38min",
                          "releaseDate": "2015-12-17",
                          "videoUrl": "https://example.com/infinity_saga_ep11.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 12",
                          "episodeNumber": 12,
                          "duration": "40min",
                          "releaseDate": "2005-04-23",
                          "videoUrl": "https://example.com/infinity_saga_ep12.mp4"
                        },
                        {
                          "title": "Infinity Saga - Episode 13",
                          "episodeNumber": 13,
                          "duration": "45min",
                          "releaseDate": "2019-01-18",
                          "videoUrl": "https://example.com/infinity_saga_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Infinity Warrior",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/infinity_warrior.jpg",
                  "cardImage": "https://example.com/cards/infinity_warrior.jpg",
                  "isCarousel": true,
                  "seasons": []
                },
                {
                  "title": "Dark Storm",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/dark_storm.jpg",
                  "cardImage": "https://example.com/cards/dark_storm.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2020,
                      "episodes": [
                        {
                          "title": "Dark Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "43min",
                          "releaseDate": "2009-01-25",
                          "videoUrl": "https://example.com/dark_storm_ep1.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "44min",
                          "releaseDate": "2010-03-31",
                          "videoUrl": "https://example.com/dark_storm_ep2.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "34min",
                          "releaseDate": "2001-10-04",
                          "videoUrl": "https://example.com/dark_storm_ep3.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "37min",
                          "releaseDate": "2017-10-09",
                          "videoUrl": "https://example.com/dark_storm_ep4.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "23min",
                          "releaseDate": "2016-11-12",
                          "videoUrl": "https://example.com/dark_storm_ep5.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "37min",
                          "releaseDate": "2022-02-27",
                          "videoUrl": "https://example.com/dark_storm_ep6.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "45min",
                          "releaseDate": "2005-03-22",
                          "videoUrl": "https://example.com/dark_storm_ep7.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "40min",
                          "releaseDate": "2014-10-02",
                          "videoUrl": "https://example.com/dark_storm_ep8.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "20min",
                          "releaseDate": "2006-12-13",
                          "videoUrl": "https://example.com/dark_storm_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Legacy",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/phantom_legacy.jpg",
                  "cardImage": "https://example.com/cards/phantom_legacy.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2011,
                      "episodes": [
                        {
                          "title": "Phantom Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "34min",
                          "releaseDate": "2003-08-09",
                          "videoUrl": "https://example.com/phantom_legacy_ep1.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "32min",
                          "releaseDate": "2010-10-14",
                          "videoUrl": "https://example.com/phantom_legacy_ep2.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "39min",
                          "releaseDate": "2021-09-17",
                          "videoUrl": "https://example.com/phantom_legacy_ep3.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "26min",
                          "releaseDate": "2001-09-30",
                          "videoUrl": "https://example.com/phantom_legacy_ep4.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "26min",
                          "releaseDate": "2014-12-17",
                          "videoUrl": "https://example.com/phantom_legacy_ep5.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "33min",
                          "releaseDate": "2000-06-10",
                          "videoUrl": "https://example.com/phantom_legacy_ep6.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "35min",
                          "releaseDate": "2015-03-07",
                          "videoUrl": "https://example.com/phantom_legacy_ep7.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "37min",
                          "releaseDate": "2009-07-20",
                          "videoUrl": "https://example.com/phantom_legacy_ep8.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "22min",
                          "releaseDate": "2021-08-31",
                          "videoUrl": "https://example.com/phantom_legacy_ep9.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "39min",
                          "releaseDate": "2020-06-06",
                          "videoUrl": "https://example.com/phantom_legacy_ep10.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "47min",
                          "releaseDate": "2021-01-03",
                          "videoUrl": "https://example.com/phantom_legacy_ep11.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "36min",
                          "releaseDate": "2011-04-13",
                          "videoUrl": "https://example.com/phantom_legacy_ep12.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "34min",
                          "releaseDate": "2012-10-31",
                          "videoUrl": "https://example.com/phantom_legacy_ep13.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 14",
                          "episodeNumber": 14,
                          "duration": "42min",
                          "releaseDate": "2024-10-09",
                          "videoUrl": "https://example.com/phantom_legacy_ep14.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2009,
                      "episodes": [
                        {
                          "title": "Phantom Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "37min",
                          "releaseDate": "2007-12-08",
                          "videoUrl": "https://example.com/phantom_legacy_ep1.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "49min",
                          "releaseDate": "2002-12-15",
                          "videoUrl": "https://example.com/phantom_legacy_ep2.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "31min",
                          "releaseDate": "2015-09-09",
                          "videoUrl": "https://example.com/phantom_legacy_ep3.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "46min",
                          "releaseDate": "2012-07-24",
                          "videoUrl": "https://example.com/phantom_legacy_ep4.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "43min",
                          "releaseDate": "2001-06-02",
                          "videoUrl": "https://example.com/phantom_legacy_ep5.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "28min",
                          "releaseDate": "2010-10-11",
                          "videoUrl": "https://example.com/phantom_legacy_ep6.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "32min",
                          "releaseDate": "2024-09-24",
                          "videoUrl": "https://example.com/phantom_legacy_ep7.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "49min",
                          "releaseDate": "2011-09-15",
                          "videoUrl": "https://example.com/phantom_legacy_ep8.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "33min",
                          "releaseDate": "2008-05-03",
                          "videoUrl": "https://example.com/phantom_legacy_ep9.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "36min",
                          "releaseDate": "2018-03-07",
                          "videoUrl": "https://example.com/phantom_legacy_ep10.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "23min",
                          "releaseDate": "2000-11-16",
                          "videoUrl": "https://example.com/phantom_legacy_ep11.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "21min",
                          "releaseDate": "2017-07-31",
                          "videoUrl": "https://example.com/phantom_legacy_ep12.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Drama",
          "image": "https://example.com/images/drama.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Phantom Warrior",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/phantom_warrior.jpg",
                  "cardImage": "https://example.com/cards/phantom_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Eternal Quest",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/eternal_quest.jpg",
                  "cardImage": "https://example.com/cards/eternal_quest.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Eternal Quest Part 1",
                      "partNumber": 1,
                      "releaseYear": 2015,
                      "duration": "80min",
                      "videoUrl": "https://example.com/eternal_quest_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Infinity Storm",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/infinity_storm.jpg",
                  "cardImage": "https://example.com/cards/infinity_storm.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Infinity Storm Part 1",
                      "partNumber": 1,
                      "releaseYear": 2007,
                      "duration": "113min",
                      "videoUrl": "https://example.com/infinity_storm_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Mystic Quest",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/mystic_quest.jpg",
                  "cardImage": "https://example.com/cards/mystic_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Empire",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/phantom_empire.jpg",
                  "cardImage": "https://example.com/cards/phantom_empire.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Phantom Empire Part 1",
                      "partNumber": 1,
                      "releaseYear": 2019,
                      "duration": "89min",
                      "videoUrl": "https://example.com/phantom_empire_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Dark Warrior",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/dark_warrior.jpg",
                  "cardImage": "https://example.com/cards/dark_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Dark Warrior Part 1",
                      "partNumber": 1,
                      "releaseYear": 2002,
                      "duration": "86min",
                      "videoUrl": "https://example.com/dark_warrior_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Phantom Warrior",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/phantom_warrior.jpg",
                  "cardImage": "https://example.com/cards/phantom_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Phantom Warrior Part 1",
                      "partNumber": 1,
                      "releaseYear": 2000,
                      "duration": "88min",
                      "videoUrl": "https://example.com/phantom_warrior_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Infinity Empire",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/infinity_empire.jpg",
                  "cardImage": "https://example.com/cards/infinity_empire.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Legend Prophecy",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/legend_prophecy.jpg",
                  "cardImage": "https://example.com/cards/legend_prophecy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Empire",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/phantom_empire.jpg",
                  "cardImage": "https://example.com/cards/phantom_empire.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Phantom Empire Part 1",
                      "partNumber": 1,
                      "releaseYear": 2015,
                      "duration": "141min",
                      "videoUrl": "https://example.com/phantom_empire_part1.mp4"
                    }
                  ]
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Legend Empire",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/legend_empire.jpg",
                  "cardImage": "https://example.com/cards/legend_empire.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2006,
                      "episodes": [
                        {
                          "title": "Legend Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "29min",
                          "releaseDate": "2020-10-18",
                          "videoUrl": "https://example.com/legend_empire_ep1.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "39min",
                          "releaseDate": "2018-10-30",
                          "videoUrl": "https://example.com/legend_empire_ep2.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "29min",
                          "releaseDate": "2016-02-22",
                          "videoUrl": "https://example.com/legend_empire_ep3.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "30min",
                          "releaseDate": "2013-04-05",
                          "videoUrl": "https://example.com/legend_empire_ep4.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "41min",
                          "releaseDate": "2010-03-01",
                          "videoUrl": "https://example.com/legend_empire_ep5.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "29min",
                          "releaseDate": "2005-12-10",
                          "videoUrl": "https://example.com/legend_empire_ep6.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "39min",
                          "releaseDate": "2012-04-07",
                          "videoUrl": "https://example.com/legend_empire_ep7.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "32min",
                          "releaseDate": "2008-05-20",
                          "videoUrl": "https://example.com/legend_empire_ep8.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "41min",
                          "releaseDate": "2021-07-29",
                          "videoUrl": "https://example.com/legend_empire_ep9.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "34min",
                          "releaseDate": "2017-07-20",
                          "videoUrl": "https://example.com/legend_empire_ep10.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "20min",
                          "releaseDate": "2021-12-14",
                          "videoUrl": "https://example.com/legend_empire_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2010,
                      "episodes": [
                        {
                          "title": "Legend Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "33min",
                          "releaseDate": "2020-07-27",
                          "videoUrl": "https://example.com/legend_empire_ep1.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "39min",
                          "releaseDate": "2000-06-12",
                          "videoUrl": "https://example.com/legend_empire_ep2.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "33min",
                          "releaseDate": "2013-03-18",
                          "videoUrl": "https://example.com/legend_empire_ep3.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "47min",
                          "releaseDate": "2014-11-27",
                          "videoUrl": "https://example.com/legend_empire_ep4.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "36min",
                          "releaseDate": "2003-11-08",
                          "videoUrl": "https://example.com/legend_empire_ep5.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "43min",
                          "releaseDate": "2006-09-07",
                          "videoUrl": "https://example.com/legend_empire_ep6.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "49min",
                          "releaseDate": "2016-09-23",
                          "videoUrl": "https://example.com/legend_empire_ep7.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "42min",
                          "releaseDate": "2019-11-22",
                          "videoUrl": "https://example.com/legend_empire_ep8.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "44min",
                          "releaseDate": "2019-10-01",
                          "videoUrl": "https://example.com/legend_empire_ep9.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "35min",
                          "releaseDate": "2018-06-19",
                          "videoUrl": "https://example.com/legend_empire_ep10.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "45min",
                          "releaseDate": "2021-07-11",
                          "videoUrl": "https://example.com/legend_empire_ep11.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 12",
                          "episodeNumber": 12,
                          "duration": "44min",
                          "releaseDate": "2006-11-23",
                          "videoUrl": "https://example.com/legend_empire_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Legacy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/phantom_legacy.jpg",
                  "cardImage": "https://example.com/cards/phantom_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2020,
                      "episodes": [
                        {
                          "title": "Phantom Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "23min",
                          "releaseDate": "2002-09-13",
                          "videoUrl": "https://example.com/phantom_legacy_ep1.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "39min",
                          "releaseDate": "2011-06-29",
                          "videoUrl": "https://example.com/phantom_legacy_ep2.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "21min",
                          "releaseDate": "2012-05-16",
                          "videoUrl": "https://example.com/phantom_legacy_ep3.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "32min",
                          "releaseDate": "2004-01-27",
                          "videoUrl": "https://example.com/phantom_legacy_ep4.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "48min",
                          "releaseDate": "2021-05-26",
                          "videoUrl": "https://example.com/phantom_legacy_ep5.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "20min",
                          "releaseDate": "2019-12-10",
                          "videoUrl": "https://example.com/phantom_legacy_ep6.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "36min",
                          "releaseDate": "2000-11-10",
                          "videoUrl": "https://example.com/phantom_legacy_ep7.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "33min",
                          "releaseDate": "2002-01-02",
                          "videoUrl": "https://example.com/phantom_legacy_ep8.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "44min",
                          "releaseDate": "2008-06-22",
                          "videoUrl": "https://example.com/phantom_legacy_ep9.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "36min",
                          "releaseDate": "2023-12-01",
                          "videoUrl": "https://example.com/phantom_legacy_ep10.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "33min",
                          "releaseDate": "2008-07-09",
                          "videoUrl": "https://example.com/phantom_legacy_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Phantom Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "33min",
                          "releaseDate": "2017-07-18",
                          "videoUrl": "https://example.com/phantom_legacy_ep1.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "47min",
                          "releaseDate": "2000-04-04",
                          "videoUrl": "https://example.com/phantom_legacy_ep2.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "49min",
                          "releaseDate": "2005-11-02",
                          "videoUrl": "https://example.com/phantom_legacy_ep3.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "47min",
                          "releaseDate": "2008-01-17",
                          "videoUrl": "https://example.com/phantom_legacy_ep4.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "23min",
                          "releaseDate": "2003-04-18",
                          "videoUrl": "https://example.com/phantom_legacy_ep5.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "29min",
                          "releaseDate": "2004-12-14",
                          "videoUrl": "https://example.com/phantom_legacy_ep6.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "37min",
                          "releaseDate": "2021-05-01",
                          "videoUrl": "https://example.com/phantom_legacy_ep7.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "39min",
                          "releaseDate": "2024-01-17",
                          "videoUrl": "https://example.com/phantom_legacy_ep8.mp4"
                        },
                        {
                          "title": "Phantom Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "30min",
                          "releaseDate": "2020-09-18",
                          "videoUrl": "https://example.com/phantom_legacy_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Prophecy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/eternal_prophecy.jpg",
                  "cardImage": "https://example.com/cards/eternal_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Shadow Storm",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/shadow_storm.jpg",
                  "cardImage": "https://example.com/cards/shadow_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2008,
                      "episodes": [
                        {
                          "title": "Shadow Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "41min",
                          "releaseDate": "2005-09-18",
                          "videoUrl": "https://example.com/shadow_storm_ep1.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "46min",
                          "releaseDate": "2018-07-03",
                          "videoUrl": "https://example.com/shadow_storm_ep2.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "39min",
                          "releaseDate": "2019-12-14",
                          "videoUrl": "https://example.com/shadow_storm_ep3.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "37min",
                          "releaseDate": "2008-05-20",
                          "videoUrl": "https://example.com/shadow_storm_ep4.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "30min",
                          "releaseDate": "2020-11-01",
                          "videoUrl": "https://example.com/shadow_storm_ep5.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "50min",
                          "releaseDate": "2010-01-24",
                          "videoUrl": "https://example.com/shadow_storm_ep6.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "30min",
                          "releaseDate": "2011-12-14",
                          "videoUrl": "https://example.com/shadow_storm_ep7.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "43min",
                          "releaseDate": "2003-09-02",
                          "videoUrl": "https://example.com/shadow_storm_ep8.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "20min",
                          "releaseDate": "2010-08-30",
                          "videoUrl": "https://example.com/shadow_storm_ep9.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "22min",
                          "releaseDate": "2024-03-03",
                          "videoUrl": "https://example.com/shadow_storm_ep10.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "24min",
                          "releaseDate": "2009-07-02",
                          "videoUrl": "https://example.com/shadow_storm_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2006,
                      "episodes": [
                        {
                          "title": "Shadow Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "26min",
                          "releaseDate": "2020-02-12",
                          "videoUrl": "https://example.com/shadow_storm_ep1.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "22min",
                          "releaseDate": "2012-12-28",
                          "videoUrl": "https://example.com/shadow_storm_ep2.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "46min",
                          "releaseDate": "2021-01-18",
                          "videoUrl": "https://example.com/shadow_storm_ep3.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "25min",
                          "releaseDate": "2020-01-23",
                          "videoUrl": "https://example.com/shadow_storm_ep4.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "30min",
                          "releaseDate": "2016-05-24",
                          "videoUrl": "https://example.com/shadow_storm_ep5.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "36min",
                          "releaseDate": "2009-02-01",
                          "videoUrl": "https://example.com/shadow_storm_ep6.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "49min",
                          "releaseDate": "2021-07-24",
                          "videoUrl": "https://example.com/shadow_storm_ep7.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "26min",
                          "releaseDate": "2008-11-23",
                          "videoUrl": "https://example.com/shadow_storm_ep8.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "47min",
                          "releaseDate": "2019-09-06",
                          "videoUrl": "https://example.com/shadow_storm_ep9.mp4"
                        },
                        {
                          "title": "Shadow Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "25min",
                          "releaseDate": "2010-04-20",
                          "videoUrl": "https://example.com/shadow_storm_ep10.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Storm",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/dark_storm.jpg",
                  "cardImage": "https://example.com/cards/dark_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2007,
                      "episodes": [
                        {
                          "title": "Dark Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "46min",
                          "releaseDate": "2003-05-10",
                          "videoUrl": "https://example.com/dark_storm_ep1.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "21min",
                          "releaseDate": "2015-09-15",
                          "videoUrl": "https://example.com/dark_storm_ep2.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "40min",
                          "releaseDate": "2015-02-17",
                          "videoUrl": "https://example.com/dark_storm_ep3.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "28min",
                          "releaseDate": "2020-05-06",
                          "videoUrl": "https://example.com/dark_storm_ep4.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "49min",
                          "releaseDate": "2023-01-26",
                          "videoUrl": "https://example.com/dark_storm_ep5.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "48min",
                          "releaseDate": "2009-03-26",
                          "videoUrl": "https://example.com/dark_storm_ep6.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "37min",
                          "releaseDate": "2023-05-01",
                          "videoUrl": "https://example.com/dark_storm_ep7.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "39min",
                          "releaseDate": "2001-05-04",
                          "videoUrl": "https://example.com/dark_storm_ep8.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "29min",
                          "releaseDate": "2023-11-03",
                          "videoUrl": "https://example.com/dark_storm_ep9.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "45min",
                          "releaseDate": "2017-11-19",
                          "videoUrl": "https://example.com/dark_storm_ep10.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2022,
                      "episodes": [
                        {
                          "title": "Dark Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "20min",
                          "releaseDate": "2015-02-20",
                          "videoUrl": "https://example.com/dark_storm_ep1.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "40min",
                          "releaseDate": "2011-05-22",
                          "videoUrl": "https://example.com/dark_storm_ep2.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "21min",
                          "releaseDate": "2003-10-10",
                          "videoUrl": "https://example.com/dark_storm_ep3.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "29min",
                          "releaseDate": "2011-01-19",
                          "videoUrl": "https://example.com/dark_storm_ep4.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "30min",
                          "releaseDate": "2003-12-17",
                          "videoUrl": "https://example.com/dark_storm_ep5.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "45min",
                          "releaseDate": "2003-11-14",
                          "videoUrl": "https://example.com/dark_storm_ep6.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "39min",
                          "releaseDate": "2007-11-13",
                          "videoUrl": "https://example.com/dark_storm_ep7.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "33min",
                          "releaseDate": "2020-06-20",
                          "videoUrl": "https://example.com/dark_storm_ep8.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "40min",
                          "releaseDate": "2016-06-02",
                          "videoUrl": "https://example.com/dark_storm_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Saga",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/legend_saga.jpg",
                  "cardImage": "https://example.com/cards/legend_saga.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2008,
                      "episodes": [
                        {
                          "title": "Legend Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "21min",
                          "releaseDate": "2018-02-04",
                          "videoUrl": "https://example.com/legend_saga_ep1.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "49min",
                          "releaseDate": "2007-05-27",
                          "videoUrl": "https://example.com/legend_saga_ep2.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "40min",
                          "releaseDate": "2017-02-25",
                          "videoUrl": "https://example.com/legend_saga_ep3.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "22min",
                          "releaseDate": "2018-09-14",
                          "videoUrl": "https://example.com/legend_saga_ep4.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "25min",
                          "releaseDate": "2022-12-02",
                          "videoUrl": "https://example.com/legend_saga_ep5.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "31min",
                          "releaseDate": "2018-02-28",
                          "videoUrl": "https://example.com/legend_saga_ep6.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "27min",
                          "releaseDate": "2004-05-20",
                          "videoUrl": "https://example.com/legend_saga_ep7.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "39min",
                          "releaseDate": "2016-05-24",
                          "videoUrl": "https://example.com/legend_saga_ep8.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "46min",
                          "releaseDate": "2016-04-12",
                          "videoUrl": "https://example.com/legend_saga_ep9.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "49min",
                          "releaseDate": "2010-08-28",
                          "videoUrl": "https://example.com/legend_saga_ep10.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Comedy",
          "image": "https://example.com/images/comedy.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Legend Saga",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/legend_saga.jpg",
                  "cardImage": "https://example.com/cards/legend_saga.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Infinity Quest",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/infinity_quest.jpg",
                  "cardImage": "https://example.com/cards/infinity_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Dark Prophecy",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/dark_prophecy.jpg",
                  "cardImage": "https://example.com/cards/dark_prophecy.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Dark Prophecy Part 1",
                      "partNumber": 1,
                      "releaseYear": 2007,
                      "duration": "161min",
                      "videoUrl": "https://example.com/dark_prophecy_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Shadow Empire",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/shadow_empire.jpg",
                  "cardImage": "https://example.com/cards/shadow_empire.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Shadow Quest",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/shadow_quest.jpg",
                  "cardImage": "https://example.com/cards/shadow_quest.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Shadow Quest Part 1",
                      "partNumber": 1,
                      "releaseYear": 2000,
                      "duration": "121min",
                      "videoUrl": "https://example.com/shadow_quest_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Eternal Saga",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/eternal_saga.jpg",
                  "cardImage": "https://example.com/cards/eternal_saga.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Mystic Legacy",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/mystic_legacy.jpg",
                  "cardImage": "https://example.com/cards/mystic_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Mystic Legacy Part 1",
                      "partNumber": 1,
                      "releaseYear": 2013,
                      "duration": "80min",
                      "videoUrl": "https://example.com/mystic_legacy_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Legend Quest",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/legend_quest.jpg",
                  "cardImage": "https://example.com/cards/legend_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Eternal Saga",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/eternal_saga.jpg",
                  "cardImage": "https://example.com/cards/eternal_saga.jpg",
                  "isCarousel": false,
                  "movieParts": []
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Legend Quest",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/legend_quest.jpg",
                  "cardImage": "https://example.com/cards/legend_quest.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2021,
                      "episodes": [
                        {
                          "title": "Legend Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "27min",
                          "releaseDate": "2015-10-10",
                          "videoUrl": "https://example.com/legend_quest_ep1.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "44min",
                          "releaseDate": "2011-10-28",
                          "videoUrl": "https://example.com/legend_quest_ep2.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "48min",
                          "releaseDate": "2016-03-02",
                          "videoUrl": "https://example.com/legend_quest_ep3.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "32min",
                          "releaseDate": "2014-09-27",
                          "videoUrl": "https://example.com/legend_quest_ep4.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "37min",
                          "releaseDate": "2021-12-04",
                          "videoUrl": "https://example.com/legend_quest_ep5.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "49min",
                          "releaseDate": "2017-12-12",
                          "videoUrl": "https://example.com/legend_quest_ep6.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "47min",
                          "releaseDate": "2008-04-14",
                          "videoUrl": "https://example.com/legend_quest_ep7.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "23min",
                          "releaseDate": "2020-03-03",
                          "videoUrl": "https://example.com/legend_quest_ep8.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "24min",
                          "releaseDate": "2018-12-22",
                          "videoUrl": "https://example.com/legend_quest_ep9.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "35min",
                          "releaseDate": "2012-09-23",
                          "videoUrl": "https://example.com/legend_quest_ep10.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 11",
                          "episodeNumber": 11,
                          "duration": "46min",
                          "releaseDate": "2004-11-30",
                          "videoUrl": "https://example.com/legend_quest_ep11.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 12",
                          "episodeNumber": 12,
                          "duration": "25min",
                          "releaseDate": "2024-06-21",
                          "videoUrl": "https://example.com/legend_quest_ep12.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 13",
                          "episodeNumber": 13,
                          "duration": "31min",
                          "releaseDate": "2019-01-01",
                          "videoUrl": "https://example.com/legend_quest_ep13.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2023,
                      "episodes": [
                        {
                          "title": "Legend Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "33min",
                          "releaseDate": "2016-04-02",
                          "videoUrl": "https://example.com/legend_quest_ep1.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "34min",
                          "releaseDate": "2013-12-01",
                          "videoUrl": "https://example.com/legend_quest_ep2.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "41min",
                          "releaseDate": "2012-10-02",
                          "videoUrl": "https://example.com/legend_quest_ep3.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "37min",
                          "releaseDate": "2008-06-13",
                          "videoUrl": "https://example.com/legend_quest_ep4.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "48min",
                          "releaseDate": "2015-03-09",
                          "videoUrl": "https://example.com/legend_quest_ep5.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "48min",
                          "releaseDate": "2016-07-19",
                          "videoUrl": "https://example.com/legend_quest_ep6.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "49min",
                          "releaseDate": "2015-05-23",
                          "videoUrl": "https://example.com/legend_quest_ep7.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "36min",
                          "releaseDate": "2008-10-12",
                          "videoUrl": "https://example.com/legend_quest_ep8.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "49min",
                          "releaseDate": "2013-02-11",
                          "videoUrl": "https://example.com/legend_quest_ep9.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "39min",
                          "releaseDate": "2012-10-06",
                          "videoUrl": "https://example.com/legend_quest_ep10.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 11",
                          "episodeNumber": 11,
                          "duration": "46min",
                          "releaseDate": "2016-02-13",
                          "videoUrl": "https://example.com/legend_quest_ep11.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 12",
                          "episodeNumber": 12,
                          "duration": "43min",
                          "releaseDate": "2019-02-13",
                          "videoUrl": "https://example.com/legend_quest_ep12.mp4"
                        },
                        {
                          "title": "Legend Quest - Episode 13",
                          "episodeNumber": 13,
                          "duration": "40min",
                          "releaseDate": "2002-06-30",
                          "videoUrl": "https://example.com/legend_quest_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Prophecy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/legend_prophecy.jpg",
                  "cardImage": "https://example.com/cards/legend_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2015,
                      "episodes": [
                        {
                          "title": "Legend Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "31min",
                          "releaseDate": "2013-09-08",
                          "videoUrl": "https://example.com/legend_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "24min",
                          "releaseDate": "2009-08-08",
                          "videoUrl": "https://example.com/legend_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "33min",
                          "releaseDate": "2016-02-14",
                          "videoUrl": "https://example.com/legend_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "28min",
                          "releaseDate": "2010-03-17",
                          "videoUrl": "https://example.com/legend_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "20min",
                          "releaseDate": "2010-04-15",
                          "videoUrl": "https://example.com/legend_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "29min",
                          "releaseDate": "2003-04-30",
                          "videoUrl": "https://example.com/legend_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "31min",
                          "releaseDate": "2019-12-17",
                          "videoUrl": "https://example.com/legend_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "25min",
                          "releaseDate": "2000-02-05",
                          "videoUrl": "https://example.com/legend_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "26min",
                          "releaseDate": "2003-12-11",
                          "videoUrl": "https://example.com/legend_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "39min",
                          "releaseDate": "2006-12-23",
                          "videoUrl": "https://example.com/legend_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "41min",
                          "releaseDate": "2019-06-19",
                          "videoUrl": "https://example.com/legend_prophecy_ep11.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "50min",
                          "releaseDate": "2010-12-13",
                          "videoUrl": "https://example.com/legend_prophecy_ep12.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "30min",
                          "releaseDate": "2009-04-13",
                          "videoUrl": "https://example.com/legend_prophecy_ep13.mp4"
                        },
                        {
                          "title": "Legend Prophecy - Episode 14",
                          "episodeNumber": 14,
                          "duration": "46min",
                          "releaseDate": "2009-07-28",
                          "videoUrl": "https://example.com/legend_prophecy_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Storm",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/phantom_storm.jpg",
                  "cardImage": "https://example.com/cards/phantom_storm.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Mystic Legacy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/mystic_legacy.jpg",
                  "cardImage": "https://example.com/cards/mystic_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2013,
                      "episodes": [
                        {
                          "title": "Mystic Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "50min",
                          "releaseDate": "2019-07-02",
                          "videoUrl": "https://example.com/mystic_legacy_ep1.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "27min",
                          "releaseDate": "2003-02-25",
                          "videoUrl": "https://example.com/mystic_legacy_ep2.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "35min",
                          "releaseDate": "2017-11-12",
                          "videoUrl": "https://example.com/mystic_legacy_ep3.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "36min",
                          "releaseDate": "2022-08-24",
                          "videoUrl": "https://example.com/mystic_legacy_ep4.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "34min",
                          "releaseDate": "2008-02-20",
                          "videoUrl": "https://example.com/mystic_legacy_ep5.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "20min",
                          "releaseDate": "2012-01-25",
                          "videoUrl": "https://example.com/mystic_legacy_ep6.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "44min",
                          "releaseDate": "2011-01-23",
                          "videoUrl": "https://example.com/mystic_legacy_ep7.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "44min",
                          "releaseDate": "2013-06-02",
                          "videoUrl": "https://example.com/mystic_legacy_ep8.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "31min",
                          "releaseDate": "2001-08-10",
                          "videoUrl": "https://example.com/mystic_legacy_ep9.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "29min",
                          "releaseDate": "2011-01-01",
                          "videoUrl": "https://example.com/mystic_legacy_ep10.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "25min",
                          "releaseDate": "2024-11-23",
                          "videoUrl": "https://example.com/mystic_legacy_ep11.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "31min",
                          "releaseDate": "2008-11-06",
                          "videoUrl": "https://example.com/mystic_legacy_ep12.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "35min",
                          "releaseDate": "2006-03-05",
                          "videoUrl": "https://example.com/mystic_legacy_ep13.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 14",
                          "episodeNumber": 14,
                          "duration": "25min",
                          "releaseDate": "2008-11-04",
                          "videoUrl": "https://example.com/mystic_legacy_ep14.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2016,
                      "episodes": [
                        {
                          "title": "Mystic Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "28min",
                          "releaseDate": "2014-04-30",
                          "videoUrl": "https://example.com/mystic_legacy_ep1.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "27min",
                          "releaseDate": "2012-07-21",
                          "videoUrl": "https://example.com/mystic_legacy_ep2.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "20min",
                          "releaseDate": "2002-10-22",
                          "videoUrl": "https://example.com/mystic_legacy_ep3.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "35min",
                          "releaseDate": "2020-12-15",
                          "videoUrl": "https://example.com/mystic_legacy_ep4.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "25min",
                          "releaseDate": "2018-04-05",
                          "videoUrl": "https://example.com/mystic_legacy_ep5.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "48min",
                          "releaseDate": "2015-08-27",
                          "videoUrl": "https://example.com/mystic_legacy_ep6.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "46min",
                          "releaseDate": "2017-05-23",
                          "videoUrl": "https://example.com/mystic_legacy_ep7.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "34min",
                          "releaseDate": "2000-09-18",
                          "videoUrl": "https://example.com/mystic_legacy_ep8.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "43min",
                          "releaseDate": "2002-02-07",
                          "videoUrl": "https://example.com/mystic_legacy_ep9.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "29min",
                          "releaseDate": "2013-11-05",
                          "videoUrl": "https://example.com/mystic_legacy_ep10.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "33min",
                          "releaseDate": "2022-01-25",
                          "videoUrl": "https://example.com/mystic_legacy_ep11.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "20min",
                          "releaseDate": "2007-08-28",
                          "videoUrl": "https://example.com/mystic_legacy_ep12.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "47min",
                          "releaseDate": "2017-09-22",
                          "videoUrl": "https://example.com/mystic_legacy_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Saga",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/legend_saga.jpg",
                  "cardImage": "https://example.com/cards/legend_saga.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2011,
                      "episodes": [
                        {
                          "title": "Legend Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "39min",
                          "releaseDate": "2002-06-16",
                          "videoUrl": "https://example.com/legend_saga_ep1.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "45min",
                          "releaseDate": "2008-08-27",
                          "videoUrl": "https://example.com/legend_saga_ep2.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "50min",
                          "releaseDate": "2001-03-14",
                          "videoUrl": "https://example.com/legend_saga_ep3.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "45min",
                          "releaseDate": "2023-04-14",
                          "videoUrl": "https://example.com/legend_saga_ep4.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "45min",
                          "releaseDate": "2022-01-01",
                          "videoUrl": "https://example.com/legend_saga_ep5.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "23min",
                          "releaseDate": "2004-07-23",
                          "videoUrl": "https://example.com/legend_saga_ep6.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "29min",
                          "releaseDate": "2024-10-23",
                          "videoUrl": "https://example.com/legend_saga_ep7.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "48min",
                          "releaseDate": "2006-12-11",
                          "videoUrl": "https://example.com/legend_saga_ep8.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "37min",
                          "releaseDate": "2019-02-09",
                          "videoUrl": "https://example.com/legend_saga_ep9.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "24min",
                          "releaseDate": "2018-08-30",
                          "videoUrl": "https://example.com/legend_saga_ep10.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "30min",
                          "releaseDate": "2007-12-21",
                          "videoUrl": "https://example.com/legend_saga_ep11.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 12",
                          "episodeNumber": 12,
                          "duration": "31min",
                          "releaseDate": "2023-03-25",
                          "videoUrl": "https://example.com/legend_saga_ep12.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 13",
                          "episodeNumber": 13,
                          "duration": "39min",
                          "releaseDate": "2000-11-28",
                          "videoUrl": "https://example.com/legend_saga_ep13.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 14",
                          "episodeNumber": 14,
                          "duration": "42min",
                          "releaseDate": "2016-02-04",
                          "videoUrl": "https://example.com/legend_saga_ep14.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Sci-Fi",
          "image": "https://example.com/images/sci-fi.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Phantom Empire",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/phantom_empire.jpg",
                  "cardImage": "https://example.com/cards/phantom_empire.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Phantom Empire Part 1",
                      "partNumber": 1,
                      "releaseYear": 2024,
                      "duration": "132min",
                      "videoUrl": "https://example.com/phantom_empire_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Eternal Prophecy",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/eternal_prophecy.jpg",
                  "cardImage": "https://example.com/cards/eternal_prophecy.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Eternal Prophecy Part 1",
                      "partNumber": 1,
                      "releaseYear": 2017,
                      "duration": "174min",
                      "videoUrl": "https://example.com/eternal_prophecy_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Shadow Prophecy",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/shadow_prophecy.jpg",
                  "cardImage": "https://example.com/cards/shadow_prophecy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Infinity Storm",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/infinity_storm.jpg",
                  "cardImage": "https://example.com/cards/infinity_storm.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Mystic Warrior",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/mystic_warrior.jpg",
                  "cardImage": "https://example.com/cards/mystic_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": []
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Eternal Prophecy",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/eternal_prophecy.jpg",
                  "cardImage": "https://example.com/cards/eternal_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2024,
                      "episodes": [
                        {
                          "title": "Eternal Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "36min",
                          "releaseDate": "2013-07-01",
                          "videoUrl": "https://example.com/eternal_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "42min",
                          "releaseDate": "2024-09-19",
                          "videoUrl": "https://example.com/eternal_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "48min",
                          "releaseDate": "2004-01-19",
                          "videoUrl": "https://example.com/eternal_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "38min",
                          "releaseDate": "2015-05-13",
                          "videoUrl": "https://example.com/eternal_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "45min",
                          "releaseDate": "2018-04-10",
                          "videoUrl": "https://example.com/eternal_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "23min",
                          "releaseDate": "2017-05-25",
                          "videoUrl": "https://example.com/eternal_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "31min",
                          "releaseDate": "2022-08-11",
                          "videoUrl": "https://example.com/eternal_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "40min",
                          "releaseDate": "2017-01-28",
                          "videoUrl": "https://example.com/eternal_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "37min",
                          "releaseDate": "2005-02-18",
                          "videoUrl": "https://example.com/eternal_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "24min",
                          "releaseDate": "2018-03-05",
                          "videoUrl": "https://example.com/eternal_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "43min",
                          "releaseDate": "2003-08-21",
                          "videoUrl": "https://example.com/eternal_prophecy_ep11.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "39min",
                          "releaseDate": "2007-06-29",
                          "videoUrl": "https://example.com/eternal_prophecy_ep12.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "44min",
                          "releaseDate": "2023-06-09",
                          "videoUrl": "https://example.com/eternal_prophecy_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Quest",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/phantom_quest.jpg",
                  "cardImage": "https://example.com/cards/phantom_quest.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2024,
                      "episodes": [
                        {
                          "title": "Phantom Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "32min",
                          "releaseDate": "2011-01-30",
                          "videoUrl": "https://example.com/phantom_quest_ep1.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "36min",
                          "releaseDate": "2011-04-04",
                          "videoUrl": "https://example.com/phantom_quest_ep2.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "42min",
                          "releaseDate": "2008-05-31",
                          "videoUrl": "https://example.com/phantom_quest_ep3.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "29min",
                          "releaseDate": "2007-12-23",
                          "videoUrl": "https://example.com/phantom_quest_ep4.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "30min",
                          "releaseDate": "2024-10-08",
                          "videoUrl": "https://example.com/phantom_quest_ep5.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "43min",
                          "releaseDate": "2009-11-11",
                          "videoUrl": "https://example.com/phantom_quest_ep6.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "21min",
                          "releaseDate": "2010-01-02",
                          "videoUrl": "https://example.com/phantom_quest_ep7.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "20min",
                          "releaseDate": "2004-02-07",
                          "videoUrl": "https://example.com/phantom_quest_ep8.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "21min",
                          "releaseDate": "2010-09-14",
                          "videoUrl": "https://example.com/phantom_quest_ep9.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "37min",
                          "releaseDate": "2013-08-07",
                          "videoUrl": "https://example.com/phantom_quest_ep10.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 11",
                          "episodeNumber": 11,
                          "duration": "24min",
                          "releaseDate": "2010-04-09",
                          "videoUrl": "https://example.com/phantom_quest_ep11.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 12",
                          "episodeNumber": 12,
                          "duration": "40min",
                          "releaseDate": "2002-11-23",
                          "videoUrl": "https://example.com/phantom_quest_ep12.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 13",
                          "episodeNumber": 13,
                          "duration": "41min",
                          "releaseDate": "2011-09-10",
                          "videoUrl": "https://example.com/phantom_quest_ep13.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 14",
                          "episodeNumber": 14,
                          "duration": "21min",
                          "releaseDate": "2004-04-26",
                          "videoUrl": "https://example.com/phantom_quest_ep14.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2012,
                      "episodes": [
                        {
                          "title": "Phantom Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "48min",
                          "releaseDate": "2009-01-20",
                          "videoUrl": "https://example.com/phantom_quest_ep1.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "44min",
                          "releaseDate": "2020-01-31",
                          "videoUrl": "https://example.com/phantom_quest_ep2.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "49min",
                          "releaseDate": "2021-04-04",
                          "videoUrl": "https://example.com/phantom_quest_ep3.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "31min",
                          "releaseDate": "2019-07-10",
                          "videoUrl": "https://example.com/phantom_quest_ep4.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "28min",
                          "releaseDate": "2018-07-16",
                          "videoUrl": "https://example.com/phantom_quest_ep5.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "38min",
                          "releaseDate": "2011-06-09",
                          "videoUrl": "https://example.com/phantom_quest_ep6.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "44min",
                          "releaseDate": "2014-03-07",
                          "videoUrl": "https://example.com/phantom_quest_ep7.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "31min",
                          "releaseDate": "2000-01-18",
                          "videoUrl": "https://example.com/phantom_quest_ep8.mp4"
                        },
                        {
                          "title": "Phantom Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "28min",
                          "releaseDate": "2005-09-20",
                          "videoUrl": "https://example.com/phantom_quest_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Infinity Quest",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/infinity_quest.jpg",
                  "cardImage": "https://example.com/cards/infinity_quest.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Eternal Prophecy",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/eternal_prophecy.jpg",
                  "cardImage": "https://example.com/cards/eternal_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2022,
                      "episodes": [
                        {
                          "title": "Eternal Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "35min",
                          "releaseDate": "2011-04-14",
                          "videoUrl": "https://example.com/eternal_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "32min",
                          "releaseDate": "2011-09-14",
                          "videoUrl": "https://example.com/eternal_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "40min",
                          "releaseDate": "2014-02-07",
                          "videoUrl": "https://example.com/eternal_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "31min",
                          "releaseDate": "2011-02-07",
                          "videoUrl": "https://example.com/eternal_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "23min",
                          "releaseDate": "2011-03-18",
                          "videoUrl": "https://example.com/eternal_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "36min",
                          "releaseDate": "2003-06-11",
                          "videoUrl": "https://example.com/eternal_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "32min",
                          "releaseDate": "2020-12-15",
                          "videoUrl": "https://example.com/eternal_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "33min",
                          "releaseDate": "2005-01-07",
                          "videoUrl": "https://example.com/eternal_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "34min",
                          "releaseDate": "2003-06-01",
                          "videoUrl": "https://example.com/eternal_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "43min",
                          "releaseDate": "2020-12-27",
                          "videoUrl": "https://example.com/eternal_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "31min",
                          "releaseDate": "2009-11-29",
                          "videoUrl": "https://example.com/eternal_prophecy_ep11.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "36min",
                          "releaseDate": "2019-12-27",
                          "videoUrl": "https://example.com/eternal_prophecy_ep12.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "35min",
                          "releaseDate": "2017-01-19",
                          "videoUrl": "https://example.com/eternal_prophecy_ep13.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 14",
                          "episodeNumber": 14,
                          "duration": "29min",
                          "releaseDate": "2004-02-26",
                          "videoUrl": "https://example.com/eternal_prophecy_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Shadow Prophecy",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/shadow_prophecy.jpg",
                  "cardImage": "https://example.com/cards/shadow_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "South Korea",
      "image": "https://example.com/images/south_korea.jpg",
      "genres": [
        {
          "name": "Action",
          "image": "https://example.com/images/action.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Shadow Legacy",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/shadow_legacy.jpg",
                  "cardImage": "https://example.com/cards/shadow_legacy.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Legend Quest",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/legend_quest.jpg",
                  "cardImage": "https://example.com/cards/legend_quest.jpg",
                  "isCarousel": true,
                  "movieParts": [
                    {
                      "title": "Legend Quest Part 1",
                      "partNumber": 1,
                      "releaseYear": 2019,
                      "duration": "125min",
                      "videoUrl": "https://example.com/legend_quest_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Mystic Storm",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/mystic_storm.jpg",
                  "cardImage": "https://example.com/cards/mystic_storm.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Dark Warrior",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/dark_warrior.jpg",
                  "cardImage": "https://example.com/cards/dark_warrior.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Dark Prophecy",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/dark_prophecy.jpg",
                  "cardImage": "https://example.com/cards/dark_prophecy.jpg",
                  "isCarousel": true,
                  "movieParts": [
                    {
                      "title": "Dark Prophecy Part 1",
                      "partNumber": 1,
                      "releaseYear": 2015,
                      "duration": "140min",
                      "videoUrl": "https://example.com/dark_prophecy_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Shadow Saga",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/shadow_saga.jpg",
                  "cardImage": "https://example.com/cards/shadow_saga.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Dark Legacy",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/dark_legacy.jpg",
                  "cardImage": "https://example.com/cards/dark_legacy.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Shadow Prophecy",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/shadow_prophecy.jpg",
                  "cardImage": "https://example.com/cards/shadow_prophecy.jpg",
                  "isCarousel": true,
                  "movieParts": []
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Dark Storm",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/dark_storm.jpg",
                  "cardImage": "https://example.com/cards/dark_storm.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2006,
                      "episodes": [
                        {
                          "title": "Dark Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "24min",
                          "releaseDate": "2009-05-20",
                          "videoUrl": "https://example.com/dark_storm_ep1.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "26min",
                          "releaseDate": "2003-03-30",
                          "videoUrl": "https://example.com/dark_storm_ep2.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "45min",
                          "releaseDate": "2006-11-22",
                          "videoUrl": "https://example.com/dark_storm_ep3.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "45min",
                          "releaseDate": "2005-03-24",
                          "videoUrl": "https://example.com/dark_storm_ep4.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "42min",
                          "releaseDate": "2021-09-17",
                          "videoUrl": "https://example.com/dark_storm_ep5.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "34min",
                          "releaseDate": "2006-04-23",
                          "videoUrl": "https://example.com/dark_storm_ep6.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "43min",
                          "releaseDate": "2015-05-25",
                          "videoUrl": "https://example.com/dark_storm_ep7.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "43min",
                          "releaseDate": "2006-05-25",
                          "videoUrl": "https://example.com/dark_storm_ep8.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "50min",
                          "releaseDate": "2002-09-17",
                          "videoUrl": "https://example.com/dark_storm_ep9.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "21min",
                          "releaseDate": "2007-10-23",
                          "videoUrl": "https://example.com/dark_storm_ep10.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "36min",
                          "releaseDate": "2008-01-31",
                          "videoUrl": "https://example.com/dark_storm_ep11.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 12",
                          "episodeNumber": 12,
                          "duration": "48min",
                          "releaseDate": "2024-05-20",
                          "videoUrl": "https://example.com/dark_storm_ep12.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 13",
                          "episodeNumber": 13,
                          "duration": "24min",
                          "releaseDate": "2016-12-09",
                          "videoUrl": "https://example.com/dark_storm_ep13.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 14",
                          "episodeNumber": 14,
                          "duration": "29min",
                          "releaseDate": "2014-10-24",
                          "videoUrl": "https://example.com/dark_storm_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Shadow Quest",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/shadow_quest.jpg",
                  "cardImage": "https://example.com/cards/shadow_quest.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2017,
                      "episodes": [
                        {
                          "title": "Shadow Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "36min",
                          "releaseDate": "2018-01-21",
                          "videoUrl": "https://example.com/shadow_quest_ep1.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "48min",
                          "releaseDate": "2018-04-04",
                          "videoUrl": "https://example.com/shadow_quest_ep2.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "49min",
                          "releaseDate": "2017-11-27",
                          "videoUrl": "https://example.com/shadow_quest_ep3.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "24min",
                          "releaseDate": "2022-05-18",
                          "videoUrl": "https://example.com/shadow_quest_ep4.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "44min",
                          "releaseDate": "2013-04-14",
                          "videoUrl": "https://example.com/shadow_quest_ep5.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "41min",
                          "releaseDate": "2013-02-11",
                          "videoUrl": "https://example.com/shadow_quest_ep6.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "45min",
                          "releaseDate": "2015-10-05",
                          "videoUrl": "https://example.com/shadow_quest_ep7.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "28min",
                          "releaseDate": "2015-08-05",
                          "videoUrl": "https://example.com/shadow_quest_ep8.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "28min",
                          "releaseDate": "2010-05-19",
                          "videoUrl": "https://example.com/shadow_quest_ep9.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "28min",
                          "releaseDate": "2017-08-21",
                          "videoUrl": "https://example.com/shadow_quest_ep10.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 11",
                          "episodeNumber": 11,
                          "duration": "22min",
                          "releaseDate": "2019-05-05",
                          "videoUrl": "https://example.com/shadow_quest_ep11.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 12",
                          "episodeNumber": 12,
                          "duration": "28min",
                          "releaseDate": "2013-02-26",
                          "videoUrl": "https://example.com/shadow_quest_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Empire",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/phantom_empire.jpg",
                  "cardImage": "https://example.com/cards/phantom_empire.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2006,
                      "episodes": [
                        {
                          "title": "Phantom Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "44min",
                          "releaseDate": "2007-11-27",
                          "videoUrl": "https://example.com/phantom_empire_ep1.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "32min",
                          "releaseDate": "2003-09-18",
                          "videoUrl": "https://example.com/phantom_empire_ep2.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "23min",
                          "releaseDate": "2012-10-18",
                          "videoUrl": "https://example.com/phantom_empire_ep3.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "42min",
                          "releaseDate": "2000-05-06",
                          "videoUrl": "https://example.com/phantom_empire_ep4.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "22min",
                          "releaseDate": "2009-10-04",
                          "videoUrl": "https://example.com/phantom_empire_ep5.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "43min",
                          "releaseDate": "2018-10-07",
                          "videoUrl": "https://example.com/phantom_empire_ep6.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "38min",
                          "releaseDate": "2008-11-20",
                          "videoUrl": "https://example.com/phantom_empire_ep7.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "32min",
                          "releaseDate": "2009-07-22",
                          "videoUrl": "https://example.com/phantom_empire_ep8.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "47min",
                          "releaseDate": "2008-01-21",
                          "videoUrl": "https://example.com/phantom_empire_ep9.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "30min",
                          "releaseDate": "2000-12-22",
                          "videoUrl": "https://example.com/phantom_empire_ep10.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "21min",
                          "releaseDate": "2007-03-09",
                          "videoUrl": "https://example.com/phantom_empire_ep11.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 12",
                          "episodeNumber": 12,
                          "duration": "37min",
                          "releaseDate": "2000-07-04",
                          "videoUrl": "https://example.com/phantom_empire_ep12.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 13",
                          "episodeNumber": 13,
                          "duration": "35min",
                          "releaseDate": "2004-02-01",
                          "videoUrl": "https://example.com/phantom_empire_ep13.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2020,
                      "episodes": [
                        {
                          "title": "Phantom Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "24min",
                          "releaseDate": "2015-09-26",
                          "videoUrl": "https://example.com/phantom_empire_ep1.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "48min",
                          "releaseDate": "2003-11-18",
                          "videoUrl": "https://example.com/phantom_empire_ep2.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "20min",
                          "releaseDate": "2012-10-17",
                          "videoUrl": "https://example.com/phantom_empire_ep3.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "44min",
                          "releaseDate": "2019-01-16",
                          "videoUrl": "https://example.com/phantom_empire_ep4.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "28min",
                          "releaseDate": "2018-11-05",
                          "videoUrl": "https://example.com/phantom_empire_ep5.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "23min",
                          "releaseDate": "2004-12-06",
                          "videoUrl": "https://example.com/phantom_empire_ep6.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "48min",
                          "releaseDate": "2006-08-31",
                          "videoUrl": "https://example.com/phantom_empire_ep7.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "46min",
                          "releaseDate": "2005-03-08",
                          "videoUrl": "https://example.com/phantom_empire_ep8.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "44min",
                          "releaseDate": "2021-03-02",
                          "videoUrl": "https://example.com/phantom_empire_ep9.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "29min",
                          "releaseDate": "2019-11-23",
                          "videoUrl": "https://example.com/phantom_empire_ep10.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "45min",
                          "releaseDate": "2016-10-18",
                          "videoUrl": "https://example.com/phantom_empire_ep11.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 12",
                          "episodeNumber": 12,
                          "duration": "38min",
                          "releaseDate": "2007-12-25",
                          "videoUrl": "https://example.com/phantom_empire_ep12.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 13",
                          "episodeNumber": 13,
                          "duration": "42min",
                          "releaseDate": "2007-03-11",
                          "videoUrl": "https://example.com/phantom_empire_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Quest",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/eternal_quest.jpg",
                  "cardImage": "https://example.com/cards/eternal_quest.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2007,
                      "episodes": [
                        {
                          "title": "Eternal Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "38min",
                          "releaseDate": "2015-05-06",
                          "videoUrl": "https://example.com/eternal_quest_ep1.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "40min",
                          "releaseDate": "2010-07-28",
                          "videoUrl": "https://example.com/eternal_quest_ep2.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "45min",
                          "releaseDate": "2005-02-13",
                          "videoUrl": "https://example.com/eternal_quest_ep3.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "27min",
                          "releaseDate": "2016-07-16",
                          "videoUrl": "https://example.com/eternal_quest_ep4.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "24min",
                          "releaseDate": "2012-09-01",
                          "videoUrl": "https://example.com/eternal_quest_ep5.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "20min",
                          "releaseDate": "2018-01-03",
                          "videoUrl": "https://example.com/eternal_quest_ep6.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "32min",
                          "releaseDate": "2015-01-12",
                          "videoUrl": "https://example.com/eternal_quest_ep7.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "31min",
                          "releaseDate": "2017-04-04",
                          "videoUrl": "https://example.com/eternal_quest_ep8.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "44min",
                          "releaseDate": "2008-10-14",
                          "videoUrl": "https://example.com/eternal_quest_ep9.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "25min",
                          "releaseDate": "2002-06-16",
                          "videoUrl": "https://example.com/eternal_quest_ep10.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 11",
                          "episodeNumber": 11,
                          "duration": "38min",
                          "releaseDate": "2020-04-16",
                          "videoUrl": "https://example.com/eternal_quest_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2010,
                      "episodes": [
                        {
                          "title": "Eternal Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "27min",
                          "releaseDate": "2003-09-07",
                          "videoUrl": "https://example.com/eternal_quest_ep1.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "26min",
                          "releaseDate": "2024-02-29",
                          "videoUrl": "https://example.com/eternal_quest_ep2.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "41min",
                          "releaseDate": "2020-01-20",
                          "videoUrl": "https://example.com/eternal_quest_ep3.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "48min",
                          "releaseDate": "2000-09-12",
                          "videoUrl": "https://example.com/eternal_quest_ep4.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "33min",
                          "releaseDate": "2015-12-01",
                          "videoUrl": "https://example.com/eternal_quest_ep5.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "30min",
                          "releaseDate": "2006-04-06",
                          "videoUrl": "https://example.com/eternal_quest_ep6.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "32min",
                          "releaseDate": "2015-05-30",
                          "videoUrl": "https://example.com/eternal_quest_ep7.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "23min",
                          "releaseDate": "2017-06-30",
                          "videoUrl": "https://example.com/eternal_quest_ep8.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "35min",
                          "releaseDate": "2002-08-05",
                          "videoUrl": "https://example.com/eternal_quest_ep9.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "32min",
                          "releaseDate": "2022-07-27",
                          "videoUrl": "https://example.com/eternal_quest_ep10.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 11",
                          "episodeNumber": 11,
                          "duration": "49min",
                          "releaseDate": "2019-07-10",
                          "videoUrl": "https://example.com/eternal_quest_ep11.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 12",
                          "episodeNumber": 12,
                          "duration": "45min",
                          "releaseDate": "2005-09-16",
                          "videoUrl": "https://example.com/eternal_quest_ep12.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 13",
                          "episodeNumber": 13,
                          "duration": "27min",
                          "releaseDate": "2014-03-21",
                          "videoUrl": "https://example.com/eternal_quest_ep13.mp4"
                        },
                        {
                          "title": "Eternal Quest - Episode 14",
                          "episodeNumber": 14,
                          "duration": "30min",
                          "releaseDate": "2017-07-22",
                          "videoUrl": "https://example.com/eternal_quest_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Storm",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/dark_storm.jpg",
                  "cardImage": "https://example.com/cards/dark_storm.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2019,
                      "episodes": [
                        {
                          "title": "Dark Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "39min",
                          "releaseDate": "2022-04-16",
                          "videoUrl": "https://example.com/dark_storm_ep1.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "34min",
                          "releaseDate": "2004-10-16",
                          "videoUrl": "https://example.com/dark_storm_ep2.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "35min",
                          "releaseDate": "2016-07-05",
                          "videoUrl": "https://example.com/dark_storm_ep3.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "35min",
                          "releaseDate": "2019-06-08",
                          "videoUrl": "https://example.com/dark_storm_ep4.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "47min",
                          "releaseDate": "2021-12-01",
                          "videoUrl": "https://example.com/dark_storm_ep5.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "26min",
                          "releaseDate": "2023-03-19",
                          "videoUrl": "https://example.com/dark_storm_ep6.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "29min",
                          "releaseDate": "2017-12-31",
                          "videoUrl": "https://example.com/dark_storm_ep7.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "44min",
                          "releaseDate": "2003-06-17",
                          "videoUrl": "https://example.com/dark_storm_ep8.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "25min",
                          "releaseDate": "2017-10-29",
                          "videoUrl": "https://example.com/dark_storm_ep9.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2014,
                      "episodes": [
                        {
                          "title": "Dark Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "38min",
                          "releaseDate": "2000-05-29",
                          "videoUrl": "https://example.com/dark_storm_ep1.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "22min",
                          "releaseDate": "2012-08-16",
                          "videoUrl": "https://example.com/dark_storm_ep2.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "25min",
                          "releaseDate": "2002-06-08",
                          "videoUrl": "https://example.com/dark_storm_ep3.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "38min",
                          "releaseDate": "2019-01-07",
                          "videoUrl": "https://example.com/dark_storm_ep4.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "49min",
                          "releaseDate": "2000-08-03",
                          "videoUrl": "https://example.com/dark_storm_ep5.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "31min",
                          "releaseDate": "2019-06-18",
                          "videoUrl": "https://example.com/dark_storm_ep6.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "45min",
                          "releaseDate": "2002-03-21",
                          "videoUrl": "https://example.com/dark_storm_ep7.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "48min",
                          "releaseDate": "2012-12-13",
                          "videoUrl": "https://example.com/dark_storm_ep8.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "46min",
                          "releaseDate": "2018-06-05",
                          "videoUrl": "https://example.com/dark_storm_ep9.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "46min",
                          "releaseDate": "2002-08-02",
                          "videoUrl": "https://example.com/dark_storm_ep10.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "25min",
                          "releaseDate": "2000-10-17",
                          "videoUrl": "https://example.com/dark_storm_ep11.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 12",
                          "episodeNumber": 12,
                          "duration": "48min",
                          "releaseDate": "2004-11-20",
                          "videoUrl": "https://example.com/dark_storm_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Shadow Quest",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/shadow_quest.jpg",
                  "cardImage": "https://example.com/cards/shadow_quest.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2006,
                      "episodes": [
                        {
                          "title": "Shadow Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "37min",
                          "releaseDate": "2018-02-18",
                          "videoUrl": "https://example.com/shadow_quest_ep1.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "29min",
                          "releaseDate": "2003-07-15",
                          "videoUrl": "https://example.com/shadow_quest_ep2.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "27min",
                          "releaseDate": "2001-03-11",
                          "videoUrl": "https://example.com/shadow_quest_ep3.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "48min",
                          "releaseDate": "2010-03-21",
                          "videoUrl": "https://example.com/shadow_quest_ep4.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "36min",
                          "releaseDate": "2015-10-07",
                          "videoUrl": "https://example.com/shadow_quest_ep5.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "48min",
                          "releaseDate": "2016-12-04",
                          "videoUrl": "https://example.com/shadow_quest_ep6.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "45min",
                          "releaseDate": "2000-06-24",
                          "videoUrl": "https://example.com/shadow_quest_ep7.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "44min",
                          "releaseDate": "2000-12-07",
                          "videoUrl": "https://example.com/shadow_quest_ep8.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "47min",
                          "releaseDate": "2020-08-26",
                          "videoUrl": "https://example.com/shadow_quest_ep9.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "32min",
                          "releaseDate": "2019-04-26",
                          "videoUrl": "https://example.com/shadow_quest_ep10.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 11",
                          "episodeNumber": 11,
                          "duration": "47min",
                          "releaseDate": "2005-07-05",
                          "videoUrl": "https://example.com/shadow_quest_ep11.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 12",
                          "episodeNumber": 12,
                          "duration": "46min",
                          "releaseDate": "2001-04-06",
                          "videoUrl": "https://example.com/shadow_quest_ep12.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 13",
                          "episodeNumber": 13,
                          "duration": "40min",
                          "releaseDate": "2000-10-21",
                          "videoUrl": "https://example.com/shadow_quest_ep13.mp4"
                        },
                        {
                          "title": "Shadow Quest - Episode 14",
                          "episodeNumber": 14,
                          "duration": "28min",
                          "releaseDate": "2012-01-27",
                          "videoUrl": "https://example.com/shadow_quest_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Shadow Saga",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/shadow_saga.jpg",
                  "cardImage": "https://example.com/cards/shadow_saga.jpg",
                  "isCarousel": true,
                  "seasons": []
                }
              ]
            }
          ]
        },
        {
          "name": "Drama",
          "image": "https://example.com/images/drama.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Eternal Legacy",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/eternal_legacy.jpg",
                  "cardImage": "https://example.com/cards/eternal_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Storm",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/phantom_storm.jpg",
                  "cardImage": "https://example.com/cards/phantom_storm.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Dark Legacy",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/dark_legacy.jpg",
                  "cardImage": "https://example.com/cards/dark_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Dark Legacy Part 1",
                      "partNumber": 1,
                      "releaseYear": 2015,
                      "duration": "143min",
                      "videoUrl": "https://example.com/dark_legacy_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Phantom Storm",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/phantom_storm.jpg",
                  "cardImage": "https://example.com/cards/phantom_storm.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Phantom Storm Part 1",
                      "partNumber": 1,
                      "releaseYear": 2009,
                      "duration": "133min",
                      "videoUrl": "https://example.com/phantom_storm_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Eternal Legacy",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/eternal_legacy.jpg",
                  "cardImage": "https://example.com/cards/eternal_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Infinity Empire",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/infinity_empire.jpg",
                  "cardImage": "https://example.com/cards/infinity_empire.jpg",
                  "isCarousel": false,
                  "movieParts": []
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Infinity Empire",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/infinity_empire.jpg",
                  "cardImage": "https://example.com/cards/infinity_empire.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Legend Warrior",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/legend_warrior.jpg",
                  "cardImage": "https://example.com/cards/legend_warrior.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Mystic Saga",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/mystic_saga.jpg",
                  "cardImage": "https://example.com/cards/mystic_saga.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2006,
                      "episodes": [
                        {
                          "title": "Mystic Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "45min",
                          "releaseDate": "2013-09-17",
                          "videoUrl": "https://example.com/mystic_saga_ep1.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "33min",
                          "releaseDate": "2006-01-13",
                          "videoUrl": "https://example.com/mystic_saga_ep2.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "25min",
                          "releaseDate": "2021-03-29",
                          "videoUrl": "https://example.com/mystic_saga_ep3.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "40min",
                          "releaseDate": "2019-12-17",
                          "videoUrl": "https://example.com/mystic_saga_ep4.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "28min",
                          "releaseDate": "2017-03-20",
                          "videoUrl": "https://example.com/mystic_saga_ep5.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "33min",
                          "releaseDate": "2000-03-10",
                          "videoUrl": "https://example.com/mystic_saga_ep6.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "25min",
                          "releaseDate": "2002-07-20",
                          "videoUrl": "https://example.com/mystic_saga_ep7.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "36min",
                          "releaseDate": "2011-12-14",
                          "videoUrl": "https://example.com/mystic_saga_ep8.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "22min",
                          "releaseDate": "2018-01-03",
                          "videoUrl": "https://example.com/mystic_saga_ep9.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "39min",
                          "releaseDate": "2011-03-16",
                          "videoUrl": "https://example.com/mystic_saga_ep10.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "37min",
                          "releaseDate": "2013-02-21",
                          "videoUrl": "https://example.com/mystic_saga_ep11.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 12",
                          "episodeNumber": 12,
                          "duration": "22min",
                          "releaseDate": "2001-08-31",
                          "videoUrl": "https://example.com/mystic_saga_ep12.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 13",
                          "episodeNumber": 13,
                          "duration": "22min",
                          "releaseDate": "2004-11-04",
                          "videoUrl": "https://example.com/mystic_saga_ep13.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2012,
                      "episodes": [
                        {
                          "title": "Mystic Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "34min",
                          "releaseDate": "2002-11-06",
                          "videoUrl": "https://example.com/mystic_saga_ep1.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "30min",
                          "releaseDate": "2015-03-22",
                          "videoUrl": "https://example.com/mystic_saga_ep2.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "49min",
                          "releaseDate": "2007-02-03",
                          "videoUrl": "https://example.com/mystic_saga_ep3.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "40min",
                          "releaseDate": "2007-06-18",
                          "videoUrl": "https://example.com/mystic_saga_ep4.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "24min",
                          "releaseDate": "2013-10-09",
                          "videoUrl": "https://example.com/mystic_saga_ep5.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "34min",
                          "releaseDate": "2004-12-05",
                          "videoUrl": "https://example.com/mystic_saga_ep6.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "28min",
                          "releaseDate": "2004-11-16",
                          "videoUrl": "https://example.com/mystic_saga_ep7.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "50min",
                          "releaseDate": "2009-08-23",
                          "videoUrl": "https://example.com/mystic_saga_ep8.mp4"
                        },
                        {
                          "title": "Mystic Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "27min",
                          "releaseDate": "2007-12-11",
                          "videoUrl": "https://example.com/mystic_saga_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Empire",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/phantom_empire.jpg",
                  "cardImage": "https://example.com/cards/phantom_empire.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2023,
                      "episodes": [
                        {
                          "title": "Phantom Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "47min",
                          "releaseDate": "2012-05-05",
                          "videoUrl": "https://example.com/phantom_empire_ep1.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "28min",
                          "releaseDate": "2017-08-18",
                          "videoUrl": "https://example.com/phantom_empire_ep2.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "30min",
                          "releaseDate": "2009-05-21",
                          "videoUrl": "https://example.com/phantom_empire_ep3.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "42min",
                          "releaseDate": "2013-03-11",
                          "videoUrl": "https://example.com/phantom_empire_ep4.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "44min",
                          "releaseDate": "2019-12-19",
                          "videoUrl": "https://example.com/phantom_empire_ep5.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "23min",
                          "releaseDate": "2015-12-15",
                          "videoUrl": "https://example.com/phantom_empire_ep6.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "46min",
                          "releaseDate": "2011-02-21",
                          "videoUrl": "https://example.com/phantom_empire_ep7.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "38min",
                          "releaseDate": "2023-10-06",
                          "videoUrl": "https://example.com/phantom_empire_ep8.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "33min",
                          "releaseDate": "2008-02-08",
                          "videoUrl": "https://example.com/phantom_empire_ep9.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "50min",
                          "releaseDate": "2006-03-03",
                          "videoUrl": "https://example.com/phantom_empire_ep10.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "26min",
                          "releaseDate": "2003-06-09",
                          "videoUrl": "https://example.com/phantom_empire_ep11.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 12",
                          "episodeNumber": 12,
                          "duration": "33min",
                          "releaseDate": "2003-09-05",
                          "videoUrl": "https://example.com/phantom_empire_ep12.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 13",
                          "episodeNumber": 13,
                          "duration": "26min",
                          "releaseDate": "2021-04-08",
                          "videoUrl": "https://example.com/phantom_empire_ep13.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 14",
                          "episodeNumber": 14,
                          "duration": "22min",
                          "releaseDate": "2019-01-10",
                          "videoUrl": "https://example.com/phantom_empire_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Mystic Legacy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/mystic_legacy.jpg",
                  "cardImage": "https://example.com/cards/mystic_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2019,
                      "episodes": [
                        {
                          "title": "Mystic Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "34min",
                          "releaseDate": "2003-07-02",
                          "videoUrl": "https://example.com/mystic_legacy_ep1.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "32min",
                          "releaseDate": "2016-04-25",
                          "videoUrl": "https://example.com/mystic_legacy_ep2.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "22min",
                          "releaseDate": "2021-12-29",
                          "videoUrl": "https://example.com/mystic_legacy_ep3.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "37min",
                          "releaseDate": "2019-04-28",
                          "videoUrl": "https://example.com/mystic_legacy_ep4.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "39min",
                          "releaseDate": "2008-10-06",
                          "videoUrl": "https://example.com/mystic_legacy_ep5.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "26min",
                          "releaseDate": "2019-01-18",
                          "videoUrl": "https://example.com/mystic_legacy_ep6.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "39min",
                          "releaseDate": "2007-12-10",
                          "videoUrl": "https://example.com/mystic_legacy_ep7.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "43min",
                          "releaseDate": "2010-08-05",
                          "videoUrl": "https://example.com/mystic_legacy_ep8.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "28min",
                          "releaseDate": "2000-05-04",
                          "videoUrl": "https://example.com/mystic_legacy_ep9.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "47min",
                          "releaseDate": "2019-02-05",
                          "videoUrl": "https://example.com/mystic_legacy_ep10.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "48min",
                          "releaseDate": "2007-07-14",
                          "videoUrl": "https://example.com/mystic_legacy_ep11.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "37min",
                          "releaseDate": "2004-08-29",
                          "videoUrl": "https://example.com/mystic_legacy_ep12.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "48min",
                          "releaseDate": "2023-03-30",
                          "videoUrl": "https://example.com/mystic_legacy_ep13.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 14",
                          "episodeNumber": 14,
                          "duration": "42min",
                          "releaseDate": "2022-10-22",
                          "videoUrl": "https://example.com/mystic_legacy_ep14.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2014,
                      "episodes": [
                        {
                          "title": "Mystic Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "36min",
                          "releaseDate": "2009-06-17",
                          "videoUrl": "https://example.com/mystic_legacy_ep1.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "45min",
                          "releaseDate": "2000-07-21",
                          "videoUrl": "https://example.com/mystic_legacy_ep2.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "38min",
                          "releaseDate": "2016-01-26",
                          "videoUrl": "https://example.com/mystic_legacy_ep3.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "44min",
                          "releaseDate": "2007-07-15",
                          "videoUrl": "https://example.com/mystic_legacy_ep4.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "29min",
                          "releaseDate": "2022-12-16",
                          "videoUrl": "https://example.com/mystic_legacy_ep5.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "38min",
                          "releaseDate": "2001-08-06",
                          "videoUrl": "https://example.com/mystic_legacy_ep6.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "22min",
                          "releaseDate": "2009-08-15",
                          "videoUrl": "https://example.com/mystic_legacy_ep7.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "40min",
                          "releaseDate": "2021-11-14",
                          "videoUrl": "https://example.com/mystic_legacy_ep8.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "31min",
                          "releaseDate": "2010-07-10",
                          "videoUrl": "https://example.com/mystic_legacy_ep9.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "31min",
                          "releaseDate": "2014-06-15",
                          "videoUrl": "https://example.com/mystic_legacy_ep10.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "36min",
                          "releaseDate": "2002-09-02",
                          "videoUrl": "https://example.com/mystic_legacy_ep11.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "47min",
                          "releaseDate": "2020-08-27",
                          "videoUrl": "https://example.com/mystic_legacy_ep12.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "43min",
                          "releaseDate": "2018-09-11",
                          "videoUrl": "https://example.com/mystic_legacy_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Shadow Prophecy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/shadow_prophecy.jpg",
                  "cardImage": "https://example.com/cards/shadow_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2013,
                      "episodes": [
                        {
                          "title": "Shadow Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "24min",
                          "releaseDate": "2023-09-28",
                          "videoUrl": "https://example.com/shadow_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "24min",
                          "releaseDate": "2000-09-13",
                          "videoUrl": "https://example.com/shadow_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "43min",
                          "releaseDate": "2000-10-28",
                          "videoUrl": "https://example.com/shadow_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "30min",
                          "releaseDate": "2019-07-09",
                          "videoUrl": "https://example.com/shadow_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "39min",
                          "releaseDate": "2002-06-11",
                          "videoUrl": "https://example.com/shadow_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "40min",
                          "releaseDate": "2005-10-21",
                          "videoUrl": "https://example.com/shadow_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "30min",
                          "releaseDate": "2023-05-04",
                          "videoUrl": "https://example.com/shadow_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "47min",
                          "releaseDate": "2020-09-01",
                          "videoUrl": "https://example.com/shadow_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "27min",
                          "releaseDate": "2022-07-27",
                          "videoUrl": "https://example.com/shadow_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "45min",
                          "releaseDate": "2019-07-12",
                          "videoUrl": "https://example.com/shadow_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "31min",
                          "releaseDate": "2009-12-29",
                          "videoUrl": "https://example.com/shadow_prophecy_ep11.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "28min",
                          "releaseDate": "2007-07-16",
                          "videoUrl": "https://example.com/shadow_prophecy_ep12.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2006,
                      "episodes": [
                        {
                          "title": "Shadow Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "28min",
                          "releaseDate": "2008-08-28",
                          "videoUrl": "https://example.com/shadow_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "37min",
                          "releaseDate": "2006-05-01",
                          "videoUrl": "https://example.com/shadow_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "50min",
                          "releaseDate": "2014-04-09",
                          "videoUrl": "https://example.com/shadow_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "33min",
                          "releaseDate": "2005-12-26",
                          "videoUrl": "https://example.com/shadow_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "44min",
                          "releaseDate": "2014-06-19",
                          "videoUrl": "https://example.com/shadow_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "42min",
                          "releaseDate": "2024-10-16",
                          "videoUrl": "https://example.com/shadow_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "49min",
                          "releaseDate": "2020-05-20",
                          "videoUrl": "https://example.com/shadow_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "46min",
                          "releaseDate": "2016-05-10",
                          "videoUrl": "https://example.com/shadow_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "37min",
                          "releaseDate": "2003-06-22",
                          "videoUrl": "https://example.com/shadow_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "21min",
                          "releaseDate": "2005-09-16",
                          "videoUrl": "https://example.com/shadow_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "28min",
                          "releaseDate": "2023-07-05",
                          "videoUrl": "https://example.com/shadow_prophecy_ep11.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "40min",
                          "releaseDate": "2004-03-16",
                          "videoUrl": "https://example.com/shadow_prophecy_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Saga",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/phantom_saga.jpg",
                  "cardImage": "https://example.com/cards/phantom_saga.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2018,
                      "episodes": [
                        {
                          "title": "Phantom Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "26min",
                          "releaseDate": "2021-06-22",
                          "videoUrl": "https://example.com/phantom_saga_ep1.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "49min",
                          "releaseDate": "2018-11-13",
                          "videoUrl": "https://example.com/phantom_saga_ep2.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "20min",
                          "releaseDate": "2013-08-17",
                          "videoUrl": "https://example.com/phantom_saga_ep3.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "23min",
                          "releaseDate": "2016-07-13",
                          "videoUrl": "https://example.com/phantom_saga_ep4.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "27min",
                          "releaseDate": "2024-03-11",
                          "videoUrl": "https://example.com/phantom_saga_ep5.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "33min",
                          "releaseDate": "2009-09-06",
                          "videoUrl": "https://example.com/phantom_saga_ep6.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "36min",
                          "releaseDate": "2019-04-26",
                          "videoUrl": "https://example.com/phantom_saga_ep7.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "31min",
                          "releaseDate": "2022-10-14",
                          "videoUrl": "https://example.com/phantom_saga_ep8.mp4"
                        },
                        {
                          "title": "Phantom Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "44min",
                          "releaseDate": "2009-09-28",
                          "videoUrl": "https://example.com/phantom_saga_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Infinity Prophecy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/infinity_prophecy.jpg",
                  "cardImage": "https://example.com/cards/infinity_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2019,
                      "episodes": [
                        {
                          "title": "Infinity Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "46min",
                          "releaseDate": "2006-10-12",
                          "videoUrl": "https://example.com/infinity_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "33min",
                          "releaseDate": "2012-07-10",
                          "videoUrl": "https://example.com/infinity_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "24min",
                          "releaseDate": "2012-04-11",
                          "videoUrl": "https://example.com/infinity_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "37min",
                          "releaseDate": "2009-03-24",
                          "videoUrl": "https://example.com/infinity_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "41min",
                          "releaseDate": "2024-10-16",
                          "videoUrl": "https://example.com/infinity_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "20min",
                          "releaseDate": "2010-09-26",
                          "videoUrl": "https://example.com/infinity_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "26min",
                          "releaseDate": "2020-07-04",
                          "videoUrl": "https://example.com/infinity_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "49min",
                          "releaseDate": "2021-02-05",
                          "videoUrl": "https://example.com/infinity_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "44min",
                          "releaseDate": "2022-02-19",
                          "videoUrl": "https://example.com/infinity_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "24min",
                          "releaseDate": "2004-01-24",
                          "videoUrl": "https://example.com/infinity_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "24min",
                          "releaseDate": "2022-03-13",
                          "videoUrl": "https://example.com/infinity_prophecy_ep11.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "39min",
                          "releaseDate": "2010-09-19",
                          "videoUrl": "https://example.com/infinity_prophecy_ep12.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "50min",
                          "releaseDate": "2018-04-22",
                          "videoUrl": "https://example.com/infinity_prophecy_ep13.mp4"
                        },
                        {
                          "title": "Infinity Prophecy - Episode 14",
                          "episodeNumber": 14,
                          "duration": "30min",
                          "releaseDate": "2023-01-06",
                          "videoUrl": "https://example.com/infinity_prophecy_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Quest",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/dark_quest.jpg",
                  "cardImage": "https://example.com/cards/dark_quest.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2017,
                      "episodes": [
                        {
                          "title": "Dark Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "30min",
                          "releaseDate": "2024-09-09",
                          "videoUrl": "https://example.com/dark_quest_ep1.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "39min",
                          "releaseDate": "2010-07-31",
                          "videoUrl": "https://example.com/dark_quest_ep2.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "48min",
                          "releaseDate": "2005-04-13",
                          "videoUrl": "https://example.com/dark_quest_ep3.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "46min",
                          "releaseDate": "2013-04-08",
                          "videoUrl": "https://example.com/dark_quest_ep4.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "34min",
                          "releaseDate": "2022-11-02",
                          "videoUrl": "https://example.com/dark_quest_ep5.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "32min",
                          "releaseDate": "2007-05-10",
                          "videoUrl": "https://example.com/dark_quest_ep6.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "34min",
                          "releaseDate": "2008-10-23",
                          "videoUrl": "https://example.com/dark_quest_ep7.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "40min",
                          "releaseDate": "2006-03-04",
                          "videoUrl": "https://example.com/dark_quest_ep8.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "30min",
                          "releaseDate": "2016-06-21",
                          "videoUrl": "https://example.com/dark_quest_ep9.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "44min",
                          "releaseDate": "2022-12-26",
                          "videoUrl": "https://example.com/dark_quest_ep10.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 11",
                          "episodeNumber": 11,
                          "duration": "41min",
                          "releaseDate": "2017-03-18",
                          "videoUrl": "https://example.com/dark_quest_ep11.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 12",
                          "episodeNumber": 12,
                          "duration": "49min",
                          "releaseDate": "2013-02-25",
                          "videoUrl": "https://example.com/dark_quest_ep12.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 13",
                          "episodeNumber": 13,
                          "duration": "48min",
                          "releaseDate": "2018-08-30",
                          "videoUrl": "https://example.com/dark_quest_ep13.mp4"
                        },
                        {
                          "title": "Dark Quest - Episode 14",
                          "episodeNumber": 14,
                          "duration": "48min",
                          "releaseDate": "2016-10-16",
                          "videoUrl": "https://example.com/dark_quest_ep14.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Comedy",
          "image": "https://example.com/images/comedy.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Shadow Saga",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/shadow_saga.jpg",
                  "cardImage": "https://example.com/cards/shadow_saga.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Legend Storm",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/legend_storm.jpg",
                  "cardImage": "https://example.com/cards/legend_storm.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Eternal Quest",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/eternal_quest.jpg",
                  "cardImage": "https://example.com/cards/eternal_quest.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Eternal Quest Part 1",
                      "partNumber": 1,
                      "releaseYear": 2019,
                      "duration": "143min",
                      "videoUrl": "https://example.com/eternal_quest_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Shadow Warrior",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/shadow_warrior.jpg",
                  "cardImage": "https://example.com/cards/shadow_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Dark Warrior",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/dark_warrior.jpg",
                  "cardImage": "https://example.com/cards/dark_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Infinity Storm",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/infinity_storm.jpg",
                  "cardImage": "https://example.com/cards/infinity_storm.jpg",
                  "isCarousel": false,
                  "movieParts": []
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Infinity Storm",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/infinity_storm.jpg",
                  "cardImage": "https://example.com/cards/infinity_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2022,
                      "episodes": [
                        {
                          "title": "Infinity Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "48min",
                          "releaseDate": "2013-03-14",
                          "videoUrl": "https://example.com/infinity_storm_ep1.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "39min",
                          "releaseDate": "2003-01-28",
                          "videoUrl": "https://example.com/infinity_storm_ep2.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "37min",
                          "releaseDate": "2002-07-17",
                          "videoUrl": "https://example.com/infinity_storm_ep3.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "48min",
                          "releaseDate": "2004-02-13",
                          "videoUrl": "https://example.com/infinity_storm_ep4.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "39min",
                          "releaseDate": "2006-08-05",
                          "videoUrl": "https://example.com/infinity_storm_ep5.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "46min",
                          "releaseDate": "2012-05-28",
                          "videoUrl": "https://example.com/infinity_storm_ep6.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "49min",
                          "releaseDate": "2023-04-30",
                          "videoUrl": "https://example.com/infinity_storm_ep7.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "25min",
                          "releaseDate": "2006-09-28",
                          "videoUrl": "https://example.com/infinity_storm_ep8.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "40min",
                          "releaseDate": "2008-11-02",
                          "videoUrl": "https://example.com/infinity_storm_ep9.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "32min",
                          "releaseDate": "2009-08-04",
                          "videoUrl": "https://example.com/infinity_storm_ep10.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "20min",
                          "releaseDate": "2019-06-24",
                          "videoUrl": "https://example.com/infinity_storm_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2017,
                      "episodes": [
                        {
                          "title": "Infinity Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "31min",
                          "releaseDate": "2012-02-09",
                          "videoUrl": "https://example.com/infinity_storm_ep1.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "21min",
                          "releaseDate": "2008-01-18",
                          "videoUrl": "https://example.com/infinity_storm_ep2.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "37min",
                          "releaseDate": "2014-08-11",
                          "videoUrl": "https://example.com/infinity_storm_ep3.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "36min",
                          "releaseDate": "2002-10-31",
                          "videoUrl": "https://example.com/infinity_storm_ep4.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "36min",
                          "releaseDate": "2017-07-13",
                          "videoUrl": "https://example.com/infinity_storm_ep5.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "49min",
                          "releaseDate": "2012-12-31",
                          "videoUrl": "https://example.com/infinity_storm_ep6.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "27min",
                          "releaseDate": "2020-12-04",
                          "videoUrl": "https://example.com/infinity_storm_ep7.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "29min",
                          "releaseDate": "2017-02-27",
                          "videoUrl": "https://example.com/infinity_storm_ep8.mp4"
                        },
                        {
                          "title": "Infinity Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "21min",
                          "releaseDate": "2000-02-03",
                          "videoUrl": "https://example.com/infinity_storm_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Saga",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/eternal_saga.jpg",
                  "cardImage": "https://example.com/cards/eternal_saga.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Dark Storm",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/dark_storm.jpg",
                  "cardImage": "https://example.com/cards/dark_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2016,
                      "episodes": [
                        {
                          "title": "Dark Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "28min",
                          "releaseDate": "2013-08-21",
                          "videoUrl": "https://example.com/dark_storm_ep1.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "47min",
                          "releaseDate": "2023-07-15",
                          "videoUrl": "https://example.com/dark_storm_ep2.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "22min",
                          "releaseDate": "2006-04-07",
                          "videoUrl": "https://example.com/dark_storm_ep3.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "20min",
                          "releaseDate": "2019-04-05",
                          "videoUrl": "https://example.com/dark_storm_ep4.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "36min",
                          "releaseDate": "2017-10-18",
                          "videoUrl": "https://example.com/dark_storm_ep5.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "50min",
                          "releaseDate": "2016-07-18",
                          "videoUrl": "https://example.com/dark_storm_ep6.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "29min",
                          "releaseDate": "2018-05-26",
                          "videoUrl": "https://example.com/dark_storm_ep7.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "27min",
                          "releaseDate": "2020-10-22",
                          "videoUrl": "https://example.com/dark_storm_ep8.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "33min",
                          "releaseDate": "2016-02-08",
                          "videoUrl": "https://example.com/dark_storm_ep9.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "43min",
                          "releaseDate": "2001-05-30",
                          "videoUrl": "https://example.com/dark_storm_ep10.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "30min",
                          "releaseDate": "2000-10-20",
                          "videoUrl": "https://example.com/dark_storm_ep11.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 12",
                          "episodeNumber": 12,
                          "duration": "20min",
                          "releaseDate": "2001-05-04",
                          "videoUrl": "https://example.com/dark_storm_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Mystic Legacy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/mystic_legacy.jpg",
                  "cardImage": "https://example.com/cards/mystic_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2018,
                      "episodes": [
                        {
                          "title": "Mystic Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "37min",
                          "releaseDate": "2002-11-21",
                          "videoUrl": "https://example.com/mystic_legacy_ep1.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "31min",
                          "releaseDate": "2013-04-15",
                          "videoUrl": "https://example.com/mystic_legacy_ep2.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "48min",
                          "releaseDate": "2005-12-03",
                          "videoUrl": "https://example.com/mystic_legacy_ep3.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "37min",
                          "releaseDate": "2006-10-27",
                          "videoUrl": "https://example.com/mystic_legacy_ep4.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "27min",
                          "releaseDate": "2013-03-13",
                          "videoUrl": "https://example.com/mystic_legacy_ep5.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "34min",
                          "releaseDate": "2021-10-13",
                          "videoUrl": "https://example.com/mystic_legacy_ep6.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "21min",
                          "releaseDate": "2016-08-30",
                          "videoUrl": "https://example.com/mystic_legacy_ep7.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "49min",
                          "releaseDate": "2000-08-08",
                          "videoUrl": "https://example.com/mystic_legacy_ep8.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "25min",
                          "releaseDate": "2013-01-05",
                          "videoUrl": "https://example.com/mystic_legacy_ep9.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "34min",
                          "releaseDate": "2006-05-31",
                          "videoUrl": "https://example.com/mystic_legacy_ep10.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "20min",
                          "releaseDate": "2015-03-13",
                          "videoUrl": "https://example.com/mystic_legacy_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2008,
                      "episodes": [
                        {
                          "title": "Mystic Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "47min",
                          "releaseDate": "2014-03-11",
                          "videoUrl": "https://example.com/mystic_legacy_ep1.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "49min",
                          "releaseDate": "2019-08-15",
                          "videoUrl": "https://example.com/mystic_legacy_ep2.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "38min",
                          "releaseDate": "2023-10-15",
                          "videoUrl": "https://example.com/mystic_legacy_ep3.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "30min",
                          "releaseDate": "2019-09-07",
                          "videoUrl": "https://example.com/mystic_legacy_ep4.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "38min",
                          "releaseDate": "2006-05-01",
                          "videoUrl": "https://example.com/mystic_legacy_ep5.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "45min",
                          "releaseDate": "2002-01-03",
                          "videoUrl": "https://example.com/mystic_legacy_ep6.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "34min",
                          "releaseDate": "2022-03-25",
                          "videoUrl": "https://example.com/mystic_legacy_ep7.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "39min",
                          "releaseDate": "2016-02-04",
                          "videoUrl": "https://example.com/mystic_legacy_ep8.mp4"
                        },
                        {
                          "title": "Mystic Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "28min",
                          "releaseDate": "2002-07-02",
                          "videoUrl": "https://example.com/mystic_legacy_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Prophecy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/dark_prophecy.jpg",
                  "cardImage": "https://example.com/cards/dark_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2021,
                      "episodes": [
                        {
                          "title": "Dark Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "38min",
                          "releaseDate": "2005-01-14",
                          "videoUrl": "https://example.com/dark_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "28min",
                          "releaseDate": "2020-07-20",
                          "videoUrl": "https://example.com/dark_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "45min",
                          "releaseDate": "2013-05-25",
                          "videoUrl": "https://example.com/dark_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "23min",
                          "releaseDate": "2004-01-09",
                          "videoUrl": "https://example.com/dark_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "35min",
                          "releaseDate": "2014-01-22",
                          "videoUrl": "https://example.com/dark_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "21min",
                          "releaseDate": "2013-01-19",
                          "videoUrl": "https://example.com/dark_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "28min",
                          "releaseDate": "2018-11-25",
                          "videoUrl": "https://example.com/dark_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "24min",
                          "releaseDate": "2004-02-06",
                          "videoUrl": "https://example.com/dark_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "34min",
                          "releaseDate": "2015-06-12",
                          "videoUrl": "https://example.com/dark_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "45min",
                          "releaseDate": "2014-09-16",
                          "videoUrl": "https://example.com/dark_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "20min",
                          "releaseDate": "2019-12-14",
                          "videoUrl": "https://example.com/dark_prophecy_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2009,
                      "episodes": [
                        {
                          "title": "Dark Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "31min",
                          "releaseDate": "2006-04-30",
                          "videoUrl": "https://example.com/dark_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "43min",
                          "releaseDate": "2009-12-16",
                          "videoUrl": "https://example.com/dark_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "28min",
                          "releaseDate": "2024-03-13",
                          "videoUrl": "https://example.com/dark_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "34min",
                          "releaseDate": "2017-11-09",
                          "videoUrl": "https://example.com/dark_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "24min",
                          "releaseDate": "2021-10-03",
                          "videoUrl": "https://example.com/dark_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "25min",
                          "releaseDate": "2017-05-25",
                          "videoUrl": "https://example.com/dark_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "24min",
                          "releaseDate": "2005-04-12",
                          "videoUrl": "https://example.com/dark_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "33min",
                          "releaseDate": "2010-04-06",
                          "videoUrl": "https://example.com/dark_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "48min",
                          "releaseDate": "2007-01-06",
                          "videoUrl": "https://example.com/dark_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "36min",
                          "releaseDate": "2017-03-25",
                          "videoUrl": "https://example.com/dark_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "37min",
                          "releaseDate": "2015-06-14",
                          "videoUrl": "https://example.com/dark_prophecy_ep11.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "39min",
                          "releaseDate": "2020-12-05",
                          "videoUrl": "https://example.com/dark_prophecy_ep12.mp4"
                        },
                        {
                          "title": "Dark Prophecy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "23min",
                          "releaseDate": "2002-06-24",
                          "videoUrl": "https://example.com/dark_prophecy_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Legacy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/legend_legacy.jpg",
                  "cardImage": "https://example.com/cards/legend_legacy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2017,
                      "episodes": [
                        {
                          "title": "Legend Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "28min",
                          "releaseDate": "2003-06-24",
                          "videoUrl": "https://example.com/legend_legacy_ep1.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "44min",
                          "releaseDate": "2021-03-01",
                          "videoUrl": "https://example.com/legend_legacy_ep2.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "37min",
                          "releaseDate": "2009-02-04",
                          "videoUrl": "https://example.com/legend_legacy_ep3.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "34min",
                          "releaseDate": "2007-09-28",
                          "videoUrl": "https://example.com/legend_legacy_ep4.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "43min",
                          "releaseDate": "2018-06-27",
                          "videoUrl": "https://example.com/legend_legacy_ep5.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "41min",
                          "releaseDate": "2001-10-17",
                          "videoUrl": "https://example.com/legend_legacy_ep6.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "31min",
                          "releaseDate": "2008-08-23",
                          "videoUrl": "https://example.com/legend_legacy_ep7.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "20min",
                          "releaseDate": "2004-06-15",
                          "videoUrl": "https://example.com/legend_legacy_ep8.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "35min",
                          "releaseDate": "2011-05-02",
                          "videoUrl": "https://example.com/legend_legacy_ep9.mp4"
                        },
                        {
                          "title": "Legend Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "48min",
                          "releaseDate": "2024-03-16",
                          "videoUrl": "https://example.com/legend_legacy_ep10.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Quest",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/dark_quest.jpg",
                  "cardImage": "https://example.com/cards/dark_quest.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Phantom Warrior",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/phantom_warrior.jpg",
                  "cardImage": "https://example.com/cards/phantom_warrior.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2023,
                      "episodes": [
                        {
                          "title": "Phantom Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "20min",
                          "releaseDate": "2024-12-26",
                          "videoUrl": "https://example.com/phantom_warrior_ep1.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "39min",
                          "releaseDate": "2014-02-09",
                          "videoUrl": "https://example.com/phantom_warrior_ep2.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "35min",
                          "releaseDate": "2021-01-21",
                          "videoUrl": "https://example.com/phantom_warrior_ep3.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "41min",
                          "releaseDate": "2010-10-10",
                          "videoUrl": "https://example.com/phantom_warrior_ep4.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "20min",
                          "releaseDate": "2005-01-10",
                          "videoUrl": "https://example.com/phantom_warrior_ep5.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "36min",
                          "releaseDate": "2020-12-22",
                          "videoUrl": "https://example.com/phantom_warrior_ep6.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "23min",
                          "releaseDate": "2010-09-19",
                          "videoUrl": "https://example.com/phantom_warrior_ep7.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "22min",
                          "releaseDate": "2017-12-28",
                          "videoUrl": "https://example.com/phantom_warrior_ep8.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "24min",
                          "releaseDate": "2019-11-09",
                          "videoUrl": "https://example.com/phantom_warrior_ep9.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 10",
                          "episodeNumber": 10,
                          "duration": "48min",
                          "releaseDate": "2015-10-26",
                          "videoUrl": "https://example.com/phantom_warrior_ep10.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 11",
                          "episodeNumber": 11,
                          "duration": "42min",
                          "releaseDate": "2013-04-05",
                          "videoUrl": "https://example.com/phantom_warrior_ep11.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 12",
                          "episodeNumber": 12,
                          "duration": "21min",
                          "releaseDate": "2023-08-09",
                          "videoUrl": "https://example.com/phantom_warrior_ep12.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Sci-Fi",
          "image": "https://example.com/images/sci-fi.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Dark Empire",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/dark_empire.jpg",
                  "cardImage": "https://example.com/cards/dark_empire.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Legend Empire",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/legend_empire.jpg",
                  "cardImage": "https://example.com/cards/legend_empire.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Shadow Prophecy",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/shadow_prophecy.jpg",
                  "cardImage": "https://example.com/cards/shadow_prophecy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Infinity Storm",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/infinity_storm.jpg",
                  "cardImage": "https://example.com/cards/infinity_storm.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Legend Legacy",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/legend_legacy.jpg",
                  "cardImage": "https://example.com/cards/legend_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Dark Warrior",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/dark_warrior.jpg",
                  "cardImage": "https://example.com/cards/dark_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Legacy",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/phantom_legacy.jpg",
                  "cardImage": "https://example.com/cards/phantom_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Infinity Storm",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/infinity_storm.jpg",
                  "cardImage": "https://example.com/cards/infinity_storm.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Infinity Storm Part 1",
                      "partNumber": 1,
                      "releaseYear": 2012,
                      "duration": "117min",
                      "videoUrl": "https://example.com/infinity_storm_part1.mp4"
                    }
                  ]
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Shadow Quest",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/shadow_quest.jpg",
                  "cardImage": "https://example.com/cards/shadow_quest.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Mystic Quest",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/mystic_quest.jpg",
                  "cardImage": "https://example.com/cards/mystic_quest.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2018,
                      "episodes": [
                        {
                          "title": "Mystic Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "28min",
                          "releaseDate": "2009-12-20",
                          "videoUrl": "https://example.com/mystic_quest_ep1.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "20min",
                          "releaseDate": "2023-10-17",
                          "videoUrl": "https://example.com/mystic_quest_ep2.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "32min",
                          "releaseDate": "2013-03-03",
                          "videoUrl": "https://example.com/mystic_quest_ep3.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "36min",
                          "releaseDate": "2010-05-03",
                          "videoUrl": "https://example.com/mystic_quest_ep4.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "23min",
                          "releaseDate": "2005-10-27",
                          "videoUrl": "https://example.com/mystic_quest_ep5.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "22min",
                          "releaseDate": "2018-09-27",
                          "videoUrl": "https://example.com/mystic_quest_ep6.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "26min",
                          "releaseDate": "2011-09-07",
                          "videoUrl": "https://example.com/mystic_quest_ep7.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "37min",
                          "releaseDate": "2019-01-25",
                          "videoUrl": "https://example.com/mystic_quest_ep8.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "28min",
                          "releaseDate": "2000-10-09",
                          "videoUrl": "https://example.com/mystic_quest_ep9.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "46min",
                          "releaseDate": "2015-08-08",
                          "videoUrl": "https://example.com/mystic_quest_ep10.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2022,
                      "episodes": [
                        {
                          "title": "Mystic Quest - Episode 1",
                          "episodeNumber": 1,
                          "duration": "39min",
                          "releaseDate": "2005-06-24",
                          "videoUrl": "https://example.com/mystic_quest_ep1.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 2",
                          "episodeNumber": 2,
                          "duration": "44min",
                          "releaseDate": "2012-02-17",
                          "videoUrl": "https://example.com/mystic_quest_ep2.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 3",
                          "episodeNumber": 3,
                          "duration": "33min",
                          "releaseDate": "2003-06-26",
                          "videoUrl": "https://example.com/mystic_quest_ep3.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 4",
                          "episodeNumber": 4,
                          "duration": "24min",
                          "releaseDate": "2015-01-18",
                          "videoUrl": "https://example.com/mystic_quest_ep4.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 5",
                          "episodeNumber": 5,
                          "duration": "29min",
                          "releaseDate": "2020-09-23",
                          "videoUrl": "https://example.com/mystic_quest_ep5.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 6",
                          "episodeNumber": 6,
                          "duration": "23min",
                          "releaseDate": "2020-11-08",
                          "videoUrl": "https://example.com/mystic_quest_ep6.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 7",
                          "episodeNumber": 7,
                          "duration": "27min",
                          "releaseDate": "2015-08-16",
                          "videoUrl": "https://example.com/mystic_quest_ep7.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 8",
                          "episodeNumber": 8,
                          "duration": "27min",
                          "releaseDate": "2023-10-23",
                          "videoUrl": "https://example.com/mystic_quest_ep8.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 9",
                          "episodeNumber": 9,
                          "duration": "39min",
                          "releaseDate": "2008-02-08",
                          "videoUrl": "https://example.com/mystic_quest_ep9.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 10",
                          "episodeNumber": 10,
                          "duration": "25min",
                          "releaseDate": "2004-09-17",
                          "videoUrl": "https://example.com/mystic_quest_ep10.mp4"
                        },
                        {
                          "title": "Mystic Quest - Episode 11",
                          "episodeNumber": 11,
                          "duration": "24min",
                          "releaseDate": "2024-11-13",
                          "videoUrl": "https://example.com/mystic_quest_ep11.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Storm",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/legend_storm.jpg",
                  "cardImage": "https://example.com/cards/legend_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2023,
                      "episodes": [
                        {
                          "title": "Legend Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "41min",
                          "releaseDate": "2021-02-03",
                          "videoUrl": "https://example.com/legend_storm_ep1.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "45min",
                          "releaseDate": "2020-05-29",
                          "videoUrl": "https://example.com/legend_storm_ep2.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "39min",
                          "releaseDate": "2017-08-29",
                          "videoUrl": "https://example.com/legend_storm_ep3.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "44min",
                          "releaseDate": "2006-07-10",
                          "videoUrl": "https://example.com/legend_storm_ep4.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "46min",
                          "releaseDate": "2016-12-22",
                          "videoUrl": "https://example.com/legend_storm_ep5.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "25min",
                          "releaseDate": "2015-01-06",
                          "videoUrl": "https://example.com/legend_storm_ep6.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "45min",
                          "releaseDate": "2011-02-26",
                          "videoUrl": "https://example.com/legend_storm_ep7.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "43min",
                          "releaseDate": "2013-05-20",
                          "videoUrl": "https://example.com/legend_storm_ep8.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "46min",
                          "releaseDate": "2019-02-11",
                          "videoUrl": "https://example.com/legend_storm_ep9.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "45min",
                          "releaseDate": "2013-02-09",
                          "videoUrl": "https://example.com/legend_storm_ep10.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "20min",
                          "releaseDate": "2007-08-01",
                          "videoUrl": "https://example.com/legend_storm_ep11.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Storm",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/phantom_storm.jpg",
                  "cardImage": "https://example.com/cards/phantom_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2019,
                      "episodes": [
                        {
                          "title": "Phantom Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "34min",
                          "releaseDate": "2007-12-07",
                          "videoUrl": "https://example.com/phantom_storm_ep1.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "49min",
                          "releaseDate": "2003-09-09",
                          "videoUrl": "https://example.com/phantom_storm_ep2.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "24min",
                          "releaseDate": "2005-02-07",
                          "videoUrl": "https://example.com/phantom_storm_ep3.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "36min",
                          "releaseDate": "2014-06-25",
                          "videoUrl": "https://example.com/phantom_storm_ep4.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "32min",
                          "releaseDate": "2019-08-16",
                          "videoUrl": "https://example.com/phantom_storm_ep5.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "23min",
                          "releaseDate": "2011-08-19",
                          "videoUrl": "https://example.com/phantom_storm_ep6.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "36min",
                          "releaseDate": "2007-11-09",
                          "videoUrl": "https://example.com/phantom_storm_ep7.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "21min",
                          "releaseDate": "2008-03-03",
                          "videoUrl": "https://example.com/phantom_storm_ep8.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "46min",
                          "releaseDate": "2019-03-17",
                          "videoUrl": "https://example.com/phantom_storm_ep9.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "43min",
                          "releaseDate": "2018-10-17",
                          "videoUrl": "https://example.com/phantom_storm_ep10.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "47min",
                          "releaseDate": "2020-06-27",
                          "videoUrl": "https://example.com/phantom_storm_ep11.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 12",
                          "episodeNumber": 12,
                          "duration": "50min",
                          "releaseDate": "2004-10-07",
                          "videoUrl": "https://example.com/phantom_storm_ep12.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 13",
                          "episodeNumber": 13,
                          "duration": "20min",
                          "releaseDate": "2015-11-09",
                          "videoUrl": "https://example.com/phantom_storm_ep13.mp4"
                        },
                        {
                          "title": "Phantom Storm - Episode 14",
                          "episodeNumber": 14,
                          "duration": "43min",
                          "releaseDate": "2012-12-20",
                          "videoUrl": "https://example.com/phantom_storm_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Empire",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/eternal_empire.jpg",
                  "cardImage": "https://example.com/cards/eternal_empire.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2024,
                      "episodes": [
                        {
                          "title": "Eternal Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "27min",
                          "releaseDate": "2005-08-26",
                          "videoUrl": "https://example.com/eternal_empire_ep1.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "23min",
                          "releaseDate": "2011-05-19",
                          "videoUrl": "https://example.com/eternal_empire_ep2.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "38min",
                          "releaseDate": "2016-09-17",
                          "videoUrl": "https://example.com/eternal_empire_ep3.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "37min",
                          "releaseDate": "2024-05-21",
                          "videoUrl": "https://example.com/eternal_empire_ep4.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "40min",
                          "releaseDate": "2002-08-27",
                          "videoUrl": "https://example.com/eternal_empire_ep5.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "43min",
                          "releaseDate": "2024-03-24",
                          "videoUrl": "https://example.com/eternal_empire_ep6.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "48min",
                          "releaseDate": "2016-03-25",
                          "videoUrl": "https://example.com/eternal_empire_ep7.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "42min",
                          "releaseDate": "2022-10-19",
                          "videoUrl": "https://example.com/eternal_empire_ep8.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "50min",
                          "releaseDate": "2004-08-19",
                          "videoUrl": "https://example.com/eternal_empire_ep9.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "30min",
                          "releaseDate": "2024-10-28",
                          "videoUrl": "https://example.com/eternal_empire_ep10.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "25min",
                          "releaseDate": "2013-09-08",
                          "videoUrl": "https://example.com/eternal_empire_ep11.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 12",
                          "episodeNumber": 12,
                          "duration": "38min",
                          "releaseDate": "2018-08-04",
                          "videoUrl": "https://example.com/eternal_empire_ep12.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 13",
                          "episodeNumber": 13,
                          "duration": "28min",
                          "releaseDate": "2011-06-23",
                          "videoUrl": "https://example.com/eternal_empire_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Warrior",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/legend_warrior.jpg",
                  "cardImage": "https://example.com/cards/legend_warrior.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2017,
                      "episodes": [
                        {
                          "title": "Legend Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "38min",
                          "releaseDate": "2022-11-01",
                          "videoUrl": "https://example.com/legend_warrior_ep1.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "31min",
                          "releaseDate": "2022-05-08",
                          "videoUrl": "https://example.com/legend_warrior_ep2.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "39min",
                          "releaseDate": "2018-02-14",
                          "videoUrl": "https://example.com/legend_warrior_ep3.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "22min",
                          "releaseDate": "2022-06-29",
                          "videoUrl": "https://example.com/legend_warrior_ep4.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "23min",
                          "releaseDate": "2016-12-15",
                          "videoUrl": "https://example.com/legend_warrior_ep5.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "38min",
                          "releaseDate": "2019-05-30",
                          "videoUrl": "https://example.com/legend_warrior_ep6.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "37min",
                          "releaseDate": "2012-02-22",
                          "videoUrl": "https://example.com/legend_warrior_ep7.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "46min",
                          "releaseDate": "2009-08-21",
                          "videoUrl": "https://example.com/legend_warrior_ep8.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "41min",
                          "releaseDate": "2014-05-19",
                          "videoUrl": "https://example.com/legend_warrior_ep9.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 10",
                          "episodeNumber": 10,
                          "duration": "23min",
                          "releaseDate": "2009-01-25",
                          "videoUrl": "https://example.com/legend_warrior_ep10.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 11",
                          "episodeNumber": 11,
                          "duration": "36min",
                          "releaseDate": "2019-11-29",
                          "videoUrl": "https://example.com/legend_warrior_ep11.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 12",
                          "episodeNumber": 12,
                          "duration": "32min",
                          "releaseDate": "2021-05-20",
                          "videoUrl": "https://example.com/legend_warrior_ep12.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 13",
                          "episodeNumber": 13,
                          "duration": "37min",
                          "releaseDate": "2013-01-24",
                          "videoUrl": "https://example.com/legend_warrior_ep13.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2013,
                      "episodes": [
                        {
                          "title": "Legend Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "44min",
                          "releaseDate": "2012-04-08",
                          "videoUrl": "https://example.com/legend_warrior_ep1.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "41min",
                          "releaseDate": "2012-05-03",
                          "videoUrl": "https://example.com/legend_warrior_ep2.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "27min",
                          "releaseDate": "2001-10-04",
                          "videoUrl": "https://example.com/legend_warrior_ep3.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "45min",
                          "releaseDate": "2002-04-20",
                          "videoUrl": "https://example.com/legend_warrior_ep4.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "22min",
                          "releaseDate": "2011-02-21",
                          "videoUrl": "https://example.com/legend_warrior_ep5.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "22min",
                          "releaseDate": "2018-02-20",
                          "videoUrl": "https://example.com/legend_warrior_ep6.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "35min",
                          "releaseDate": "2002-06-27",
                          "videoUrl": "https://example.com/legend_warrior_ep7.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "50min",
                          "releaseDate": "2012-11-12",
                          "videoUrl": "https://example.com/legend_warrior_ep8.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "33min",
                          "releaseDate": "2022-02-24",
                          "videoUrl": "https://example.com/legend_warrior_ep9.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 10",
                          "episodeNumber": 10,
                          "duration": "29min",
                          "releaseDate": "2004-06-25",
                          "videoUrl": "https://example.com/legend_warrior_ep10.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 11",
                          "episodeNumber": 11,
                          "duration": "39min",
                          "releaseDate": "2007-01-22",
                          "videoUrl": "https://example.com/legend_warrior_ep11.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 12",
                          "episodeNumber": 12,
                          "duration": "47min",
                          "releaseDate": "2023-07-28",
                          "videoUrl": "https://example.com/legend_warrior_ep12.mp4"
                        },
                        {
                          "title": "Legend Warrior - Episode 13",
                          "episodeNumber": 13,
                          "duration": "24min",
                          "releaseDate": "2020-07-17",
                          "videoUrl": "https://example.com/legend_warrior_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Mystic Legacy",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/mystic_legacy.jpg",
                  "cardImage": "https://example.com/cards/mystic_legacy.jpg",
                  "isCarousel": false,
                  "seasons": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "UK",
      "image": "https://example.com/images/uk.jpg",
      "genres": [
        {
          "name": "Action",
          "image": "https://example.com/images/action.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Mystic Empire",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/mystic_empire.jpg",
                  "cardImage": "https://example.com/cards/mystic_empire.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Dark Prophecy",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/dark_prophecy.jpg",
                  "cardImage": "https://example.com/cards/dark_prophecy.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Legend Saga",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/legend_saga.jpg",
                  "cardImage": "https://example.com/cards/legend_saga.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Infinity Quest",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/infinity_quest.jpg",
                  "cardImage": "https://example.com/cards/infinity_quest.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Infinity Legacy",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/infinity_legacy.jpg",
                  "cardImage": "https://example.com/cards/infinity_legacy.jpg",
                  "isCarousel": true,
                  "movieParts": [
                    {
                      "title": "Infinity Legacy Part 1",
                      "partNumber": 1,
                      "releaseYear": 2013,
                      "duration": "134min",
                      "videoUrl": "https://example.com/infinity_legacy_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Mystic Quest",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/mystic_quest.jpg",
                  "cardImage": "https://example.com/cards/mystic_quest.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Eternal Prophecy",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/eternal_prophecy.jpg",
                  "cardImage": "https://example.com/cards/eternal_prophecy.jpg",
                  "isCarousel": true,
                  "movieParts": [
                    {
                      "title": "Eternal Prophecy Part 1",
                      "partNumber": 1,
                      "releaseYear": 2024,
                      "duration": "155min",
                      "videoUrl": "https://example.com/eternal_prophecy_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Legend Legacy",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/legend_legacy.jpg",
                  "cardImage": "https://example.com/cards/legend_legacy.jpg",
                  "isCarousel": true,
                  "movieParts": []
                },
                {
                  "title": "Infinity Warrior",
                  "description": "A thrilling action movies.",
                  "posterImage": "https://example.com/posters/infinity_warrior.jpg",
                  "cardImage": "https://example.com/cards/infinity_warrior.jpg",
                  "isCarousel": true,
                  "movieParts": [
                    {
                      "title": "Infinity Warrior Part 1",
                      "partNumber": 1,
                      "releaseYear": 2015,
                      "duration": "148min",
                      "videoUrl": "https://example.com/infinity_warrior_part1.mp4"
                    }
                  ]
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Shadow Legacy",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/shadow_legacy.jpg",
                  "cardImage": "https://example.com/cards/shadow_legacy.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2016,
                      "episodes": [
                        {
                          "title": "Shadow Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "34min",
                          "releaseDate": "2018-08-11",
                          "videoUrl": "https://example.com/shadow_legacy_ep1.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "30min",
                          "releaseDate": "2004-08-26",
                          "videoUrl": "https://example.com/shadow_legacy_ep2.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "31min",
                          "releaseDate": "2013-08-16",
                          "videoUrl": "https://example.com/shadow_legacy_ep3.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "47min",
                          "releaseDate": "2003-08-06",
                          "videoUrl": "https://example.com/shadow_legacy_ep4.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "33min",
                          "releaseDate": "2014-02-02",
                          "videoUrl": "https://example.com/shadow_legacy_ep5.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "38min",
                          "releaseDate": "2016-11-29",
                          "videoUrl": "https://example.com/shadow_legacy_ep6.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "42min",
                          "releaseDate": "2012-09-03",
                          "videoUrl": "https://example.com/shadow_legacy_ep7.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "43min",
                          "releaseDate": "2006-08-30",
                          "videoUrl": "https://example.com/shadow_legacy_ep8.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "41min",
                          "releaseDate": "2019-05-16",
                          "videoUrl": "https://example.com/shadow_legacy_ep9.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "37min",
                          "releaseDate": "2001-04-26",
                          "videoUrl": "https://example.com/shadow_legacy_ep10.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "46min",
                          "releaseDate": "2005-08-11",
                          "videoUrl": "https://example.com/shadow_legacy_ep11.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "22min",
                          "releaseDate": "2012-01-10",
                          "videoUrl": "https://example.com/shadow_legacy_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Empire",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/phantom_empire.jpg",
                  "cardImage": "https://example.com/cards/phantom_empire.jpg",
                  "isCarousel": true,
                  "seasons": []
                },
                {
                  "title": "Shadow Saga",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/shadow_saga.jpg",
                  "cardImage": "https://example.com/cards/shadow_saga.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2018,
                      "episodes": [
                        {
                          "title": "Shadow Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "27min",
                          "releaseDate": "2010-04-05",
                          "videoUrl": "https://example.com/shadow_saga_ep1.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "21min",
                          "releaseDate": "2019-10-25",
                          "videoUrl": "https://example.com/shadow_saga_ep2.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "32min",
                          "releaseDate": "2005-06-04",
                          "videoUrl": "https://example.com/shadow_saga_ep3.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "28min",
                          "releaseDate": "2021-08-27",
                          "videoUrl": "https://example.com/shadow_saga_ep4.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "36min",
                          "releaseDate": "2006-05-19",
                          "videoUrl": "https://example.com/shadow_saga_ep5.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "38min",
                          "releaseDate": "2008-03-24",
                          "videoUrl": "https://example.com/shadow_saga_ep6.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "32min",
                          "releaseDate": "2013-08-25",
                          "videoUrl": "https://example.com/shadow_saga_ep7.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "38min",
                          "releaseDate": "2009-08-26",
                          "videoUrl": "https://example.com/shadow_saga_ep8.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "37min",
                          "releaseDate": "2018-09-21",
                          "videoUrl": "https://example.com/shadow_saga_ep9.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "46min",
                          "releaseDate": "2003-08-25",
                          "videoUrl": "https://example.com/shadow_saga_ep10.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "33min",
                          "releaseDate": "2002-07-17",
                          "videoUrl": "https://example.com/shadow_saga_ep11.mp4"
                        },
                        {
                          "title": "Shadow Saga - Episode 12",
                          "episodeNumber": 12,
                          "duration": "29min",
                          "releaseDate": "2015-12-24",
                          "videoUrl": "https://example.com/shadow_saga_ep12.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Empire",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/phantom_empire.jpg",
                  "cardImage": "https://example.com/cards/phantom_empire.jpg",
                  "isCarousel": true,
                  "seasons": []
                },
                {
                  "title": "Shadow Prophecy",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/shadow_prophecy.jpg",
                  "cardImage": "https://example.com/cards/shadow_prophecy.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Shadow Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "21min",
                          "releaseDate": "2009-07-18",
                          "videoUrl": "https://example.com/shadow_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "47min",
                          "releaseDate": "2024-12-08",
                          "videoUrl": "https://example.com/shadow_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "33min",
                          "releaseDate": "2020-10-05",
                          "videoUrl": "https://example.com/shadow_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "28min",
                          "releaseDate": "2002-02-07",
                          "videoUrl": "https://example.com/shadow_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "26min",
                          "releaseDate": "2021-03-15",
                          "videoUrl": "https://example.com/shadow_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "34min",
                          "releaseDate": "2021-07-18",
                          "videoUrl": "https://example.com/shadow_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "37min",
                          "releaseDate": "2009-09-05",
                          "videoUrl": "https://example.com/shadow_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "41min",
                          "releaseDate": "2023-07-11",
                          "videoUrl": "https://example.com/shadow_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "28min",
                          "releaseDate": "2012-10-05",
                          "videoUrl": "https://example.com/shadow_prophecy_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Warrior",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/phantom_warrior.jpg",
                  "cardImage": "https://example.com/cards/phantom_warrior.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2010,
                      "episodes": [
                        {
                          "title": "Phantom Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "49min",
                          "releaseDate": "2010-03-22",
                          "videoUrl": "https://example.com/phantom_warrior_ep1.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "36min",
                          "releaseDate": "2023-02-12",
                          "videoUrl": "https://example.com/phantom_warrior_ep2.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "50min",
                          "releaseDate": "2000-04-04",
                          "videoUrl": "https://example.com/phantom_warrior_ep3.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "44min",
                          "releaseDate": "2009-11-07",
                          "videoUrl": "https://example.com/phantom_warrior_ep4.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "36min",
                          "releaseDate": "2013-03-13",
                          "videoUrl": "https://example.com/phantom_warrior_ep5.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "44min",
                          "releaseDate": "2009-01-11",
                          "videoUrl": "https://example.com/phantom_warrior_ep6.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "47min",
                          "releaseDate": "2019-12-05",
                          "videoUrl": "https://example.com/phantom_warrior_ep7.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "43min",
                          "releaseDate": "2008-09-27",
                          "videoUrl": "https://example.com/phantom_warrior_ep8.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "40min",
                          "releaseDate": "2015-04-13",
                          "videoUrl": "https://example.com/phantom_warrior_ep9.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 10",
                          "episodeNumber": 10,
                          "duration": "48min",
                          "releaseDate": "2001-09-21",
                          "videoUrl": "https://example.com/phantom_warrior_ep10.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 11",
                          "episodeNumber": 11,
                          "duration": "41min",
                          "releaseDate": "2024-06-29",
                          "videoUrl": "https://example.com/phantom_warrior_ep11.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 12",
                          "episodeNumber": 12,
                          "duration": "20min",
                          "releaseDate": "2000-01-24",
                          "videoUrl": "https://example.com/phantom_warrior_ep12.mp4"
                        },
                        {
                          "title": "Phantom Warrior - Episode 13",
                          "episodeNumber": 13,
                          "duration": "45min",
                          "releaseDate": "2004-07-04",
                          "videoUrl": "https://example.com/phantom_warrior_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Shadow Legacy",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/shadow_legacy.jpg",
                  "cardImage": "https://example.com/cards/shadow_legacy.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2013,
                      "episodes": [
                        {
                          "title": "Shadow Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "20min",
                          "releaseDate": "2010-03-07",
                          "videoUrl": "https://example.com/shadow_legacy_ep1.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "42min",
                          "releaseDate": "2007-09-25",
                          "videoUrl": "https://example.com/shadow_legacy_ep2.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "27min",
                          "releaseDate": "2009-01-20",
                          "videoUrl": "https://example.com/shadow_legacy_ep3.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "46min",
                          "releaseDate": "2000-08-24",
                          "videoUrl": "https://example.com/shadow_legacy_ep4.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "29min",
                          "releaseDate": "2004-01-31",
                          "videoUrl": "https://example.com/shadow_legacy_ep5.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "23min",
                          "releaseDate": "2017-12-28",
                          "videoUrl": "https://example.com/shadow_legacy_ep6.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "41min",
                          "releaseDate": "2006-04-07",
                          "videoUrl": "https://example.com/shadow_legacy_ep7.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "38min",
                          "releaseDate": "2022-03-08",
                          "videoUrl": "https://example.com/shadow_legacy_ep8.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "40min",
                          "releaseDate": "2000-06-22",
                          "videoUrl": "https://example.com/shadow_legacy_ep9.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "25min",
                          "releaseDate": "2021-09-27",
                          "videoUrl": "https://example.com/shadow_legacy_ep10.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "35min",
                          "releaseDate": "2019-06-16",
                          "videoUrl": "https://example.com/shadow_legacy_ep11.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "27min",
                          "releaseDate": "2004-03-28",
                          "videoUrl": "https://example.com/shadow_legacy_ep12.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2020,
                      "episodes": [
                        {
                          "title": "Shadow Legacy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "41min",
                          "releaseDate": "2003-12-28",
                          "videoUrl": "https://example.com/shadow_legacy_ep1.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "28min",
                          "releaseDate": "2001-09-04",
                          "videoUrl": "https://example.com/shadow_legacy_ep2.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "49min",
                          "releaseDate": "2018-10-06",
                          "videoUrl": "https://example.com/shadow_legacy_ep3.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "29min",
                          "releaseDate": "2011-09-27",
                          "videoUrl": "https://example.com/shadow_legacy_ep4.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "23min",
                          "releaseDate": "2001-02-23",
                          "videoUrl": "https://example.com/shadow_legacy_ep5.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "30min",
                          "releaseDate": "2005-07-27",
                          "videoUrl": "https://example.com/shadow_legacy_ep6.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "48min",
                          "releaseDate": "2012-02-17",
                          "videoUrl": "https://example.com/shadow_legacy_ep7.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "25min",
                          "releaseDate": "2006-01-24",
                          "videoUrl": "https://example.com/shadow_legacy_ep8.mp4"
                        },
                        {
                          "title": "Shadow Legacy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "27min",
                          "releaseDate": "2009-09-14",
                          "videoUrl": "https://example.com/shadow_legacy_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Empire",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/legend_empire.jpg",
                  "cardImage": "https://example.com/cards/legend_empire.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Legend Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "20min",
                          "releaseDate": "2015-09-01",
                          "videoUrl": "https://example.com/legend_empire_ep1.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "50min",
                          "releaseDate": "2009-03-30",
                          "videoUrl": "https://example.com/legend_empire_ep2.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "26min",
                          "releaseDate": "2024-11-24",
                          "videoUrl": "https://example.com/legend_empire_ep3.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "39min",
                          "releaseDate": "2016-12-13",
                          "videoUrl": "https://example.com/legend_empire_ep4.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "26min",
                          "releaseDate": "2006-09-13",
                          "videoUrl": "https://example.com/legend_empire_ep5.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "42min",
                          "releaseDate": "2005-11-23",
                          "videoUrl": "https://example.com/legend_empire_ep6.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "45min",
                          "releaseDate": "2002-01-17",
                          "videoUrl": "https://example.com/legend_empire_ep7.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "21min",
                          "releaseDate": "2016-10-06",
                          "videoUrl": "https://example.com/legend_empire_ep8.mp4"
                        },
                        {
                          "title": "Legend Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "30min",
                          "releaseDate": "2020-02-01",
                          "videoUrl": "https://example.com/legend_empire_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Mystic Warrior",
                  "description": "A thrilling action tv shows.",
                  "posterImage": "https://example.com/posters/mystic_warrior.jpg",
                  "cardImage": "https://example.com/cards/mystic_warrior.jpg",
                  "isCarousel": true,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Mystic Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "40min",
                          "releaseDate": "2013-12-29",
                          "videoUrl": "https://example.com/mystic_warrior_ep1.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "21min",
                          "releaseDate": "2005-07-08",
                          "videoUrl": "https://example.com/mystic_warrior_ep2.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "21min",
                          "releaseDate": "2019-07-29",
                          "videoUrl": "https://example.com/mystic_warrior_ep3.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "21min",
                          "releaseDate": "2004-09-06",
                          "videoUrl": "https://example.com/mystic_warrior_ep4.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "45min",
                          "releaseDate": "2008-01-21",
                          "videoUrl": "https://example.com/mystic_warrior_ep5.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "24min",
                          "releaseDate": "2002-03-30",
                          "videoUrl": "https://example.com/mystic_warrior_ep6.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "30min",
                          "releaseDate": "2021-07-27",
                          "videoUrl": "https://example.com/mystic_warrior_ep7.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "30min",
                          "releaseDate": "2009-07-13",
                          "videoUrl": "https://example.com/mystic_warrior_ep8.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "40min",
                          "releaseDate": "2016-11-23",
                          "videoUrl": "https://example.com/mystic_warrior_ep9.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 10",
                          "episodeNumber": 10,
                          "duration": "36min",
                          "releaseDate": "2005-05-09",
                          "videoUrl": "https://example.com/mystic_warrior_ep10.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2017,
                      "episodes": [
                        {
                          "title": "Mystic Warrior - Episode 1",
                          "episodeNumber": 1,
                          "duration": "26min",
                          "releaseDate": "2005-02-22",
                          "videoUrl": "https://example.com/mystic_warrior_ep1.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 2",
                          "episodeNumber": 2,
                          "duration": "43min",
                          "releaseDate": "2005-03-06",
                          "videoUrl": "https://example.com/mystic_warrior_ep2.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 3",
                          "episodeNumber": 3,
                          "duration": "26min",
                          "releaseDate": "2000-12-21",
                          "videoUrl": "https://example.com/mystic_warrior_ep3.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 4",
                          "episodeNumber": 4,
                          "duration": "47min",
                          "releaseDate": "2016-06-30",
                          "videoUrl": "https://example.com/mystic_warrior_ep4.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 5",
                          "episodeNumber": 5,
                          "duration": "44min",
                          "releaseDate": "2014-11-07",
                          "videoUrl": "https://example.com/mystic_warrior_ep5.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 6",
                          "episodeNumber": 6,
                          "duration": "46min",
                          "releaseDate": "2023-11-02",
                          "videoUrl": "https://example.com/mystic_warrior_ep6.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 7",
                          "episodeNumber": 7,
                          "duration": "40min",
                          "releaseDate": "2002-07-09",
                          "videoUrl": "https://example.com/mystic_warrior_ep7.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 8",
                          "episodeNumber": 8,
                          "duration": "23min",
                          "releaseDate": "2022-03-23",
                          "videoUrl": "https://example.com/mystic_warrior_ep8.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 9",
                          "episodeNumber": 9,
                          "duration": "46min",
                          "releaseDate": "2021-09-22",
                          "videoUrl": "https://example.com/mystic_warrior_ep9.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 10",
                          "episodeNumber": 10,
                          "duration": "28min",
                          "releaseDate": "2024-03-03",
                          "videoUrl": "https://example.com/mystic_warrior_ep10.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 11",
                          "episodeNumber": 11,
                          "duration": "37min",
                          "releaseDate": "2017-03-23",
                          "videoUrl": "https://example.com/mystic_warrior_ep11.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 12",
                          "episodeNumber": 12,
                          "duration": "32min",
                          "releaseDate": "2023-12-02",
                          "videoUrl": "https://example.com/mystic_warrior_ep12.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 13",
                          "episodeNumber": 13,
                          "duration": "45min",
                          "releaseDate": "2017-08-24",
                          "videoUrl": "https://example.com/mystic_warrior_ep13.mp4"
                        },
                        {
                          "title": "Mystic Warrior - Episode 14",
                          "episodeNumber": 14,
                          "duration": "28min",
                          "releaseDate": "2019-09-23",
                          "videoUrl": "https://example.com/mystic_warrior_ep14.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Drama",
          "image": "https://example.com/images/drama.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Infinity Saga",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/infinity_saga.jpg",
                  "cardImage": "https://example.com/cards/infinity_saga.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Infinity Saga Part 1",
                      "partNumber": 1,
                      "releaseYear": 2017,
                      "duration": "81min",
                      "videoUrl": "https://example.com/infinity_saga_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Dark Quest",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/dark_quest.jpg",
                  "cardImage": "https://example.com/cards/dark_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Storm",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/phantom_storm.jpg",
                  "cardImage": "https://example.com/cards/phantom_storm.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Dark Prophecy",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/dark_prophecy.jpg",
                  "cardImage": "https://example.com/cards/dark_prophecy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Legacy",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/phantom_legacy.jpg",
                  "cardImage": "https://example.com/cards/phantom_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Phantom Legacy Part 1",
                      "partNumber": 1,
                      "releaseYear": 2013,
                      "duration": "113min",
                      "videoUrl": "https://example.com/phantom_legacy_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Eternal Legacy",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/eternal_legacy.jpg",
                  "cardImage": "https://example.com/cards/eternal_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Storm",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/phantom_storm.jpg",
                  "cardImage": "https://example.com/cards/phantom_storm.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Phantom Storm Part 1",
                      "partNumber": 1,
                      "releaseYear": 2009,
                      "duration": "137min",
                      "videoUrl": "https://example.com/phantom_storm_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Mystic Saga",
                  "description": "A thrilling drama movies.",
                  "posterImage": "https://example.com/posters/mystic_saga.jpg",
                  "cardImage": "https://example.com/cards/mystic_saga.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Mystic Saga Part 1",
                      "partNumber": 1,
                      "releaseYear": 2024,
                      "duration": "112min",
                      "videoUrl": "https://example.com/mystic_saga_part1.mp4"
                    }
                  ]
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Shadow Prophecy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/shadow_prophecy.jpg",
                  "cardImage": "https://example.com/cards/shadow_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2019,
                      "episodes": [
                        {
                          "title": "Shadow Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "34min",
                          "releaseDate": "2023-09-03",
                          "videoUrl": "https://example.com/shadow_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "35min",
                          "releaseDate": "2005-06-08",
                          "videoUrl": "https://example.com/shadow_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "44min",
                          "releaseDate": "2000-09-19",
                          "videoUrl": "https://example.com/shadow_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "45min",
                          "releaseDate": "2012-11-23",
                          "videoUrl": "https://example.com/shadow_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "34min",
                          "releaseDate": "2008-04-20",
                          "videoUrl": "https://example.com/shadow_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "43min",
                          "releaseDate": "2001-11-22",
                          "videoUrl": "https://example.com/shadow_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "26min",
                          "releaseDate": "2009-08-20",
                          "videoUrl": "https://example.com/shadow_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "38min",
                          "releaseDate": "2019-12-18",
                          "videoUrl": "https://example.com/shadow_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "42min",
                          "releaseDate": "2008-06-24",
                          "videoUrl": "https://example.com/shadow_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "43min",
                          "releaseDate": "2001-10-15",
                          "videoUrl": "https://example.com/shadow_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "29min",
                          "releaseDate": "2020-01-24",
                          "videoUrl": "https://example.com/shadow_prophecy_ep11.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "22min",
                          "releaseDate": "2001-06-03",
                          "videoUrl": "https://example.com/shadow_prophecy_ep12.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "27min",
                          "releaseDate": "2004-05-20",
                          "videoUrl": "https://example.com/shadow_prophecy_ep13.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 14",
                          "episodeNumber": 14,
                          "duration": "30min",
                          "releaseDate": "2019-04-13",
                          "videoUrl": "https://example.com/shadow_prophecy_ep14.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2014,
                      "episodes": [
                        {
                          "title": "Shadow Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "20min",
                          "releaseDate": "2008-04-18",
                          "videoUrl": "https://example.com/shadow_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "50min",
                          "releaseDate": "2003-03-26",
                          "videoUrl": "https://example.com/shadow_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "44min",
                          "releaseDate": "2012-11-03",
                          "videoUrl": "https://example.com/shadow_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "34min",
                          "releaseDate": "2017-10-22",
                          "videoUrl": "https://example.com/shadow_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "34min",
                          "releaseDate": "2020-11-28",
                          "videoUrl": "https://example.com/shadow_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "34min",
                          "releaseDate": "2006-03-15",
                          "videoUrl": "https://example.com/shadow_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "31min",
                          "releaseDate": "2019-07-05",
                          "videoUrl": "https://example.com/shadow_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "20min",
                          "releaseDate": "2017-03-14",
                          "videoUrl": "https://example.com/shadow_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "49min",
                          "releaseDate": "2017-04-07",
                          "videoUrl": "https://example.com/shadow_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "48min",
                          "releaseDate": "2002-12-06",
                          "videoUrl": "https://example.com/shadow_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "42min",
                          "releaseDate": "2008-12-10",
                          "videoUrl": "https://example.com/shadow_prophecy_ep11.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Quest",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/dark_quest.jpg",
                  "cardImage": "https://example.com/cards/dark_quest.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Shadow Storm",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/shadow_storm.jpg",
                  "cardImage": "https://example.com/cards/shadow_storm.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Eternal Storm",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/eternal_storm.jpg",
                  "cardImage": "https://example.com/cards/eternal_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2023,
                      "episodes": [
                        {
                          "title": "Eternal Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "28min",
                          "releaseDate": "2009-03-22",
                          "videoUrl": "https://example.com/eternal_storm_ep1.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "35min",
                          "releaseDate": "2005-02-06",
                          "videoUrl": "https://example.com/eternal_storm_ep2.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "44min",
                          "releaseDate": "2018-04-26",
                          "videoUrl": "https://example.com/eternal_storm_ep3.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "50min",
                          "releaseDate": "2005-10-06",
                          "videoUrl": "https://example.com/eternal_storm_ep4.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "48min",
                          "releaseDate": "2002-08-03",
                          "videoUrl": "https://example.com/eternal_storm_ep5.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "26min",
                          "releaseDate": "2016-09-08",
                          "videoUrl": "https://example.com/eternal_storm_ep6.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "32min",
                          "releaseDate": "2017-09-07",
                          "videoUrl": "https://example.com/eternal_storm_ep7.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "28min",
                          "releaseDate": "2022-12-11",
                          "videoUrl": "https://example.com/eternal_storm_ep8.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "29min",
                          "releaseDate": "2013-08-07",
                          "videoUrl": "https://example.com/eternal_storm_ep9.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "30min",
                          "releaseDate": "2020-11-19",
                          "videoUrl": "https://example.com/eternal_storm_ep10.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "44min",
                          "releaseDate": "2018-04-03",
                          "videoUrl": "https://example.com/eternal_storm_ep11.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 12",
                          "episodeNumber": 12,
                          "duration": "28min",
                          "releaseDate": "2011-01-17",
                          "videoUrl": "https://example.com/eternal_storm_ep12.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 13",
                          "episodeNumber": 13,
                          "duration": "34min",
                          "releaseDate": "2004-03-29",
                          "videoUrl": "https://example.com/eternal_storm_ep13.mp4"
                        },
                        {
                          "title": "Eternal Storm - Episode 14",
                          "episodeNumber": 14,
                          "duration": "20min",
                          "releaseDate": "2009-08-28",
                          "videoUrl": "https://example.com/eternal_storm_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Prophecy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/eternal_prophecy.jpg",
                  "cardImage": "https://example.com/cards/eternal_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2017,
                      "episodes": [
                        {
                          "title": "Eternal Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "46min",
                          "releaseDate": "2002-06-11",
                          "videoUrl": "https://example.com/eternal_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "43min",
                          "releaseDate": "2016-08-14",
                          "videoUrl": "https://example.com/eternal_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "31min",
                          "releaseDate": "2013-06-22",
                          "videoUrl": "https://example.com/eternal_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "27min",
                          "releaseDate": "2003-10-05",
                          "videoUrl": "https://example.com/eternal_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "44min",
                          "releaseDate": "2003-09-17",
                          "videoUrl": "https://example.com/eternal_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "33min",
                          "releaseDate": "2003-11-01",
                          "videoUrl": "https://example.com/eternal_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "25min",
                          "releaseDate": "2013-05-02",
                          "videoUrl": "https://example.com/eternal_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "25min",
                          "releaseDate": "2005-09-24",
                          "videoUrl": "https://example.com/eternal_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "26min",
                          "releaseDate": "2010-03-30",
                          "videoUrl": "https://example.com/eternal_prophecy_ep9.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 10",
                          "episodeNumber": 10,
                          "duration": "41min",
                          "releaseDate": "2024-10-28",
                          "videoUrl": "https://example.com/eternal_prophecy_ep10.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 11",
                          "episodeNumber": 11,
                          "duration": "32min",
                          "releaseDate": "2019-06-28",
                          "videoUrl": "https://example.com/eternal_prophecy_ep11.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 12",
                          "episodeNumber": 12,
                          "duration": "31min",
                          "releaseDate": "2013-04-29",
                          "videoUrl": "https://example.com/eternal_prophecy_ep12.mp4"
                        },
                        {
                          "title": "Eternal Prophecy - Episode 13",
                          "episodeNumber": 13,
                          "duration": "31min",
                          "releaseDate": "2001-05-09",
                          "videoUrl": "https://example.com/eternal_prophecy_ep13.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Saga",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/legend_saga.jpg",
                  "cardImage": "https://example.com/cards/legend_saga.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2011,
                      "episodes": [
                        {
                          "title": "Legend Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "34min",
                          "releaseDate": "2010-06-19",
                          "videoUrl": "https://example.com/legend_saga_ep1.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "46min",
                          "releaseDate": "2000-08-11",
                          "videoUrl": "https://example.com/legend_saga_ep2.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "47min",
                          "releaseDate": "2017-04-04",
                          "videoUrl": "https://example.com/legend_saga_ep3.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "38min",
                          "releaseDate": "2011-09-18",
                          "videoUrl": "https://example.com/legend_saga_ep4.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "28min",
                          "releaseDate": "2019-07-14",
                          "videoUrl": "https://example.com/legend_saga_ep5.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "37min",
                          "releaseDate": "2001-06-29",
                          "videoUrl": "https://example.com/legend_saga_ep6.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "43min",
                          "releaseDate": "2016-10-20",
                          "videoUrl": "https://example.com/legend_saga_ep7.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "38min",
                          "releaseDate": "2023-09-07",
                          "videoUrl": "https://example.com/legend_saga_ep8.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "25min",
                          "releaseDate": "2010-02-25",
                          "videoUrl": "https://example.com/legend_saga_ep9.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "46min",
                          "releaseDate": "2002-03-28",
                          "videoUrl": "https://example.com/legend_saga_ep10.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "26min",
                          "releaseDate": "2006-04-28",
                          "videoUrl": "https://example.com/legend_saga_ep11.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 12",
                          "episodeNumber": 12,
                          "duration": "40min",
                          "releaseDate": "2011-12-11",
                          "videoUrl": "https://example.com/legend_saga_ep12.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 13",
                          "episodeNumber": 13,
                          "duration": "23min",
                          "releaseDate": "2016-09-29",
                          "videoUrl": "https://example.com/legend_saga_ep13.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 14",
                          "episodeNumber": 14,
                          "duration": "37min",
                          "releaseDate": "2003-08-16",
                          "videoUrl": "https://example.com/legend_saga_ep14.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2015,
                      "episodes": [
                        {
                          "title": "Legend Saga - Episode 1",
                          "episodeNumber": 1,
                          "duration": "47min",
                          "releaseDate": "2010-08-31",
                          "videoUrl": "https://example.com/legend_saga_ep1.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 2",
                          "episodeNumber": 2,
                          "duration": "49min",
                          "releaseDate": "2008-07-26",
                          "videoUrl": "https://example.com/legend_saga_ep2.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 3",
                          "episodeNumber": 3,
                          "duration": "35min",
                          "releaseDate": "2019-07-06",
                          "videoUrl": "https://example.com/legend_saga_ep3.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 4",
                          "episodeNumber": 4,
                          "duration": "21min",
                          "releaseDate": "2022-02-26",
                          "videoUrl": "https://example.com/legend_saga_ep4.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 5",
                          "episodeNumber": 5,
                          "duration": "32min",
                          "releaseDate": "2024-07-14",
                          "videoUrl": "https://example.com/legend_saga_ep5.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 6",
                          "episodeNumber": 6,
                          "duration": "47min",
                          "releaseDate": "2000-01-09",
                          "videoUrl": "https://example.com/legend_saga_ep6.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 7",
                          "episodeNumber": 7,
                          "duration": "21min",
                          "releaseDate": "2009-07-30",
                          "videoUrl": "https://example.com/legend_saga_ep7.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 8",
                          "episodeNumber": 8,
                          "duration": "41min",
                          "releaseDate": "2014-12-02",
                          "videoUrl": "https://example.com/legend_saga_ep8.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 9",
                          "episodeNumber": 9,
                          "duration": "44min",
                          "releaseDate": "2001-11-13",
                          "videoUrl": "https://example.com/legend_saga_ep9.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 10",
                          "episodeNumber": 10,
                          "duration": "25min",
                          "releaseDate": "2011-03-25",
                          "videoUrl": "https://example.com/legend_saga_ep10.mp4"
                        },
                        {
                          "title": "Legend Saga - Episode 11",
                          "episodeNumber": 11,
                          "duration": "35min",
                          "releaseDate": "2008-06-06",
                          "videoUrl": "https://example.com/legend_saga_ep11.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Eternal Prophecy",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/eternal_prophecy.jpg",
                  "cardImage": "https://example.com/cards/eternal_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Dark Storm",
                  "description": "A thrilling drama tv shows.",
                  "posterImage": "https://example.com/posters/dark_storm.jpg",
                  "cardImage": "https://example.com/cards/dark_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2012,
                      "episodes": [
                        {
                          "title": "Dark Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "46min",
                          "releaseDate": "2013-11-27",
                          "videoUrl": "https://example.com/dark_storm_ep1.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "44min",
                          "releaseDate": "2015-02-07",
                          "videoUrl": "https://example.com/dark_storm_ep2.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "37min",
                          "releaseDate": "2012-12-13",
                          "videoUrl": "https://example.com/dark_storm_ep3.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "26min",
                          "releaseDate": "2014-02-21",
                          "videoUrl": "https://example.com/dark_storm_ep4.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "37min",
                          "releaseDate": "2016-02-29",
                          "videoUrl": "https://example.com/dark_storm_ep5.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "37min",
                          "releaseDate": "2024-05-19",
                          "videoUrl": "https://example.com/dark_storm_ep6.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "24min",
                          "releaseDate": "2011-07-02",
                          "videoUrl": "https://example.com/dark_storm_ep7.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "21min",
                          "releaseDate": "2013-10-28",
                          "videoUrl": "https://example.com/dark_storm_ep8.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "34min",
                          "releaseDate": "2009-08-14",
                          "videoUrl": "https://example.com/dark_storm_ep9.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "41min",
                          "releaseDate": "2021-09-28",
                          "videoUrl": "https://example.com/dark_storm_ep10.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 11",
                          "episodeNumber": 11,
                          "duration": "28min",
                          "releaseDate": "2006-10-29",
                          "videoUrl": "https://example.com/dark_storm_ep11.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 12",
                          "episodeNumber": 12,
                          "duration": "40min",
                          "releaseDate": "2014-07-05",
                          "videoUrl": "https://example.com/dark_storm_ep12.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2020,
                      "episodes": [
                        {
                          "title": "Dark Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "45min",
                          "releaseDate": "2020-09-21",
                          "videoUrl": "https://example.com/dark_storm_ep1.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "49min",
                          "releaseDate": "2001-08-26",
                          "videoUrl": "https://example.com/dark_storm_ep2.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "35min",
                          "releaseDate": "2015-01-27",
                          "videoUrl": "https://example.com/dark_storm_ep3.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "20min",
                          "releaseDate": "2023-12-20",
                          "videoUrl": "https://example.com/dark_storm_ep4.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "39min",
                          "releaseDate": "2019-05-03",
                          "videoUrl": "https://example.com/dark_storm_ep5.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "38min",
                          "releaseDate": "2000-06-29",
                          "videoUrl": "https://example.com/dark_storm_ep6.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "31min",
                          "releaseDate": "2008-08-25",
                          "videoUrl": "https://example.com/dark_storm_ep7.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "43min",
                          "releaseDate": "2020-03-23",
                          "videoUrl": "https://example.com/dark_storm_ep8.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "21min",
                          "releaseDate": "2023-06-10",
                          "videoUrl": "https://example.com/dark_storm_ep9.mp4"
                        },
                        {
                          "title": "Dark Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "45min",
                          "releaseDate": "2017-04-22",
                          "videoUrl": "https://example.com/dark_storm_ep10.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Comedy",
          "image": "https://example.com/images/comedy.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Dark Quest",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/dark_quest.jpg",
                  "cardImage": "https://example.com/cards/dark_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Dark Prophecy",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/dark_prophecy.jpg",
                  "cardImage": "https://example.com/cards/dark_prophecy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Dark Legacy",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/dark_legacy.jpg",
                  "cardImage": "https://example.com/cards/dark_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Saga",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/phantom_saga.jpg",
                  "cardImage": "https://example.com/cards/phantom_saga.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Dark Storm",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/dark_storm.jpg",
                  "cardImage": "https://example.com/cards/dark_storm.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Legend Saga",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/legend_saga.jpg",
                  "cardImage": "https://example.com/cards/legend_saga.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Legacy",
                  "description": "A thrilling comedy movies.",
                  "posterImage": "https://example.com/posters/phantom_legacy.jpg",
                  "cardImage": "https://example.com/cards/phantom_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Dark Saga",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/dark_saga.jpg",
                  "cardImage": "https://example.com/cards/dark_saga.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Infinity Empire",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/infinity_empire.jpg",
                  "cardImage": "https://example.com/cards/infinity_empire.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2019,
                      "episodes": [
                        {
                          "title": "Infinity Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "39min",
                          "releaseDate": "2015-12-30",
                          "videoUrl": "https://example.com/infinity_empire_ep1.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "39min",
                          "releaseDate": "2012-01-06",
                          "videoUrl": "https://example.com/infinity_empire_ep2.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "31min",
                          "releaseDate": "2021-08-04",
                          "videoUrl": "https://example.com/infinity_empire_ep3.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "34min",
                          "releaseDate": "2013-08-29",
                          "videoUrl": "https://example.com/infinity_empire_ep4.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "47min",
                          "releaseDate": "2018-12-12",
                          "videoUrl": "https://example.com/infinity_empire_ep5.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "34min",
                          "releaseDate": "2021-03-15",
                          "videoUrl": "https://example.com/infinity_empire_ep6.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "32min",
                          "releaseDate": "2020-12-20",
                          "videoUrl": "https://example.com/infinity_empire_ep7.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "25min",
                          "releaseDate": "2009-07-27",
                          "videoUrl": "https://example.com/infinity_empire_ep8.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "49min",
                          "releaseDate": "2001-03-23",
                          "videoUrl": "https://example.com/infinity_empire_ep9.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "36min",
                          "releaseDate": "2000-07-19",
                          "videoUrl": "https://example.com/infinity_empire_ep10.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2007,
                      "episodes": [
                        {
                          "title": "Infinity Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "37min",
                          "releaseDate": "2022-02-17",
                          "videoUrl": "https://example.com/infinity_empire_ep1.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "29min",
                          "releaseDate": "2019-10-15",
                          "videoUrl": "https://example.com/infinity_empire_ep2.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "43min",
                          "releaseDate": "2012-06-05",
                          "videoUrl": "https://example.com/infinity_empire_ep3.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "37min",
                          "releaseDate": "2004-01-11",
                          "videoUrl": "https://example.com/infinity_empire_ep4.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "49min",
                          "releaseDate": "2014-11-23",
                          "videoUrl": "https://example.com/infinity_empire_ep5.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "39min",
                          "releaseDate": "2020-09-11",
                          "videoUrl": "https://example.com/infinity_empire_ep6.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "46min",
                          "releaseDate": "2017-02-04",
                          "videoUrl": "https://example.com/infinity_empire_ep7.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "49min",
                          "releaseDate": "2017-05-29",
                          "videoUrl": "https://example.com/infinity_empire_ep8.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "43min",
                          "releaseDate": "2020-02-09",
                          "videoUrl": "https://example.com/infinity_empire_ep9.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "45min",
                          "releaseDate": "2015-02-14",
                          "videoUrl": "https://example.com/infinity_empire_ep10.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "27min",
                          "releaseDate": "2014-12-10",
                          "videoUrl": "https://example.com/infinity_empire_ep11.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 12",
                          "episodeNumber": 12,
                          "duration": "39min",
                          "releaseDate": "2010-01-19",
                          "videoUrl": "https://example.com/infinity_empire_ep12.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 13",
                          "episodeNumber": 13,
                          "duration": "23min",
                          "releaseDate": "2022-12-14",
                          "videoUrl": "https://example.com/infinity_empire_ep13.mp4"
                        },
                        {
                          "title": "Infinity Empire - Episode 14",
                          "episodeNumber": 14,
                          "duration": "48min",
                          "releaseDate": "2017-05-09",
                          "videoUrl": "https://example.com/infinity_empire_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Dark Storm",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/dark_storm.jpg",
                  "cardImage": "https://example.com/cards/dark_storm.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Legend Prophecy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/legend_prophecy.jpg",
                  "cardImage": "https://example.com/cards/legend_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Legend Storm",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/legend_storm.jpg",
                  "cardImage": "https://example.com/cards/legend_storm.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2012,
                      "episodes": [
                        {
                          "title": "Legend Storm - Episode 1",
                          "episodeNumber": 1,
                          "duration": "25min",
                          "releaseDate": "2021-05-17",
                          "videoUrl": "https://example.com/legend_storm_ep1.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 2",
                          "episodeNumber": 2,
                          "duration": "48min",
                          "releaseDate": "2006-05-26",
                          "videoUrl": "https://example.com/legend_storm_ep2.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 3",
                          "episodeNumber": 3,
                          "duration": "39min",
                          "releaseDate": "2020-10-18",
                          "videoUrl": "https://example.com/legend_storm_ep3.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 4",
                          "episodeNumber": 4,
                          "duration": "27min",
                          "releaseDate": "2009-10-29",
                          "videoUrl": "https://example.com/legend_storm_ep4.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 5",
                          "episodeNumber": 5,
                          "duration": "20min",
                          "releaseDate": "2023-01-20",
                          "videoUrl": "https://example.com/legend_storm_ep5.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 6",
                          "episodeNumber": 6,
                          "duration": "41min",
                          "releaseDate": "2009-10-23",
                          "videoUrl": "https://example.com/legend_storm_ep6.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 7",
                          "episodeNumber": 7,
                          "duration": "48min",
                          "releaseDate": "2013-12-08",
                          "videoUrl": "https://example.com/legend_storm_ep7.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 8",
                          "episodeNumber": 8,
                          "duration": "46min",
                          "releaseDate": "2003-12-28",
                          "videoUrl": "https://example.com/legend_storm_ep8.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 9",
                          "episodeNumber": 9,
                          "duration": "49min",
                          "releaseDate": "2000-02-24",
                          "videoUrl": "https://example.com/legend_storm_ep9.mp4"
                        },
                        {
                          "title": "Legend Storm - Episode 10",
                          "episodeNumber": 10,
                          "duration": "32min",
                          "releaseDate": "2012-04-03",
                          "videoUrl": "https://example.com/legend_storm_ep10.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Shadow Prophecy",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/shadow_prophecy.jpg",
                  "cardImage": "https://example.com/cards/shadow_prophecy.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2011,
                      "episodes": [
                        {
                          "title": "Shadow Prophecy - Episode 1",
                          "episodeNumber": 1,
                          "duration": "50min",
                          "releaseDate": "2018-09-11",
                          "videoUrl": "https://example.com/shadow_prophecy_ep1.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 2",
                          "episodeNumber": 2,
                          "duration": "39min",
                          "releaseDate": "2018-09-23",
                          "videoUrl": "https://example.com/shadow_prophecy_ep2.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 3",
                          "episodeNumber": 3,
                          "duration": "28min",
                          "releaseDate": "2024-04-21",
                          "videoUrl": "https://example.com/shadow_prophecy_ep3.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 4",
                          "episodeNumber": 4,
                          "duration": "50min",
                          "releaseDate": "2003-12-11",
                          "videoUrl": "https://example.com/shadow_prophecy_ep4.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 5",
                          "episodeNumber": 5,
                          "duration": "40min",
                          "releaseDate": "2010-10-01",
                          "videoUrl": "https://example.com/shadow_prophecy_ep5.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 6",
                          "episodeNumber": 6,
                          "duration": "26min",
                          "releaseDate": "2009-07-15",
                          "videoUrl": "https://example.com/shadow_prophecy_ep6.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 7",
                          "episodeNumber": 7,
                          "duration": "47min",
                          "releaseDate": "2022-06-05",
                          "videoUrl": "https://example.com/shadow_prophecy_ep7.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 8",
                          "episodeNumber": 8,
                          "duration": "46min",
                          "releaseDate": "2006-05-06",
                          "videoUrl": "https://example.com/shadow_prophecy_ep8.mp4"
                        },
                        {
                          "title": "Shadow Prophecy - Episode 9",
                          "episodeNumber": 9,
                          "duration": "33min",
                          "releaseDate": "2002-09-15",
                          "videoUrl": "https://example.com/shadow_prophecy_ep9.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Mystic Storm",
                  "description": "A thrilling comedy tv shows.",
                  "posterImage": "https://example.com/posters/mystic_storm.jpg",
                  "cardImage": "https://example.com/cards/mystic_storm.jpg",
                  "isCarousel": false,
                  "seasons": []
                }
              ]
            }
          ]
        },
        {
          "name": "Sci-Fi",
          "image": "https://example.com/images/sci-fi.jpg",
          "contentTypes": [
            {
              "type": "Movies",
              "contents": [
                {
                  "title": "Dark Storm",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/dark_storm.jpg",
                  "cardImage": "https://example.com/cards/dark_storm.jpg",
                  "isCarousel": false,
                  "movieParts": [
                    {
                      "title": "Dark Storm Part 1",
                      "partNumber": 1,
                      "releaseYear": 2003,
                      "duration": "147min",
                      "videoUrl": "https://example.com/dark_storm_part1.mp4"
                    }
                  ]
                },
                {
                  "title": "Mystic Quest",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/mystic_quest.jpg",
                  "cardImage": "https://example.com/cards/mystic_quest.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Phantom Warrior",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/phantom_warrior.jpg",
                  "cardImage": "https://example.com/cards/phantom_warrior.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Legend Storm",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/legend_storm.jpg",
                  "cardImage": "https://example.com/cards/legend_storm.jpg",
                  "isCarousel": false,
                  "movieParts": []
                },
                {
                  "title": "Eternal Legacy",
                  "description": "A thrilling sci-fi movies.",
                  "posterImage": "https://example.com/posters/eternal_legacy.jpg",
                  "cardImage": "https://example.com/cards/eternal_legacy.jpg",
                  "isCarousel": false,
                  "movieParts": []
                }
              ]
            },
            {
              "type": "TV Shows",
              "contents": [
                {
                  "title": "Infinity Quest",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/infinity_quest.jpg",
                  "cardImage": "https://example.com/cards/infinity_quest.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Dark Empire",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/dark_empire.jpg",
                  "cardImage": "https://example.com/cards/dark_empire.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2009,
                      "episodes": [
                        {
                          "title": "Dark Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "21min",
                          "releaseDate": "2020-04-05",
                          "videoUrl": "https://example.com/dark_empire_ep1.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "38min",
                          "releaseDate": "2019-06-25",
                          "videoUrl": "https://example.com/dark_empire_ep2.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "42min",
                          "releaseDate": "2004-09-26",
                          "videoUrl": "https://example.com/dark_empire_ep3.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "47min",
                          "releaseDate": "2011-05-26",
                          "videoUrl": "https://example.com/dark_empire_ep4.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "38min",
                          "releaseDate": "2013-06-16",
                          "videoUrl": "https://example.com/dark_empire_ep5.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "27min",
                          "releaseDate": "2006-06-03",
                          "videoUrl": "https://example.com/dark_empire_ep6.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "32min",
                          "releaseDate": "2010-07-27",
                          "videoUrl": "https://example.com/dark_empire_ep7.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "25min",
                          "releaseDate": "2000-01-13",
                          "videoUrl": "https://example.com/dark_empire_ep8.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "46min",
                          "releaseDate": "2017-09-01",
                          "videoUrl": "https://example.com/dark_empire_ep9.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "49min",
                          "releaseDate": "2012-01-18",
                          "videoUrl": "https://example.com/dark_empire_ep10.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "23min",
                          "releaseDate": "2021-11-18",
                          "videoUrl": "https://example.com/dark_empire_ep11.mp4"
                        }
                      ]
                    },
                    {
                      "seasonNumber": 2,
                      "releaseYear": 2011,
                      "episodes": [
                        {
                          "title": "Dark Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "35min",
                          "releaseDate": "2008-09-15",
                          "videoUrl": "https://example.com/dark_empire_ep1.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "28min",
                          "releaseDate": "2000-03-08",
                          "videoUrl": "https://example.com/dark_empire_ep2.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "47min",
                          "releaseDate": "2013-04-11",
                          "videoUrl": "https://example.com/dark_empire_ep3.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "46min",
                          "releaseDate": "2014-06-03",
                          "videoUrl": "https://example.com/dark_empire_ep4.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "30min",
                          "releaseDate": "2014-10-27",
                          "videoUrl": "https://example.com/dark_empire_ep5.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "23min",
                          "releaseDate": "2013-12-08",
                          "videoUrl": "https://example.com/dark_empire_ep6.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "31min",
                          "releaseDate": "2008-06-25",
                          "videoUrl": "https://example.com/dark_empire_ep7.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "23min",
                          "releaseDate": "2022-08-27",
                          "videoUrl": "https://example.com/dark_empire_ep8.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "34min",
                          "releaseDate": "2020-09-01",
                          "videoUrl": "https://example.com/dark_empire_ep9.mp4"
                        },
                        {
                          "title": "Dark Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "43min",
                          "releaseDate": "2008-01-23",
                          "videoUrl": "https://example.com/dark_empire_ep10.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Phantom Empire",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/phantom_empire.jpg",
                  "cardImage": "https://example.com/cards/phantom_empire.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2005,
                      "episodes": [
                        {
                          "title": "Phantom Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "40min",
                          "releaseDate": "2006-06-26",
                          "videoUrl": "https://example.com/phantom_empire_ep1.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "27min",
                          "releaseDate": "2017-08-08",
                          "videoUrl": "https://example.com/phantom_empire_ep2.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "22min",
                          "releaseDate": "2002-11-29",
                          "videoUrl": "https://example.com/phantom_empire_ep3.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "34min",
                          "releaseDate": "2023-10-17",
                          "videoUrl": "https://example.com/phantom_empire_ep4.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "28min",
                          "releaseDate": "2003-07-14",
                          "videoUrl": "https://example.com/phantom_empire_ep5.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "45min",
                          "releaseDate": "2020-08-27",
                          "videoUrl": "https://example.com/phantom_empire_ep6.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "27min",
                          "releaseDate": "2011-09-02",
                          "videoUrl": "https://example.com/phantom_empire_ep7.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "32min",
                          "releaseDate": "2020-04-01",
                          "videoUrl": "https://example.com/phantom_empire_ep8.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "29min",
                          "releaseDate": "2014-09-28",
                          "videoUrl": "https://example.com/phantom_empire_ep9.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "20min",
                          "releaseDate": "2001-10-12",
                          "videoUrl": "https://example.com/phantom_empire_ep10.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "45min",
                          "releaseDate": "2019-11-06",
                          "videoUrl": "https://example.com/phantom_empire_ep11.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 12",
                          "episodeNumber": 12,
                          "duration": "50min",
                          "releaseDate": "2005-09-01",
                          "videoUrl": "https://example.com/phantom_empire_ep12.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 13",
                          "episodeNumber": 13,
                          "duration": "36min",
                          "releaseDate": "2012-09-21",
                          "videoUrl": "https://example.com/phantom_empire_ep13.mp4"
                        },
                        {
                          "title": "Phantom Empire - Episode 14",
                          "episodeNumber": 14,
                          "duration": "22min",
                          "releaseDate": "2009-07-10",
                          "videoUrl": "https://example.com/phantom_empire_ep14.mp4"
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Legend Empire",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/legend_empire.jpg",
                  "cardImage": "https://example.com/cards/legend_empire.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Mystic Legacy",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/mystic_legacy.jpg",
                  "cardImage": "https://example.com/cards/mystic_legacy.jpg",
                  "isCarousel": false,
                  "seasons": []
                },
                {
                  "title": "Eternal Empire",
                  "description": "A thrilling sci-fi tv shows.",
                  "posterImage": "https://example.com/posters/eternal_empire.jpg",
                  "cardImage": "https://example.com/cards/eternal_empire.jpg",
                  "isCarousel": false,
                  "seasons": [
                    {
                      "seasonNumber": 1,
                      "releaseYear": 2007,
                      "episodes": [
                        {
                          "title": "Eternal Empire - Episode 1",
                          "episodeNumber": 1,
                          "duration": "32min",
                          "releaseDate": "2000-08-27",
                          "videoUrl": "https://example.com/eternal_empire_ep1.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 2",
                          "episodeNumber": 2,
                          "duration": "29min",
                          "releaseDate": "2001-01-09",
                          "videoUrl": "https://example.com/eternal_empire_ep2.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 3",
                          "episodeNumber": 3,
                          "duration": "37min",
                          "releaseDate": "2012-12-14",
                          "videoUrl": "https://example.com/eternal_empire_ep3.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 4",
                          "episodeNumber": 4,
                          "duration": "21min",
                          "releaseDate": "2012-05-17",
                          "videoUrl": "https://example.com/eternal_empire_ep4.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 5",
                          "episodeNumber": 5,
                          "duration": "27min",
                          "releaseDate": "2019-10-09",
                          "videoUrl": "https://example.com/eternal_empire_ep5.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 6",
                          "episodeNumber": 6,
                          "duration": "48min",
                          "releaseDate": "2021-01-15",
                          "videoUrl": "https://example.com/eternal_empire_ep6.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 7",
                          "episodeNumber": 7,
                          "duration": "36min",
                          "releaseDate": "2007-05-06",
                          "videoUrl": "https://example.com/eternal_empire_ep7.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 8",
                          "episodeNumber": 8,
                          "duration": "29min",
                          "releaseDate": "2020-04-02",
                          "videoUrl": "https://example.com/eternal_empire_ep8.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 9",
                          "episodeNumber": 9,
                          "duration": "23min",
                          "releaseDate": "2015-11-26",
                          "videoUrl": "https://example.com/eternal_empire_ep9.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 10",
                          "episodeNumber": 10,
                          "duration": "28min",
                          "releaseDate": "2021-11-10",
                          "videoUrl": "https://example.com/eternal_empire_ep10.mp4"
                        },
                        {
                          "title": "Eternal Empire - Episode 11",
                          "episodeNumber": 11,
                          "duration": "20min",
                          "releaseDate": "2006-06-29",
                          "videoUrl": "https://example.com/eternal_empire_ep11.mp4"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
  
  await Country.insertMany(countries);
  console.log("✅ Database seeded successfully!");
  mongoose.connection.close();
};

seedData();