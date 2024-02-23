import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideosInfo from "../utils/useVideosInfo";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const { videos, showShimmer } = useVideosInfo();

  return (
    <div className="flex">
      <div className="flex flex-wrap justify-evenly">
        {videos &&
          videos.map((video) => (
            <Link key={video.id} to={"watch?v=" + video?.id}>
              <VideoCard info={video} />
            </Link>
          ))}
        {showShimmer && <Shimmer />}
      </div>
    </div>
  );
};

export default VideoContainer;
