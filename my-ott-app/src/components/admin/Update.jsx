import React, { useState } from "react";
import axios from "axios";

export default function UpdateComponent() {
  const [movieId, setMovieId] = useState("");
  const [updateData, setUpdateData] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!movieId) return setStatus("Please enter movie ID.");
    try {
      await axios.put(`http://localhost:5000/api/movies/${movieId}`, updateData);
      setStatus("Movie updated successfully!");
    } catch (error) {
      console.error(error);
      setStatus("Update failed.");
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Update Content</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter Movie ID"
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          name="title"
          placeholder="New Title"
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <textarea
          name="overview"
          placeholder="New Overview"
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          name="genres"
          placeholder="New Genres (comma separated)"
          onChange={(e) =>
            setUpdateData((prev) => ({
              ...prev,
              genres: e.target.value.split(",").map((g) => g.trim()),
            }))
          }
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        {/* Add other fields as needed */}
        <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
          Update
        </button>
        {status && <p className="mt-2">{status}</p>}
      </form>
    </div>
  );
}
