import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetRapTopChartsQuery } from "../redux/services/shazamCore";

import "swiper/css";
import "swiper/css/free-mode";

const TopChartCard = ({
  song,
  i,
  activeSong,
  isPlaying,
  handlePauseClick,
  handlePlayClick,
}) => (
  // CONTAINER
  // when music is selected(active) bg highlighted
  <div
    className={`flex w-full flex-row items-center hover:bg-[#4c426e] ${
      activeSong?.title === song?.title ? "bg-[#4c426e]" : "bg-transparent"
    } mb-2 cursor-pointer rounded-lg p-4 py-2
    `}
  >
    {/* RANKING */}
    <h3 className="font-cold mr-3 text-base text-white"> {i + 1} </h3>
    <div className="flex flex-1 flex-row items-center justify-between">
      {/* SONG COVERART */}
      <img
        src={song?.images?.coverart}
        alt={song?.title}
        className="h-20 w-20 rounded-lg"
      />
      {/* LINKS TO SONG PAGE AND ARTIST PAGE */}
      <div className="mx-3 flex-1 flex-col justify-center">
        <Link to={`/song/${song.key}`}>
          <p className="text-xl font-bold text-white"> {song?.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="mt-1 text-base text-gray-300  "> {song?.subtitle}</p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // data
  const { data } = useGetRapTopChartsQuery();

  // to scrool to the top of the page when loaded
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  // 5 songs
  const topPlaysData = data?.slice(0, 5);
  // 10 artists
  const topArtistsData = data?.slice(0, 10);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));

    dispatch(playPause(true));
  };
  // console.log(data);
  return (
    <div
      ref={divRef}
      className="ml-0 mb-6 flex max-w-full flex-1 flex-col xl:ml-6 xl:mb-0 xl:min-w-[420px] xl:max-w-[450px] "
    >
      <div className="flex w-full flex-col">
        {/* TOP PLAY SECTION */}
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-white xl:mr-4">Top Charts</h2>
          <Link to="/top-charts">
            <p className="cursor-pointer text-base text-gray-300">See more</p>
          </Link>
        </div>

        {/* TOP 5 CHARTS */}
        <div className="mt-4 flex flex-col gap-1 ">
          {topPlaysData?.map((song, i) => (
            <TopChartCard
              song={song}
              i={i}
              key={song?.key}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>

      {/* TOP ARTISTS SECTION */}
      <div className="mt-8 flex w-full flex-col ">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-white xl:mr-4">Top Artists</h2>
          <Link to="/top-artists">
            <p className="cursor-pointer text-base text-gray-300">See more</p>
          </Link>
        </div>

        {/* TOP 10 ARTISTS */}
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topArtistsData?.map((song, i) => (
            <SwiperSlide
              key={song?.key}
              style={{ width: "25%", height: "auto" }}
              className="animate-slideright rounded-full shadow-lg"
            >
              {/* LINK TO ARTIST DETAIL  */}
              <Link to={`/artists/${song?.artists[0].adamid}`}>
                {/* ARTISTS IMAGES */}
                <img
                  src={song?.images.background}
                  alt="name"
                  className="w-full rounded-full object-contain"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
