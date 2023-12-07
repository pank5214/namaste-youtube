import React from "react";
import TimeConverter from "./TimeConverter";

const SearchResultsVideoCards = ({ video }) => {
  console.log("receiveProps:", video);

  return (
    <div className="flex py-2">
      <img
        className="h-full rounded-lg"
        src={video?.snippet?.thumbnails?.medium?.url}
        alt="thumbnails"
      />
      <div className="ml-4">
        <div className="font-semibold text-base">
          <h1 className="font-bold text-lg">{video?.snippet?.title}</h1>
          <TimeConverter utcTimestamp={video?.snippet?.publishTime} />
        </div>
        <div>
          <h1 className="font-semibold text-base">{video?.snippet?.channelTitle}</h1>
        </div>
        <div>
          <h2 className="font-semibold text-sm">{video?.snippet?.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsVideoCards;
