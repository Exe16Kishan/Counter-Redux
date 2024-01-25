import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";


export const store = configureStore({
    reducer:{
        // all the slices  
        counter : CounterSlice
    },
})