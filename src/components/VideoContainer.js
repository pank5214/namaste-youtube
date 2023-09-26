import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideosInfo from "../utils/useVideosInfo";

const VideoContainer = () => {
  const videos = useVideosInfo();

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"watch?v=" + video?.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
