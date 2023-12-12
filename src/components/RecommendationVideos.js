import React, { useEffect, useState } from "react";
import { YOUTUBE_RECOMMENDATION_VIDEOS_API } from "../utils/Constants";
import { useSelector } from "react-redux";
import RecommendationVideosCard from "./RecommendationVideosCard";
import { Link } from "react-router-dom";

const RecommendationVideos = () => {
  const channelId = useSelector((store) => store.video.channelId);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (channelId != null) {
      getRecommendateVideos();
    }
  }, [channelId]);

  const getRecommendateVideos = async () => {
    const data = await fetch(YOUTUBE_RECOMMENDATION_VIDEOS_API + channelId);
    const json = await data.json();
    console.log("!@#$%^&", json);
    setVideos(json?.items);
  };

  return (
    <div>
      {videos &&
        videos.map((video) => (
          <div key={video.id}>
            <RecommendationVideosCard video={video} />
          </div>
        ))}
    </div>
  );
};

export default RecommendationVideos;
