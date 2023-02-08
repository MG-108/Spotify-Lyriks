import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => (
  <div className="flex flex-col">
    <h1 className="text-3xl font-bold text-white">
      {artistId ? "Top Songs" : "Related Songs"}
    </h1>
    {/* {console.log(data)} */}

    <div className="mt-6 flex w-full flex-col">
      {data.map((song, i) => (
        <SongBar
          key={i}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
