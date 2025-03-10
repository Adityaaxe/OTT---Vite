import React from "react";

const CountryCardScroller = () => {
  const countries = [
    { name: "Japan", image: "https://via.placeholder.com/150" },
    { name: "USA", image: "https://via.placeholder.com/150" },
    { name: "France", image: "https://via.placeholder.com/150" },
    { name: "Brazil", image: "https://via.placeholder.com/150" },
    { name: "India", image: "https://via.placeholder.com/150" },
    { name: "Australia", image: "https://via.placeholder.com/150" },
    { name: "USA", image: "https://via.placeholder.com/150" },
    { name: "France", image: "https://via.placeholder.com/150" },
    { name: "Brazil", image: "https://via.placeholder.com/150" },
    { name: "India", image: "https://via.placeholder.com/150" },
    { name: "Australia", image: "https://via.placeholder.com/150" },
    // Add more countries as needed
  ];

  return (
    <div className="overflow-x-auto scroll-smooth py-4 px-4 no-scrollbar ">
      <div className="flex space-x-4 flex-nowrap">
        {countries.map((country, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="w-60 h-32 bg-gray-800 rounded-xl shadow-md overflow-hidden ">
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-3 text-center">
                <h3 className="text-lg font-semibold text-white">{country.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCardScroller;
