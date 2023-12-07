import React, { useEffect, useState } from "react";
import SearchResultsVideoCards from "./SearchResultsVideoCards";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/Constants";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchVideo, setSearchVideo] = useState([]);

  const searchQuery = searchParams.get("search_query");
  useEffect(() => {
    getSearchResultVideoList();
  }, [searchQuery]);

  const getSearchResultVideoList = async () => {
    const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + searchQuery);
    const json = await data.json();
    console.log("searchVideoList", json.items);
    setSearchVideo(json.items);
  };
  return (
    <div>
      {searchVideo && searchVideo.map((video) => (
        <SearchResultsVideoCards
          key={video?.id?.videoId || video?.id?.channelId}
          video={video}
        />
      ))}
    </div>
  );
};

export default SearchResults;
