import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  console.log(songData);
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10 ">
        {/* SONG LYRICS */}
        <h2 className="text-3xl font-bold text-white">Lyrics:</h2>
        <div className="mt-5 ">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p className="my-1 text-base text-gray-400">
                {line}{" "}
                {/* to add space between each stanza each line is returned like a array */}
                {i !== songData.sections[1].text.length - 1 && <br />}
              </p>
            ))
          ) : (
            <p className="my-1 text-base text-gray-400">
              Sorry, no lyrics found!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
