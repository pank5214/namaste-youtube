import React, { useEffect, useState } from "react";
import TimeConverter from "./TimeConverter";
import { YOUTUBE_CHANNEL_DATA_API } from "../utils/Constants";
import { ViewsConverter } from "../utils/helper";

const SearchResultsVideoCards = ({ video }) => {
  const {
    thumbnails,
    title,
    publishTime,
    channelTitle,
    description,
    channelId,
  } = video?.snippet;

  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    const getChannelData = async () => {
      try {
        const data = await fetch(YOUTUBE_CHANNEL_DATA_API + { channelId });
        const json = await data.json();
        setChannelDetails(json);
      } catch (err) {
        console.log("Error: ", err);
      }
    };
    getChannelData();
  }, [channelId]);

  const channelImageLogo =
    channelDetails?.items?.[0].snippet?.thumbnails?.default?.url;

  const views = channelDetails?.items?.[0].statistics?.viewCount;

  return (
    <div className="flex m-1 py-2">
      <img
        className="h-full rounded-lg"
        src={thumbnails?.medium?.url}
        alt="thumbnails"
      />
      <div className="ml-4">
        <div className="font-semibold text-base">
          <h1 className="font-semibold text-xl line-clamp-2">{title}</h1>
          <div className="flex font-sans font-medium text-sm text-gray-500">
            <ViewsConverter views={views} />
            <h1 className="ml-2">views</h1>
            <h1 className="mx-1 -mt-[1px]">•</h1>
            <TimeConverter utcTimestamp={publishTime} />
          </div>
        </div>
        <div className="flex my-4">
          <img
            className="rounded-full h-6"
            src={channelImageLogo}
            alt="channelImageLogo"
          />
          <h1 className="ml-2 line-clamp-1 font-sans font-medium text-sm text-gray-500">
            {channelTitle}
          </h1>
        </div>
        <div>
          <h2 className="font-sans font-medium text-xs text-gray-500">
            {description}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsVideoCards;
