import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Player from "../components/Player";

const PlayerPage = ({ fallback }) => {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("No movie ID provided");
      return;
    }

    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/movies/${id}`);
        setContent(response.data);
      } catch (error) {
        console.error("Error fetching content:", error);
        setError("Failed to fetch movie details");
      }
    };

    fetchContent();
  }, [id]);

  if (error) {
    return fallback || <div className="text-white">{error}</div>;
  }

  if (!content) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Player */}
      <Player
        videoUrl={content.videoUrl} // Update if you have video URL
        title={content.title}
        description={content.description}
        genres={content.genres.join(", ")}
      />

      {/* Genres */}
      {content.genres && content.genres.length > 0 && (
        <p className="text-white text-center justify-center text-sm ms-1">
          Genres: {content.genres.join(", ")}
        </p>
      )}
    </div>
  );
};

export default PlayerPage;