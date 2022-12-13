import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl:'https://shazam-core.p.rapidapi.com/v1',
      prepareHeaders:(headers) => {
        headers.set('X-RapidAPI-Key','d3d78e0352msh8c61b3aa2ca3027p125998jsne5eae720fc25');

        return headers;
      },
    }),
    endpoints:(builder) => ({
      getTopCharts: builder.query({query:() =>'charts/world'}),
      getSongsByGenre: builder.query({query:(genre) => `/charts/genre-world?genre_code=${genre}`}),
      getSongDetails: builder.query({query:(songid) => `/tracks/details?track_id=${songid}`}),
      getSongRelated: builder.query({query:(songid) => `/tracks/related?track_id=${songid}`}),
      getArtistDetails: builder.query({query:(artistId) => `/artists/details?artist_id=${artistId}`}),
      getSongsByCountry:builder.query({query : (countryCode) => `/charts/country?country_code=${countryCode}`}),
      getSongsBySearch:builder.query({query : (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
    }),
  });

  export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
  } = shazamCoreApi;


  //Discover.js içinde herhangi bir fetch ile ilgili bir lojik yapı tutmuyoruz. Tüm fetch ile ilgili lojik yapıyu burada kurup 
  //useGetTopChartsQuery() methodu ile discover.jsx içine verdik.