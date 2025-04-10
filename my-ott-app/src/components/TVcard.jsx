import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TVShowCardScroller = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const response = await axios.get("https://uniconott.onrender.com/api/tvshows"); // ✅ Fetch only TV shows
        setTVShows(response.data);
      } catch (error) {
        console.error("Error fetching TV show data:", error);
      }
    };

    fetchTVShows();
  }, []);

  return (
    <div className="overflow-x-auto scroll-smooth py-4 px-4 no-scrollbar">
      <div className="flex space-x-4 flex-nowrap">
        {tvShows.map((show, index) => (
          <Link
            to={`/watch/${encodeURIComponent(show.countryName)}/${encodeURIComponent(show.genreName)}/${encodeURIComponent(show.title)}`} 
            key={index}
          >
            <div className="flex-shrink-0 cursor-pointer">
              <div className="w-52 h-64 bg-gray-900 rounded-xl shadow-md overflow-hidden">
                <img
                  src={show.img || "https://via.placeholder.com/150"} 
                  alt={show.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="text-lg font-semibold text-white">{show.title}</h3>
                  <p className="text-gray-400 text-sm">{show.genreName || "Unknown Genre"}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TVShowCardScroller;
