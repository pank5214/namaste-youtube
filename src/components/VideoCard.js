import React from "react";
import { ViewsConverter } from "../utils/helper";
import TimeConverter from "./TimeConverter";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg h-80 rounded-md">
      <img
        className="rounded-lg"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
      </ul>
      <div className="flex">
            <ViewsConverter views = {statistics?.viewCount} />
            <h1 className="ml-2">views</h1>
            <h1 className="mx-1 font-bold -mt-[1px]">•</h1>
            <TimeConverter utcTimestamp={publishedAt} />
          </div>
    </div>
  );
};

export default VideoCard;
