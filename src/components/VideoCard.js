import React, { useEffect, useState } from "react";
import { ViewsConverter } from "../utils/helper";
import TimeConverter from "./TimeConverter";
import { YOUTUBE_CHANNEL_DATA_API } from "../utils/Constants";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt, channelId } = snippet;
  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    getChannelDetails();
  }, []);

  const getChannelDetails = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_DATA_API + channelId);
    const json = await data.json();
    setChannelDetails(json);
  };

  const channelImageLogo =
    channelDetails?.items?.[0]?.snippet?.thumbnails?.default?.url;

  return (
    <div className="my-3 py-2 w-[340px] shadow-sm h-[310px] rounded-md">
      <img
        className="rounded-lg w-full"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <div className="flex">
        <div className="w-12 my-2 mr-2">
          <img
            className="rounded-full"
            src={channelImageLogo}
            alt="channelImageLogo"
          />
        </div>

        <div className="flex flex-col w-full">
          <h1 className="font-bold line-clamp-2 my-2">{title}</h1>
          <h3 className="line-clamp-1 flex font-sans font-medium text-sm text-gray-500">
            {channelTitle}
          </h3>

          <div className="flex font-sans font-medium text-sm text-gray-500">
            <ViewsConverter views={statistics?.viewCount} />
            <h1 className="ml-2">views</h1>
            <h1 className="mx-1 -mt-[1px]">•</h1>
            <TimeConverter utcTimestamp={publishedAt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
