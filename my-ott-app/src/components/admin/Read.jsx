import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ReadComponent() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/movies`);
        setMovies(res.data);
      } catch (err) {
        console.error("Failed to fetch movies", err);
      }
    };
    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const combinedData = `${movie.title} ${movie.genres?.join(" ")} ${movie.production_countries?.join(" ")}`.toLowerCase();
    return combinedData.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">All Uploaded Content</h2>
      <input
        type="text"
        placeholder="Search by title, genre, or country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
      />

      <table className="w-full text-left border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-2 border border-gray-600">ID</th>
            <th className="p-2 border border-gray-600">Title</th>
            <th className="p-2 border border-gray-600">Genres</th>
            <th className="p-2 border border-gray-600">Country</th>
            <th className="p-2 border border-gray-600">Carousel</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <tr key={movie.id} className="hover:bg-gray-800">
                <td className="p-2 border border-gray-700">{movie.id}</td>
                <td className="p-2 border border-gray-700">{movie.title}</td>
                <td className="p-2 border border-gray-700">{movie.genres?.join(", ")}</td>
                <td className="p-2 border border-gray-700">{movie.production_countries?.join(", ")}</td>
                <td className="p-2 border border-gray-700">{movie.isCarousel ? "Yes" : "No"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-400">
                No content found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
