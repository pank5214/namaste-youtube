import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideosInfo from "../utils/useVideosInfo";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const videos = useVideosInfo();

  if (!videos?.length) return <Shimmer />;

  return (
    <div className="flex flex-wrap">
      {videos &&
        videos.map((video) => (
          <Link key={video.id} to={"watch?v=" + video?.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
