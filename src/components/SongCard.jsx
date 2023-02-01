import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
  const handlePauseClick = () => {};

  const handlePlayClick = () => {};

  return (
    <div
      className="flex w-[250px] animate-slideup cursor-pointer flex-col rounded-lg
       bg-white/5 bg-opacity-80 p-4 backdrop-blur-sm"
    >
      <div className="group relative h-56 w-full">
        {/* SONG CARD ON HOVER play music */}
        <div
          className={`absolute inset-0 items-center justify-center
         bg-black bg-opacity-50 group-hover:flex
      ${
        activeSong?.title === song.title
          ? "flex bg-black bg-opacity-70"
          : "hidden"
      }`}
        >
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>

        {/* SONG CARD IMAGE */}
        <img src={song.images?.coverart} alt="song_img" />
      </div>

      {/* LINKS */}
      <div className="mt-4 flex flex-col">
        {/* music name */}
        <p className="truncate text-lg font-semibold text-white">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        {/* artist name */}
        <p className="mt-1 truncate text-sm text-gray-300 ">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SongCard;
