import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./Constants";
import Shimmer from "../components/Shimmer";

const useVideosInfo = () => {
  const [videos, setVideos] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    getVideos();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      console.log("bottom of page reached");
      getVideos();
    }
  };

  const getVideos = async () => {
    try {
      setShowShimmer(true);
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos((videos) => [...videos, ...json?.items]);
      setShowShimmer(false);
    } catch (e) {
      console.error(e);
    }
  };

  return { videos, showShimmer };
};

export default useVideosInfo;
