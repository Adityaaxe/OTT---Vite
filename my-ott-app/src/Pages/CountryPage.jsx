import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CountryPage = () => {
  const { countryName } = useParams();
  const navigate = useNavigate(); // Add useNavigate hook
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const encodedCountryName = encodeURIComponent(countryName);
        setLoading(true);

        const response = await axios.get(
          `https://uniconott.onrender.com/api/countries/${encodedCountryName}`
        );
        
        setCountryData(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching country data:", error);
        setError(error.response?.data?.message || "Failed to fetch country data");
      } finally {
        setLoading(false);
      }
    };

    if (countryName) {
      fetchCountryData();
    }
  }, [countryName]);

  // Handle movie click to navigate to player page
  const handleMovieClick = (movieId) => {
    navigate(`/watch/${movieId}`);
  };

  if (loading) return <div className="text-center text-white">Loading...</div>;
  
  if (error) return <div className="text-center text-red-500">{error}</div>;
  
  if (!countryData) return <div className="text-center text-white">No country data found</div>;

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6">{countryData.name} Movies</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {countryData.movies.map((movie) => (
          <div 
            key={movie.id} 
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleMovieClick(movie.id)} // Add click handler
          >
            <img 
              src={movie.cardImage || movie.posterImage || 'https://via.placeholder.com/300x450'} 
              alt={movie.title} 
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold truncate">{movie.title}</h2>
              <p className="text-sm text-gray-400">
                {movie.genres?.[0] || 'Unknown Genre'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryPage;