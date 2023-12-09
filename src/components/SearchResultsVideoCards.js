import React, { useEffect, useState } from "react";
import TimeConverter from "./TimeConverter";
import { YOUTUBE_CHANNEL_DATA_API } from "../utils/Constants";
import { ViewsConverter } from "../utils/helper";

const SearchResultsVideoCards = ({ video }) => {
  // console.log("receiveProps:", video);
  const { thumbnails, title, publishTime, channelTitle, description } =
    video?.snippet;

  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    getChannelData();
  }, []);
  const getChannelData = async () => {
    const data = await fetch(
      YOUTUBE_CHANNEL_DATA_API + video?.snippet?.channelId
    );
    const json = await data.json();
    console.log("channelDetails:", json);
    setChannelDetails(json);
  };

  const channelImageLogo =
    channelDetails?.items?.[0].snippet?.thumbnails?.default?.url;

  const views = channelDetails?.items?.[0].statistics?.viewCount;

  return (
    <div className="flex py-2">
      <img
        className="h-full rounded-lg"
        src={thumbnails?.medium?.url}
        alt="thumbnails"
      />
      <div className="ml-4">
        <div className="font-semibold text-base">
          <h1 className="font-bold text-lg">{title}</h1>
          <div className="flex">
            <ViewsConverter views = {views} />
            <h1 className="ml-2">views</h1>
            <h1 className="mx-1 font-bold -mt-[1px]">•</h1>
            <TimeConverter utcTimestamp={publishTime} />
          </div>
        </div>
        <div className="flex my-2">
          <img
            className="rounded-full h-6"
            src={channelImageLogo}
            alt="channelImageLogo"
          />
          <h1 className="font-bold text-xs self-center ml-2 text-gray-600">
            {channelTitle}
          </h1>
        </div>
        <div>
          <h2 className="font-medium text-xs self-center text-gray-600">
            {description}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsVideoCards;
