import React from "react";
import TimeConverter from "./TimeConverter";
import { Link } from "react-router-dom";

const RecommendationVideosCard = ({ video }) => {
  const { thumbnails, title, channelTitle, publishedAt } = video?.snippet || {};
  const { videoId } =
    video?.contentDetails?.upload ||
    video?.contentDetails?.playlistItem?.resourceId ||
    {};

  return (
    <Link to={"/watch?v=" + videoId}>
      <div className="flex m-1 p-1 bg-gray-50 rounded-xl shadow-lg cursor-pointer">
        <img
          className="rounded-xl w-3/5"
          src={thumbnails?.medium?.url}
          alt="thumbnails"
        />
        <div className="m-2">
          <h1 className="line-clamp-2 font-bold mb-5">{title}</h1>
          <h2 className="line-clamp-1 text-sm font-semibold my-1">
            {channelTitle}
          </h2>
          <h3 className="text-sm">
            <TimeConverter utcTimestamp={publishedAt} />
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default RecommendationVideosCard;
