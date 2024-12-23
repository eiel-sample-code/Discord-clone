import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/userSlice.ts";
import channelReducer from "../features/channelSlice.tsx"

export const store = configureStore({
    reducer: {
        user: userReducer,
        channel: channelReducer,
    },
})

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;