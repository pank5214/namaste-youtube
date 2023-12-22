import React, { useEffect, useState } from "react";
import { YOUTUBE_RECOMMENDATION_VIDEOS_API } from "../utils/Constants";
import { useSelector } from "react-redux";
import RecommendationVideosCard from "./RecommendationVideosCard";

const RecommendationVideos = () => {
  const channelId = useSelector((store) => store.video.channelId);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getRecommendateVideos = async () => {
      const data = await fetch(YOUTUBE_RECOMMENDATION_VIDEOS_API + channelId);
      const json = await data.json();
      setVideos(json?.items);
    };
    if (channelId != null) {
      getRecommendateVideos();
    }
  }, [channelId]);

  return (
    <div className="flex flex-col">
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
