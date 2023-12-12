import React, { useEffect, useState } from "react";
import { VIDEO_DETAILS_API } from "../utils/Constants";
import ChannelDetails from "./ChannelDetails";
import { useDispatch } from "react-redux";
import { clearChannelId, setChannelId } from "../utils/videoSlice";

const WatchPageVideoDetails = ({ videoId }) => {
  // console.log("videoId:", videoId)
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
    const data = await fetch(VIDEO_DETAILS_API + videoId);
    const json = await data.json();
    console.log("videoData", json);
    setVideoData(json?.items?.[0]);
  };

  const { title, channelId } = videoData?.snippet || {};
  const { likeCount } = videoData?.statistics || {};

  if (videoData === null) return;
  return (
    <div className="px-2 w-[1000px]">
      <h1 className="text-lg font-bold">{title}</h1>
      <ChannelDetails channelId={channelId} likeCount={likeCount} />
    </div>
  );
};

export default WatchPageVideoDetails;
