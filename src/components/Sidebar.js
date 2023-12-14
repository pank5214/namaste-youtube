import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsFlag } from "react-icons/bs";
import { GiHanger } from "react-icons/gi";
import { ImYoutube } from "react-icons/im";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { GoHome, GoHistory, GoTrophy } from "react-icons/go";
import { AiOutlineLike, AiOutlineBulb } from "react-icons/ai";
import {
  PiUserSquare,
  PiMusicNote,
  PiFilmSlateLight,
  PiFire,
} from "react-icons/pi";
import {
  RiVideoLine,
  RiWirelessChargingLine,
  RiFeedbackLine,
} from "react-icons/ri";
import {
  IoBagHandleOutline,
  IoSettingsOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import {
  SiYoutubeshorts,
  SiYoutubegaming,
  SiYoutubestudio,
  SiYoutubemusic,
} from "react-icons/si";
import {
  MdOutlineSubscriptions,
  MdOutlineArrowForwardIos,
  MdOutlineWatchLater,
  MdPodcasts,
} from "react-icons/md";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="fixed bg-white w-1/5 max-h-screen hover:overflow-y-scroll overflow-hidden overscroll-contain z-10 mt-16">
      <div className="px-4 pt-2 font-medium font-sans">
        <ul className="border-b-[1px] mb-1">
          <Link to={"/"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <GoHome className="text-2xl ml-2" />
              <p>Home</p>
            </li>
          </Link>

          <Link to={"/results?search_query=shorts"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <SiYoutubeshorts className="text-2xl ml-2" />
              <p>Shorts</p>
            </li>
          </Link>
          <Link to={"/results?search_query=subscriptions"}>
            <li className="flex gap-6 py-2 mb-4 hover:bg-gray-200 rounded-lg w-full">
              <MdOutlineSubscriptions className="text-2xl ml-2" />
              <p>Subscriptions</p>
            </li>
          </Link>
        </ul>

        <div className="flex items-center gap-4 font-sans font-semibold text-lg py-2 mt-4 cursor-pointer hover:bg-gray-200 rounded-lg w-full">
          <h1 className="ml-2">You</h1>
          <MdOutlineArrowForwardIos />
        </div>

        <ul className="border-b-[1px] mb-1">
          <Link to={"/results?search_query=yourchannel"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <PiUserSquare className="text-2xl ml-2" />
              <p>Your channel</p>
            </li>
          </Link>

          <Link to={"/results?search_query=history"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <GoHistory className="text-2xl ml-2" />
              <p>History</p>
            </li>
          </Link>
          <Link to={"/results?search_query=yourvideos"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <RiVideoLine className="text-2xl ml-2" />
              <p>Your videos</p>
            </li>
          </Link>
          <Link to={"/results?search_query=watchlater"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <MdOutlineWatchLater className="text-2xl ml-2" />
              <p>Watch Later</p>
            </li>
          </Link>
          <Link to={"/results?search_query=likedvideos"}>
            <li className="flex gap-6 py-2 mb-4 hover:bg-gray-200 rounded-lg w-full">
              <AiOutlineLike className="text-2xl ml-2" />
              <p>Liked videos</p>
            </li>
          </Link>
        </ul>

        <h1 className="font-sans font-semibold text-lg m-2 p-1 mt-5">
          Explore
        </h1>

        <ul className="border-b-[1px] mb-1">
          <Link to={"/results?search_query=trending"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <PiFire className="text-2xl ml-2" />
              <p>Trending</p>
            </li>
          </Link>

          <Link to={"/results?search_query=shopping"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <IoBagHandleOutline className="text-2xl ml-2" />
              <p>Shopping</p>
            </li>
          </Link>

          <Link to={"/results?search_query=music"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <PiMusicNote className="text-2xl ml-2" />
              <p>Music</p>
            </li>
          </Link>
          <Link to={"/results?search_query=films"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <PiFilmSlateLight className="text-2xl ml-2" />
              <p>Films</p>
            </li>
          </Link>

          <Link to={"/results?search_query=live"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <RiWirelessChargingLine className="text-2xl ml-2" />
              <p>Live</p>
            </li>
          </Link>
          <Link to={"/results?search_query=gaming"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <SiYoutubegaming className="text-2xl ml-2" />
              <p>Gaming</p>
            </li>
          </Link>

          <Link to={"/results?search_query=news"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <HiOutlineNewspaper className="text-2xl ml-2" />
              <p>News</p>
            </li>
          </Link>
          <Link to={"/results?search_query=sport"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <GoTrophy className="text-2xl ml-2" />
              <p>Sport</p>
            </li>
          </Link>

          <Link to={"/results?search_query=learning"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <AiOutlineBulb className="text-2xl ml-2" />
              <p>Learning</p>
            </li>
          </Link>
          <Link to={"/results?search_query=fashion&beauty"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <GiHanger className="text-2xl ml-2" />
              <p>Fashion & beauty</p>
            </li>
          </Link>

          <Link to={"/results?search_query=podcasts"}>
            <li className="flex gap-6 py-2 mb-4 hover:bg-gray-200 rounded-lg w-full">
              <MdPodcasts className="text-2xl ml-2" />
              <p>Podcasts</p>
            </li>
          </Link>
        </ul>

        <h1 className="font-sans font-semibold text-lg m-2 p-1 mt-5">
          More from YouTube
        </h1>

        <ul className="border-b-[1px] mb-1">
          <Link to={"/results?search_query=youtubepremium"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <ImYoutube className="text-2xl ml-2" />
              <p>YouTube Premium</p>
            </li>
          </Link>

          <Link to={"/results?search_query=youtubestudio"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <SiYoutubestudio className="text-2xl ml-2" />
              <p>YouTube Studio</p>
            </li>
          </Link>

          <Link to={"/results?search_query=youtubemusic"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <SiYoutubemusic className="text-2xl ml-2" />
              <p>YouTube Music</p>
            </li>
          </Link>

          <Link to={"/results?search_query=youtubekids"}>
            <li className="flex gap-6 py-2 mb-4 hover:bg-gray-200 rounded-lg w-full">
              <TbBrandYoutubeKids className="text-2xl ml-2" />
              <p>YouTube Kids</p>
            </li>
          </Link>
        </ul>

        <ul className="border-b-[1px] mb-1 mt-4">
          <Link to={"/results?search_query=settings"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <IoSettingsOutline className="text-2xl ml-2" />
              <p>Settings</p>
            </li>
          </Link>

          <Link to={"/results?search_query=reporthistory"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <BsFlag className="text-2xl ml-2" />
              <p>Report history</p>
            </li>
          </Link>

          <Link to={"/results?search_query=help"}>
            <li className="flex gap-6 py-2 hover:bg-gray-200 rounded-lg w-full">
              <IoHelpCircleOutline className="text-2xl ml-2" />
              <p>Help</p>
            </li>
          </Link>

          <Link to={"/results?search_query=sendfeedback"}>
            <li className="flex gap-6 py-2 mb-4 hover:bg-gray-200 rounded-lg w-full">
              <RiFeedbackLine className="text-2xl ml-2" />
              <p>Send feedback</p>
            </li>
          </Link>
        </ul>

        <div className="my-5 ml-2 mb-[81.7px] font-sans font-bold text-xs text-gray-600">
          <p className="">
            About Press Copyright <br /> Contact us Creator Advertise <br />{" "}
            Developers
          </p>
          <p className="my-4">
            Terms Privacy Policy & Safety <br /> How YouTube works <br /> Test
            new features
          </p>
          <p className="font-light text-xs">© 2023 Google LLC</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
