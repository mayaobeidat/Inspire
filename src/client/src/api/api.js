import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi ({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery ({
        baseUrl: 'http://localhost:8080/',
        prepareHeaders: (headers, { getState }) => {
            console.log("prepareHeaders");
            console.log(getState());
            const token = getState().auth?.token;
            console.log("TOKEN", token);
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: ()=> ({})
});