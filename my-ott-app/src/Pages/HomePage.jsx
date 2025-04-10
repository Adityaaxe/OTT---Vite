import React from "react";
import Carousel from "../components/Carousel"
import CountryCardScroller from "../components/CountryCard";
import MovieCardScroller from "../components/MovieCard";
import WatchlistCardScroller from "../components/WatchlistCard";


const HomePage = () => {
  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white">
      <Carousel />
      <div className="bg-black text-center text-white pt-5 text-lg font-bold">Watch Movies, Series, Drama, and much more.. of different Countries</div>
      <CountryCardScroller />
      <div className="bg-black text-white pt-5 ps-5 text-xl font-bold">Watchlist</div>
      <WatchlistCardScroller />
      <div className="bg-black text-white pt-5 ps-5 text-xl font-bold">Movies</div>
      <MovieCardScroller />
    </div>
  );
};

export default HomePage;
