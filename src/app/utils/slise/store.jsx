"use client";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/app/utils/slise/userSlice";

export function makeStore() {
    return configureStore({
        reducer: {
            user: userReducer,
        },
    });
}

export const store = makeStore();
