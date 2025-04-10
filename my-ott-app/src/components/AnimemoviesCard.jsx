import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation

const AnimeMoviesCardScroller = () => {
  const [animeMovies, setAnimeMovies] = useState([]);

  useEffect(() => {
    const fetchAnimeMovies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/animemovies"); // ✅ Fetch anime movies from backend
        setAnimeMovies(response.data);
      } catch (error) {
        console.error("Error fetching anime movies data:", error);
      }
    };

    fetchAnimeMovies();
  }, []);

  return (
    <div className="overflow-x-auto scroll-smooth py-4 px-4 no-scrollbar">
      <div className="flex space-x-4 flex-nowrap">
        {animeMovies.map((anime, index) => (
          <Link
            to={`/watch/${encodeURIComponent(anime.countryName)}/${encodeURIComponent(anime.genreName)}/${encodeURIComponent(anime.title)}`} // ✅ Encode URL safely
            key={index}
          >
            <div className="flex-shrink-0 cursor-pointer">
              <div className="w-52 h-64 bg-gray-900 rounded-xl shadow-md overflow-hidden">
                {/* ✅ Ensure image source is correctly mapped */}
                <img
                  src={anime.img || "https://via.placeholder.com/150"} // ✅ Handle missing images
                  alt={anime.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="text-lg font-semibold text-white">{anime.title}</h3>
                  <p className="text-gray-400 text-sm">{anime.genreName || "Unknown Genre"}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimeMoviesCardScroller;
