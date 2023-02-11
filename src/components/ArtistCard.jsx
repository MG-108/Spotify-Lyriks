import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  // console.log(track);
  return (
    <div
      className="flex w-[250px] animate-slideup cursor-pointer flex-col rounded-lg bg-white/5 bg-opacity-80 p-4 backdrop-blur-sm"
      onClick={() =>
        navigate(
          track.artists
            ? `/artists/${track?.artists[0]?.adamid}`
            : "/top-artists"
        )
      }
    >
      <img
        src={track?.images?.coverart}
        alt="artist"
        className="h-56 w-full rounded-lg"
      />
      <p className="mt-4 truncate text-lg font-semibold text-white">
        {track?.subtitle}
      </p>
    </div>
  );
};
export default ArtistCard;
