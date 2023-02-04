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

    getSongDetails: builder.query({
      query: (songid) => `/v1/tracks/details?track_id=${songid}`,
    }),
  }),
});

export const { useGetRapTopChartsQuery, useGetSongDetailsQuery } =
  shazamCoreApi;
