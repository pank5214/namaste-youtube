import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import WatchPageVideoDetails from "./WatchPageVideoDetails";
import RecommendationVideos from "./RecommendationVideos";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  const [showLiveChat, setShowLiveChat] = useState(false);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const videoId = searchParams.get("v");

  return (
    <div className="flex flex-col mt-20 m-0">
      <div className="p-2 py-2 flex m-0">
        <div className="w-fit">
          <iframe
            className=" rounded-2xl"
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <WatchPageVideoDetails videoId={videoId} />
          <CommentsContainer videoId={videoId} />
        </div>
        <div className="w-fit">
          {showLiveChat && <LiveChat />}
          <button
            className="w-full bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-full text-center font-bold p-2 m-2"
            onClick={() => setShowLiveChat(!showLiveChat)}
          >
            {showLiveChat ? "Hide chat" : "Show chat"}
          </button>
          <RecommendationVideos />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
