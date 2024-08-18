import React from "react";
import Starx from "../assets/Group 101.svg";
import { GiFlatStar } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { GrServices } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-black w-full h-auto md:h-21 p-4 items-center">
      {/* Logo Section */}
      <div className="flex w-full md:w-36 mb-4 md:mb-0 mx-auto md:mx-0 h-12 items-center justify-center">
        <img
          src={Starx}
          alt="starx logo"
          className="h-20 w-20 md:h-24 md:w-24"
        />
      </div>

      {/* Button Section */}
      <div className="flex flex-wrap justify-center md:justify-between w-full md:w-1/4">
        <button className="w-20 h-14 mx-2 my-1 py-1 rounded-md flex flex-col items-center">
          <GrServices className="text-zinc-300 w-8 h-8" />
          <p className="text-zinc-300 text-xs md:text-sm font-semibold">
            Services
          </p>
        </button>
        <button className="bg-zinc-900 w-20 h-14 mx-2 my-1 py-1 rounded-md flex flex-col items-center">
          <GiFlatStar className="text-zinc-300 w-8 h-8" />
          <p className="text-zinc-300 text-xs md:text-sm font-bold">
            Star Stork
          </p>
        </button>
        <button className="w-20 h-14 mx-2 my-1 py-1 rounded-md flex flex-col items-center">
          <IoSettingsSharp className="text-zinc-300 w-8 h-8" />
          <p className="text-zinc-300 text-xs md:text-sm font-semibold">
            Settings
          </p>
        </button>
        <button className="w-20 h-14 mx-2 my-1 py-1 rounded-md flex flex-col items-center">
          <IoIosAddCircle className="text-zinc-300 w-8 h-8" />
          <p className="text-zinc-300 text-xs md:text-sm font-semibold">Add</p>
        </button>
      </div>

      {/* Profile Section */}
      <button className="flex bg-zinc-700 w-12 h-12 rounded-full my-4 md:my-0 mx-auto md:mx-0"></button>
    </div>
  );
};

export default Navbar;
