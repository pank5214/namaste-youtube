import React, { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_DATA_API } from "../utils/Constants";
import { ViewsConverter } from "../utils/helper";

const ChannelDetails = ({ channelId }) => {
  const [channelData, setChannelData] = useState(null);
  useEffect(() => {
    getChannelData();
  }, []);

  const getChannelData = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_DATA_API + channelId);
    const json = await data.json();
    console.log("channelDetails:", json);
    setChannelData(json.items?.[0]);
  };
  if (channelData === null) return;
  const channelImageLogo = channelData?.snippet?.thumbnails?.default?.url;
  const channelTitle = channelData?.snippet?.title;
  const channelSubscriber = channelData?.statistics?.subscriberCount;
  return (
    <div className="flex items-center my-2">
      <img
        className="rounded-full h-10 mx-2"
        src={channelImageLogo}
        alt="channelImageLogo"
      />
      <div className="flex flex-col">
        <h1 className="text-base font-bold">{channelTitle}</h1>
        <div className="flex flex-row font-semibold text-xs text-gray-600">
            <ViewsConverter views={channelSubscriber}/>
            <p className="mx-1">subscribers</p>
        </div>
      </div>
      <div className="flex ml-4">
          <button className="px-5 p-2 m-2 bg-black text-white font-semibold rounded-full hover:bg-gray-900">
            Join
          </button>
          <button className="px-5 p-2 m-2 bg-gray-300 text-black font-semibold rounded-full hover:bg-gray-400">
            Subscribe
          </button>
        </div>
    </div>
  );
};

export default ChannelDetails;
