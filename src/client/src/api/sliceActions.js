// import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";
// import { 
//     createOrder_Product, 
//     deleteOrder_Product, 
//     getAllOrder_Products, 
//     getAllOrders, getAllUsers, 
//     getOrderByUserId, 
//     getProductById, 
//     getUserById, 
//     updateOrder_Product } from "../../server/api/db";

const actionsApi = api.injectEndpoints ({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => "api/users",
        }),
        getUserById: builder.query({
            query: () => `api/users/${id}`,
        }),
        getAllProducts: builder.query({
            query: () => "api/products",
        }),
        getProductById: builder.query({
            query: () => `api/products/${id}`,
        }),
        getAllOrder_Products: builder.query({
            query: () => "api/order_products",
        }),
        getOrder_ProductByOrderId: builder.query({
            query: () => `api/order_products/${id}`,
        }),
        createOrder_Product: builder.mutation({
            query: (body) => ({
                url: "api/order_products",
                method: "POST",
                body: body,
              }),
        }),
        deleteOrder_Product: builder.mutation({
            query: (body) => ({
                url: `api/order_products/${id}`,
                method: "DELETE",
                body: body,
              }),
        }),
        updateOrder_Product: builder.mutation({
            query: (body) => ({
                url: `api/order_products/${id}`,
                method: "PUT",
                body: body,
            }),
        }),
        getAllOrders: builder.query({
            query: () => "api/orders",
        }),
        getOrderById: builder.query({
            query: () => `api/orders/${id}`,
        }),
        getOrderByUserId: builder.query({
            query: () => `api/${id}/orders`
        }),
    }),
});
export const { 
    useGetAllUsersQuery, 
    useGetUserByIdQuery, 
    useGetAllProductsQuery, 
    useGetProductByIdQuery,
    useGetAllOrder_ProductsQuery,
    useGetOrder_ProductByOrderIdQuery,
    useCreateOrder_ProductMutation,
    useDeleteOrder_ProductMutation,
    useUpdateOrder_ProductMutation,
    useGetAllOrdersQuery,
    useGetOrderByIdQuery,
    useGetOrderByUserIdQuery 
} = actionsApi;
