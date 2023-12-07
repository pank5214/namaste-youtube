import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./Constants";

const useVideosInfo = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log("data", json);

    setVideos(json?.items);
  };
  return videos;
};

export default useVideosInfo;
