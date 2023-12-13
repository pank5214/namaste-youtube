import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { PiVideoCameraThin } from "react-icons/pi";
import { PiBellThin } from "react-icons/pi";
import { PiUserCircleThin } from "react-icons/pi";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  });

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json?.[1]);

    // Update the cache for searchResults
    // Storing cache as object in key-value pair
    dispatch(
      cacheResults({
        [searchQuery]: json?.[1],
      })
    );
  };

  const clickMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestion = (e) => {
    setShowSuggestions(false);
    setSearchQuery(e.target.innerText);
    navigate("/results?search_query=" + e.target.innerText || searchQuery);
  };

  return (
    <div className="grid grid-flow-col md:m-2 px-4 m-[6px]">
      <div className="flex col-span-1">
        <img
          onClick={() => clickMenuHandler()}
          className="h-6 mt-3 cursor-pointer"
          alt="humburger-menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbAn5be5otrWRTf5HFrm6MFimxZoIoaw_Pw&usqp=CAU"
        />
        <a href="/">
          <img
            className="h-12 ml-2 cursor-pointer"
            alt="youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYMaKrVpmKkuutjigpVcbaX43IFRHdiCDTny_z0Q0tPRK_F_LD3iLFJC_Mbo_owgG8A&usqp=CAU"
          />
        </a>
      </div>

      <div className="md:col-span-12 md:ml-40">
        <div className="flex">
          <input
            className="border border-solid border-gray-300 rounded-l-full p-2 md:w-1/2 w-8/12 mt-1 md:mt-0 px-5"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onKeyDown={(e) => {
              if (!showSuggestions || searchQuery.length === 0) return;
            }}
          />
          <button
            className="border border-solid border-gray-300 bg-gray-50 rounded-r-full md:px-6 px-4 hover:bg-gray-200"
            // Disable button if searchQuery is empty or only contains whitespaceF
            disabled={!searchQuery.trim()}
            onClick={() => {
              navigate("/results?search_query=" + searchQuery);
            }}
          >
            <GoSearch />
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute cursor-default bg-white py-2 px-2 w-[33%] mt-[2px] rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  onMouseDown={(e) => {
                    handleSuggestion(e);
                  }}
                  className="py-2 flex items-center gap-4 px-3 shadow-sm hover:bg-gray-100"
                >
                  <GoSearch /> {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 flex justify-around text-3xl mt-2 cursor-pointer">
        <PiVideoCameraThin className="hover:bg-slate-200 hover:rounded-full" />
        <PiBellThin className="hover:bg-slate-200 hover:rounded-full" />
        <PiUserCircleThin className="hover:bg-slate-200 hover:rounded-full" />
      </div>
    </div>
  );
};

export default Header;
