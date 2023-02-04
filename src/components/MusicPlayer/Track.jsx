import React from "react";

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex w-[200px] flex-auto items-center justify-start sm:flex-1">
    {/* IMAGE  */}
    <div
      className={`${
        isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
      }  mr-4  h-12 w-12  sm:h-16 sm:w-16`}
    >
      <img
        src={activeSong?.images?.coverart}
        alt="cover art"
        className="rounded-full"
      />
    </div>

    <div className="w-[65%] sm:w-[50%]">
      {/* SONG TITLE */}
      <p className="truncate text-lg font-bold text-white">
        {activeSong?.title ? activeSong?.title : "No active Song"}
      </p>
      {/* SONG ARTIST */}
      <p className="truncate text-gray-300">
        {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
      </p>
    </div>
  </div>
);

export default Track;
