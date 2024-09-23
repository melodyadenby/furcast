import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./locationSlice"; // Path to your slice file

export const store = configureStore({
	reducer: {
		location: locationReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
