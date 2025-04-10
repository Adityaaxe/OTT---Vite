import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const WatchlistCardScroller = () => {
  const [watchlistMovies, setWatchlistMovies] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchWatchlistMovies = async () => {
      try {
        if (!user?.id) return;

        const response = await axios.get(
          `https://uniconott.onrender.com/api/user/watchlist-content/${user.id}`
        );
        setWatchlistMovies(response.data);
      } catch (error) {
        console.error("Error fetching watchlist movies:", error);
      }
    };

    fetchWatchlistMovies();
  }, [user]);

  return (
    <div className="overflow-x-auto scroll-smooth py-4 px-4 no-scrollbar">
      <div className="flex space-x-4 flex-nowrap">
        {watchlistMovies.map((movie) => (
          <Link to={`/watch/${movie._id}`} key={movie._id}>
            <div className="flex-shrink-0 cursor-pointer">
              <div className="w-52 h-64 bg-gray-900 rounded-xl shadow-md hover:scale-105 transition-transform overflow-hidden">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="text-lg font-semibold text-white truncate">
                    {movie.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {movie.genres?.length > 0
                      ? movie.genres.join(", ")
                      : "Unknown Genre"}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchlistCardScroller;
