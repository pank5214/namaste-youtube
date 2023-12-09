import React from "react";

const VideoCard = ({ info }) => {

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

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
        <li>{parseFloat(statistics?.viewCount / 1000000).toFixed(2)}M views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
