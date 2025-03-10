import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlay, FaPlus } from "react-icons/fa";
import axios from "axios";

const Carousel = () => {
  const [slides, setSlides] = useState([]); // Store API data

  // Fetch carousel data from backend
  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/carousel"); // Fetch from backend
        setSlides(response.data);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchCarouselData();
  }, []);

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
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full h-[500px] flex items-center text-white px-10"
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-lg">
              <h2 className="text-4xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-gray-300">{slide.description}</p>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <button className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 glow">
                  <FaPlay /> Play
                </button>
                <button className="bg-gray-700 px-6 py-2 rounded-full flex items-center gap-2">
                  <FaPlus /> Watchlist
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
