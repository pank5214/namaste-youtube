import React from "react";
import useVideosInfo from "../utils/useVideosInfo";

const Subscribe = ({ videoId }) => {
  const videosInfo = useVideosInfo();
  console.log("videosInfo", videosInfo);
  if (videosInfo.length === 0) return "Loading...";
  return (
    <div className="mx-2 p-2 w-8/12">
      <h1 className="font-extrabold text-xl">
        {videosInfo.find((videoInfo) => videoInfo.id === videoId).snippet.title}
      </h1>
      <div className="flex flex-wrap gap-x-80 items-center">
        <h3 className="font-bold my-2">
          {
            videosInfo.find((videoInfo) => videoInfo.id === videoId).snippet
              .channelTitle
          }
        </h3>
        <div className="flex gap-8">
          <button className="px-5 p-2 m-2 bg-black text-white font-semibold rounded-full hover:bg-gray-300">
            Join
          </button>
          <button className="px-5 p-2 m-2 bg-gray-300 text-black font-semibold rounded-full hover:bg-gray-400">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
