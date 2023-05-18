import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const CryptoApiHeaders = {
  'x-rapidapi-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '4ec730d31dmshc8e2c4a4a6fa716p1c607ejsn39f77b109c60'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url: `/${url}`, headers: CryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    GetCryptos: builder.query({
      query: (count) => createRequest(`coins?limit=${count}`),
    }),
    GetCryptoDetails: builder.query({
      query: (coinId) => createRequest(`coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({coinId, timePeriod}) => createRequest(`coin/${coinId}/history/${timePeriod}`),
    })
  })
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery
} = cryptoApi;