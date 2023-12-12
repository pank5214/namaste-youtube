import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";
import { GoSearch } from "react-icons/go";

const Header = () => {
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
    <div className="grid grid-flow-col md:m-2 m-[6px]">
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
          />
          <button className="border border-solid border-gray-300 bg-gray-50 rounded-r-full md:px-6 px-4 hover:bg-gray-200">
            <GoSearch />
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[33%] mt-[2px] rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 flex items-center gap-4 px-3 shadow-sm hover:bg-gray-100">
                  <GoSearch /> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 md:mt-0 mt-2 cursor-pointer">
        <img
          className="h-8"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
