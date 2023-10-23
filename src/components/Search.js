import React from "react";
import icons from "../ultis/icons";

const { FiSearch } = icons;

const Search = () => {
  return (
    <div className="w-full flex items-center ">
      <span className="h-10 pl-4 flex bg-[#DDE4E4] items-center rounded-l-[20px] text-gray-500">
        <FiSearch size={24} />
      </span>
      <input
        type="text"
        className=" w-full outline-none bg-[#DDE4E4] px-4 py-2 rounded-r-[20px] h-10 text-gray-500"
        placeholder="Search, Song, Artist, Lyric ...."
      ></input>
    </div>
  );
};

export default Search;
