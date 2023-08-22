import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  /**
   * searchCache = {
   *    "iphone":[iphone 12, iphone 13, iphone 13 pro]
   * }
   *
   * searchQuery = iphone
   */

  useEffect(() => {
    // API Call

    // Make an API Call after every key press
    // But if the difference between 2 API Calls is <200ms
    // decline the API Calls

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
  }, [searchQuery]);

  /**
   *
   * Debouncing concept in React:
   *
   * keypress - i
   * - render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   *
   * keypress - ip
   * - destroy the component(useEffect return method)
   * - re-render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   *
   *
   *
   */

  const getSearchSuggestions = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);

    // Update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();

  const clickMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col m-2 p-5 shadow-md">
      <div className="flex col-span-1">
        <img
          onClick={() => clickMenuHandler()}
          className="h-6 mt-3 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbAn5be5otrWRTf5HFrm6MFimxZoIoaw_Pw&usqp=CAU"
        />
        <a href="/">
          <img
            className="h-12 ml-4"
            alt="youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYMaKrVpmKkuutjigpVcbaX43IFRHdiCDTny_z0Q0tPRK_F_LD3iLFJC_Mbo_owgG8A&usqp=CAU"
          />
        </a>
      </div>

      <div className="col-span-10 ml-40">
        <div>
          <input
            className="border border-solid bg-gray-50 rounded-l-full p-2 w-1/2 px-5"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-solid bg-gray-100 rounded-r-full px-6 py-2 hover:bg-gray-200">
            🔍
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute bg-white ml-1 py-2 px-2 w-[27.5rem] rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className=" col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
