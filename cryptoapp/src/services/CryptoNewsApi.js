import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '4ec730d31dmshc8e2c4a4a6fa716p1c607ejsn39f77b109c60',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }


const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi' ,
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        FetchCryptosNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }) 
    })
})

export const { useFetchCryptosNewsQuery } = cryptoNewsApi