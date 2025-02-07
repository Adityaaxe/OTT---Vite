import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlay, FaPlus, FaUsers } from "react-icons/fa";

const slides = [
  {
    title: "Black Clover",
    description: "Set in a world where people are born with the ability to use magic, the story follows Asta, a young boy without any magic power...",
    img: "https://wallpaperaccess.com/full/1706166.jpg",
    views: "24M",
  },
  {
    title: "Attack on Titan",
    description: "In a world where giant humanoid Titans prey on humans, Eren joins the elite Survey Corps to battle them...",
    img: "https://wallpaperaccess.com/full/3664180.jpg",
    views: "50M",
  },
  {
    title: "Demon Slayer",
    description: "A young boy joins the Demon Slayer Corps to avenge his family and cure his sister who has turned into a demon...",
    img: "https://wallpaperaccess.com/full/2159305.jpg",
    views: "30M",
  },
];

const Carousel = () => {
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

              {/* Stats */}
              <div className="flex items-center gap-4 mt-4 text-gray-300">
                <FaUsers />
                <span>{slide.views}</span>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <button className="bg-white text-black px-6 py-2 rounded-lg flex items-center gap-2">
                  <FaPlay /> Play
                </button>
                <button className="bg-gray-700 px-6 py-2 rounded-lg flex items-center gap-2">
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
