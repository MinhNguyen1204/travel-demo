import { createApi } from "@reduxjs/toolkit/query/react";

import axiosBaseQuery from "../../storage/baseQuery";

const homeQuery = createApi({
  reducerPath: "homeAPI",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<any, void>({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
  }),
});

export default homeQuery;

export const { useGetPostsQuery } = homeQuery;
