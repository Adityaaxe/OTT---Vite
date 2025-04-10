import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CountryCardScroller = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://uniconott.onrender.com/api/countries-list");
        // Filter out any empty or undefined country names
        const validCountries = response.data.filter(country => 
          country.name && country.name.trim() !== ''
        );
        setCountries(validCountries);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryClick = (countryName) => {
    if (countryName) {
      navigate(`/country/${encodeURIComponent(countryName)}`);
    }
  };

  return (
    <div className="overflow-x-auto scroll-smooth py-4 px-4 no-scrollbar">
      <div className="flex space-x-4 flex-nowrap">
        {countries.map((country, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleCountryClick(country.name)}
          >
            <div className="w-52 h-32 bg-gray-800 rounded-xl shadow-md overflow-hidden flex items-center justify-center">
              <h3 className="text-lg font-semibold text-white">{country.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCardScroller;
