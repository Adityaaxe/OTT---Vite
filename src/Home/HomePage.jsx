import React from "react";
import Carousel from "../components/Carousel"
import CountryCardScroller from "../components/CountryCard";


const HomePage = () => {
  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white">
      <Carousel />
      <CountryCardScroller />
    </div>
  );
};

export default HomePage;
