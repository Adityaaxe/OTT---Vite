import React from "react";
import Carousel from "../components/Carousel"
import CountryCardScroller from "../components/CountryCard";


const HomePage = () => {
  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white">
      <Carousel />
      <div className="bg-black text-center text-white pt-5 text-lg">Watch Movies, Series, Drama, and much more... of different Countries</div>
      <CountryCardScroller />
    </div>
  );
};

export default HomePage;
