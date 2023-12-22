import React, { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_DATA_API } from "../utils/Constants";
import { ViewsConverter } from "../utils/helper";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoEllipsisHorizontal } from "react-icons/io5";

const ChannelDetails = ({ channelId, likeCount }) => {
  const [channelData, setChannelData] = useState(null);
  useEffect(() => {
    const getChannelData = async () => {
      const data = await fetch(YOUTUBE_CHANNEL_DATA_API + channelId);
      const json = await data.json();
      setChannelData(json.items?.[0]);
    };
    getChannelData();
  }, [channelId]);

  if (channelData === null) return;
  const channelImageLogo = channelData?.snippet?.thumbnails?.default?.url;
  const channelTitle = channelData?.snippet?.title;
  const channelSubscriber = channelData?.statistics?.subscriberCount;
  return (
    <div className="flex items-center justify-between mt-2">
      <div className="flex">
        <img
          className="rounded-full h-10 cursor-pointer"
          src={channelImageLogo}
          alt="channelImageLogo"
        />
        <div className="flex flex-col ml-2">
          <h1 className="text-base font-bold cursor-pointer">{channelTitle}</h1>
          <div className="flex flex-row font-semibold text-xs text-gray-600">
            <ViewsConverter views={channelSubscriber} />
            <p className="mx-1">subscribers</p>
          </div>
        </div>
        <div className="flex ml-4 cursor-pointer">
          <button className="px-5 p-2 m-2 bg-black text-white font-semibold rounded-full hover:bg-gray-900">
            Join
          </button>
          <button className="px-4 p-2 m-2 bg-gray-200 text-black font-semibold rounded-full hover:bg-gray-300">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="p-2 flex items-center font-semibold bg-gray-200 rounded-full cursor-pointer">
          <BiLike className="text-xl text-left mr-2 ml-2 hover:bg-gray-300 rounded-l-full" />
          <span>
            <ViewsConverter views={likeCount} />
          </span>
          <span className="text-gray-400 text-xl text-center font-thin mx-2 -mt-1">
            |
          </span>
          <BiDislike className="text-xl mr-2 hover:bg-gray-300 rounded-r-full" />
        </div>

        <div className="p-2 flex items-center font-semibold bg-gray-200 rounded-full ml-2 px-1 cursor-pointer hover:bg-gray-300">
          <PiShareFatThin className="mx-2 text-xl" />
          <span className="mr-3">Share</span>
        </div>
        <div className="flex items-center font-semibold bg-gray-200 rounded-full mx-2 px-1 hover:bg-gray-300">
          <LiaDownloadSolid className="mx-2 text-xl font-thin" />
          <span className="mr-3">Download</span>
        </div>
        <div className="flex items-center justify-center font-semibold bg-gray-200 rounded-full hover:bg-gray-300">
          <IoEllipsisHorizontal className="mx-3" />
        </div>
      </div>
    </div>
  );
};

export default ChannelDetails;
