import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slice/authSlice"
import postSlice from "./slice/postSlice"
import orderSlice from "./slice/orderSlice"


export const store = configureStore({
            reducer: {
                        auth: authSlice,
                        post: postSlice,
                        order: orderSlice
            }

})