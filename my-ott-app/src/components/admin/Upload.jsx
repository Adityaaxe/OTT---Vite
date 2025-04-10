// UploadComponent.jsx
import React, { useState } from "react";
import axios from "axios";

export default function UploadComponent() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    overview: "",
    genres: "",
    keywords: "",
    spoken_languages: "",
    production_countries: "",
    cast: "",
    directors: "",
    writers: "",
    Posterimg: "",
    Cardimg: "",
    isCarousel: false,
    VideoURL: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      genres: formData.genres.split(",").map((item) => item.trim()),
      keywords: formData.keywords.split(",").map((item) => item.trim()),
      spoken_languages: formData.spoken_languages.split(",").map((item) => item.trim()),
      production_countries: formData.production_countries.split(",").map((item) => item.trim()),
      cast: formData.cast.split(",").map((item) => item.trim()),
      directors: formData.directors.split(",").map((item) => item.trim()),
      writers: formData.writers.split(",").map((item) => item.trim()),
    };

    try {
      const res = await axios.post("/api/movies/upload", payload);
      alert("Content uploaded successfully!");
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded-xl">
      {Object.entries(formData).map(([key, value]) => {
        if (typeof value === "boolean") {
          return (
            <div key={key} className="flex items-center">
              <input
                type="checkbox"
                name={key}
                checked={value}
                onChange={handleChange}
                className="mr-2"
              />
              <label>{key}</label>
            </div>
          );
        }
        return (
          <div key={key}>
            <label className="block mb-1 capitalize">{key.replace(/_/g, " ")}</label>
            <input
              type="text"
              name={key}
              value={value}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
        );
      })}
      <button
        type="submit"
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
      >
        Upload Content
      </button>
    </form>
  );
}
