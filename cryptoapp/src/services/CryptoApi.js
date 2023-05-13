import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const CryptoApiHeaders = {
    'x-rapidapi-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '4ec730d31dmshc8e2c4a4a6fa716p1c607ejsn39f77b109c60'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({ url, headers: CryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi' ,
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        FetchCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }) 
    })
})

export const {
    useFetchCryptosQuery,
} = cryptoApi
