import React from "react";
import icons from "../ultis/icons";
import { Search } from "./";

const { HiArrowNarrowLeft, HiArrowNarrowRight } = icons;

const HeaderBar = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="w-full flex gap-6 items-center">
        <div className=" flex gap-6 text-gray-400">
          <span className="">
            <HiArrowNarrowLeft size={24} />
          </span>
          <span className="">
            <HiArrowNarrowRight size={24} />
          </span>
        </div>
        <div className="w-1/2">
          <Search />
        </div>
      </div>
      <div className="">login</div>
    </div>
  );
};

export default HeaderBar;
