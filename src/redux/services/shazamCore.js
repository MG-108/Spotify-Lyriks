/* eslint-disable implicit-arrow-linebreak */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsaTopCharts: builder.query({
      query: () =>
        "charts/track?locale=en-US&listId=ip-country-chart-US&pageSize=20&startFrom=0",
    }),

    getSongsByGenre: builder.query({
      query: (genre) =>
        `/charts/track?locale=en-US&listId=${genre}&pageSize=20&startFrom=0`,
    }),

    getSongDetails: builder.query({
      query: ({ songid }) => `/songs/get-details?key=${songid}&locale=en-US'`,
    }),

    getSongRelated: builder.query({
      query: ({ songid }) =>
        `/songs/list-recommendations?key=${songid}&locale=en-US`,
    }),

    getArtistDetails: builder.query({
      query: (artistid) => `/artists/get-details?id=${artistid}=en-US`,
    }),

    getRapSongsByCountry: builder.query({
      query: (countryCode) => `v1/charts/country?country_code=${countryCode}`,
    }),

    getTopCharts: builder.query({
      query: () => "charts/track?locale=en-US&pageSize=20&startFrom=0",
    }),

    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `/search?term=${searchTerm}&locale=en-US&offset=0&limit=5`,
    }),
  }),
});

export const {
  useGetUsaTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetRapSongsByCountryQuery,
  useGetTopChartsQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
