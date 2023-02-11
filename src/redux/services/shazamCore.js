/* eslint-disable implicit-arrow-linebreak */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRapTopCharts: builder.query({
      query: () => "/v1/charts/genre-world?genre_code=HIP_HOP_RAP",
    }),

    getSongsByGenre: builder.query({
      query: (genre) => `/v1/charts/genre-world?genre_code=${genre}`,
    }),

    getSongDetails: builder.query({
      query: ({ songid }) => `/v1/tracks/details?track_id=${songid}`,
    }),

    getSongRelated: builder.query({
      query: ({ songid }) => `/v1/tracks/related?track_id=${songid}`,
    }),

    getArtistDetails: builder.query({
      query: (artistId) => `/v2/artists/details?artist_id=${artistId}`,
    }),

    getRapSongsByCountry: builder.query({
      query: (countryCode) => `v1/charts/country?country_code=${countryCode}`,
    }),

    getTopCharts: builder.query({
      query: () => "/v1/charts/world",
    }),

    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `/v1/search/multi?query=${searchTerm}&search_type=SONGS_ARTISTS`,
    }),
  }),
});

export const {
  useGetRapTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetRapSongsByCountryQuery,
  useGetTopChartsQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
