import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  reducerPath: "adminAPI",
  tagTypes: ["User", "Product"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (id) => `/user/${id}`,
      providesTags: ["User"],
    }),
    getProduct: builder.query({
      query: () => `/product`,
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetUsersQuery, useGetProductQuery } = api;
