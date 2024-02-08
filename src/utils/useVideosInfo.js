import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./Constants";

const useVideosInfo = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight &&
        pageToken != null
      ) {
        return;
      }
      getVideos();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageToken]);

  const getVideos = async () => {
    try {
      const url =
        pageToken !== ""
          ? `${YOUTUBE_VIDEOS_API}&pageToken=${pageToken}`
          : YOUTUBE_VIDEOS_API;
      const data = await fetch(url);
      const json = await data.json();
      console.log("json:", json);
      setVideos((prevVideos) => [...prevVideos, ...json?.items]);
      setPageToken(json?.nextPageToken || "");
    } catch (e) {
      console.error(e);
    }
  };
  return videos;
};

export default useVideosInfo;
