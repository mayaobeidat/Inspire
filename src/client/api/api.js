import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = "http://localhost:8080";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    getUser: builder.query({
      query: (token) => ({
        url: "/users",
        method: "GET",
        headers: authHeaders(token),
      }),
    }),
    getProduct: builder.query({
      query: (token) => ({
        url: "/orders",
        method: "GET",
        headers: authHeaders(token),
      }),
    }),
  }),
});

const authHeaders = (token) => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
});

export default authApi;