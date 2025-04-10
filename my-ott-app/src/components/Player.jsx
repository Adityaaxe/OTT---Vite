import React from "react";

const Player = ({ videoUrl, title, description, genres }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-5">
      {/* Video Player */}
      <div className="w-full max-w-4xl">
        <video controls className="w-full h-[500px] rounded-xl">
          <source src={`/Videos/${videoUrl}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Details */}
      <div className="mt-4 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Player;
