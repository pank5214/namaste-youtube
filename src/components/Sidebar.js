import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="mx-2 p-2 px-10 bg-gray-50 shadow-md font-medium text-sm w-[23%]">
      <ul className="gap-8">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/demo"}>Demo</Link>
        </li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Videos</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul className="gap-8">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul className="">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
