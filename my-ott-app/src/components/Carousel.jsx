import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlay, FaPlus, FaCheck } from "react-icons/fa";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await axios.get("https://uniconott.onrender.com/api/carousel");
        setSlides(response.data);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    const fetchWatchlist = async () => {
      if (!user?.id) return;
      
      try {
        const res = await axios.get(`https://uniconott.onrender.com/api/user/watchlist/${user.id}`);
        console.log("Watchlist response:", res.data);
        setWatchlist(res.data || []);
      } catch (err) {
        console.error("Failed to fetch watchlist", err);
      }
    };

    if (user?.id) {
      fetchCarouselData();
      fetchWatchlist();
    }
  }, [user]);

  const handleWatchlistToggle = async (contentId) => {
    if (!user?.id) return;
    
    try {
      // Check if the content is already in the watchlist
      const isInWatchlist = watchlist.some(id => 
        id.toString() === contentId.toString()
      );
      
      if (isInWatchlist) {
        console.log("Removing from watchlist:", { clerkId: user.id, movieId: contentId });
        await axios.post(`https://uniconott.onrender.com/api/user/watchlist/remove`, {
          clerkId: user.id,
          movieId: contentId
        });
        setWatchlist(watchlist.filter(id => id.toString() !== contentId.toString()));
      } else {
        console.log("Adding to watchlist:", { 
          clerkId: user.id, 
          movieId: contentId,
          email: user.emailAddresses[0]?.emailAddress 
        });
        await axios.post(`https://uniconott.onrender.com/api/user/watchlist/add`, {
          clerkId: user.id,
          movieId: contentId,
          email: user.emailAddresses[0]?.emailAddress
        });
        setWatchlist([...watchlist, contentId]);
      }
    } catch (error) {
      console.error("Watchlist update failed:", error);
      
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
    }
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      className="w-full h-[500px] relative"
    >
      {slides.map((slide) => {
        // Better comparison of ObjectIds by converting to string
        const isInWatchlist = watchlist.some(id => 
          id.toString() === slide._id.toString()
        );
        
        return (
          <SwiperSlide key={slide._id}>
            <Link to={`/watch/${slide._id}`}>
              <div
                className="relative w-full h-[500px] flex items-center text-white px-10 cursor-pointer"
                style={{
                  backgroundImage: `url(/Images/${slide.posterImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 max-w-lg">
                  <h2 className="text-4xl font-bold drop-shadow-lg">{slide.title}</h2>
                  <p className="mt-2 text-gray-300 line-clamp-3">{slide.overview}</p>
                  <p className="mt-1 text-gray-400 text-sm">
                    {slide.genres?.join(", ")}
                  </p>

                  <div className="mt-6 flex gap-4">
                    <button className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                      <FaPlay /> Play
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleWatchlistToggle(slide._id);
                      }}
                      className={`px-6 py-2 rounded-full flex items-center gap-2 ${
                        isInWatchlist
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                    >
                      {isInWatchlist ? (
                        <>
                          <FaCheck /> Remove Watchlist
                        </>
                      ) : (
                        <>
                          <FaPlus /> Watchlist
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;