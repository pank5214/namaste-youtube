import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_DETAILS_API } from "../utils/Constants";
import ChannelDetails from "./ChannelDetails";
import { useDispatch } from "react-redux";
import { clearChannelId, setChannelId } from "../utils/videoSlice";
import TimeConverter from "./TimeConverter";
import { ViewsConverter } from "../utils/helper";

const WatchPageVideoDetails = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getVideoData();
    return () => dispatch(clearChannelId());
  }, [videoId]);

  useEffect(() => {
    if (videoData) {
      const { channelId } = videoData?.snippet || {};
      channelId && dispatch(setChannelId(channelId));
    }
  }, [videoData, dispatch]);

  const getVideoData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_DETAILS_API + videoId);
    const json = await data.json();
    setVideoData(json?.items?.[0]);
  };

  const { title, channelId, publishedAt, description } =
    videoData?.snippet || {};
  const { likeCount, viewCount } = videoData?.statistics || {};

  if (videoData === null) return;
  return (
    <div className="px-2 w-[1000px]">
      <h1 className="text-lg font-bold">{title}</h1>
      <ChannelDetails channelId={channelId} likeCount={likeCount} />
      <div className="bg-gray-200 rounded-xl my-2 p-2 px-4">
        <div className="flex font-semibold my-1 text-sm">
          <div className="mr-4 flex">
            <ViewsConverter views={viewCount} />
            <h4 className="ml-1">views</h4>
          </div>
          <TimeConverter utcTimestamp={publishedAt} />
        </div>
        <p className="py-2">{description}</p>
      </div>
    </div>
  );
};

export default WatchPageVideoDetails;
