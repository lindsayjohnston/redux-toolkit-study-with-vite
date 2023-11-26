import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"

const DOGS_API_KEY = "live_6lgQu33WT7qw9oTD6F9PZmSscLTLDrGO7bXSxwFVPjFvLC7OBrYiiJGfPes6aofg"

interface Breed {
   id: string;
   name: string;
   image: {
      url: string
   }
}

const dogsApiSlice = createApi({
   reducerPath: 'api',
   baseQuery: fetchBaseQuery({
      baseUrl: "https://api.thedogai.com/v1",
      prepareHeaders(headers) {
         headers.set('x-api-key', DOGS_API_KEY);
         return headers;
      }
   }),
   endpoints(builder) {
      return {
         fetchBreeds: builder.query<Breed[], number | void> ({
            query(limit = 10){
               return `/breeds?limit=${limit}`
            }
         })
      }
   }
})