import React, { useEffect, useState } from "react";
import SearchResultsVideoCards from "./SearchResultsVideoCards";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/Constants";
import { Link, useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchVideo, setSearchVideo] = useState([]);

  const searchQuery = searchParams.get("search_query");

  useEffect(() => {
    const getSearchResultVideoList = async () => {
      const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + searchQuery);
      const json = await data.json();
      setSearchVideo(json.items);
    };
    getSearchResultVideoList();
  }, [searchQuery]);

  return (
    <div className="flex justify-center">
      <div className="mt-20 ml-4">
        {searchVideo &&
          searchVideo.map((video) =>
            video?.id?.videoId || video?.id?.channelId ? (
              <Link
                key={video?.id?.videoId || video?.id?.channelId}
                to={"/watch?v=" + (video?.id?.videoId || video?.id?.channelId)}
              >
                <SearchResultsVideoCards video={video} />
              </Link>
            ) : null
          )}
      </div>
    </div>
  );
};

export default SearchResults;
