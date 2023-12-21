import { createApi } from "@reduxjs/toolkit/query/react";

import axiosBaseQuery from "../../baseQuery";

interface UserInfo {
  email: string;
  password: string;
}

const authQuery = createApi({
  reducerPath: "authAPI",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, Partial<UserInfo>>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        data: credentials,
      }),
    }),
    register: builder.mutation<UserInfo, UserInfo>({
      query: (credentials) => ({
        url: "register",
        method: "POST",
        data: credentials,
      }),
    }),
  }),
});

export default authQuery;

export const { useLoginMutation, useRegisterMutation } = authQuery;
