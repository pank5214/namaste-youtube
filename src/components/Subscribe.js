import React from "react";
import useVideosInfo from "../utils/useVideosInfo";

const Subscribe = ({ videoId }) => {
  const videosInfo = useVideosInfo();
  console.log("videosInfo", videosInfo);
  if (videosInfo.length === 0) return "Loading...";
  return (
    <div className="mx-2 p-2">
      <h1 className="font-extrabold">
        {videosInfo.find((videoInfo) => videoInfo.id === videoId).snippet.title}
      </h1>
      <div>
        <h3 className="font-medium my-2">
          {
            videosInfo.find((videoInfo) => videoInfo.id === videoId).snippet
              .channelTitle
          }
        </h3>
      </div>
    </div>
  );
};

export default Subscribe;
