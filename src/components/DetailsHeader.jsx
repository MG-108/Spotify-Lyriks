import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.data[0]?.attributes;

  return (
    // GRADIENT CONTAINER
    <div className="relative flex w-full flex-col">
      <div className="h-28 w-full bg-gradient-to-l  from-transparent to-black sm:h-48" />
      <div className="absolute inset-0 flex items-center">
        {/*  ARTIST image  or  SONG image */}
        <img
          src={
            artistId
              ? artist?.artwork?.url.replace("{w}", "500").replace("{h}", "500")
              : songData?.images?.coverart
          }
          alt="art"
          className="h-28 w-28 rounded-full border-2 object-cover shadow-xl shadow-black sm:h-48 sm:w-48 "
        />
        {/* ARTIST name or SONG name   */}
        <div className="ml-5 ">
          <p className="text-xl font-bold text-white sm:text-2xl">
            {artistId ? artist?.name : songData?.title}
          </p>

          {/* LINK TO ARTIST DETAIL PAGE  */}
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="mt-2 text-base text-gray-400">
                {songData?.subtitle}
              </p>
            </Link>
          )}

          {/* {ARTIST genre or SONG genre} */}
          <p className="mt-2 text-base text-gray-400">
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
      {/* to give some space between(y) the gradient and the content */}
      <div className="h-24 w-full sm:h-44" />
    </div>
  );
};

export default DetailsHeader;
