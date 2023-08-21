import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
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
      <div className="col-span-10">
        <input
          className="border border-solid bg-gray-50 rounded-l-full p-2 w-1/2 ml-40 px-5"
          placeholder="Search"
          type="text"
        />
        <button className="border border-solid bg-gray-100 rounded-r-full px-6 py-2 hover:bg-gray-200">
          🔍
        </button>
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
