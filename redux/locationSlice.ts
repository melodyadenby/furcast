import { NWSResponse } from "@/constants/weather.types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
export const fetchLocationInfo = createAsyncThunk(
	"location/fetchLocationInfo",
	async ({ lat, lng }: { lat: string; lng: string }) => {
		const response = await fetch(
			`https://api.weather.gov/points/${lat},${lng}`
		);
		const data: NWSResponse = await response.json();
		return {
			latitude: lat,
			longitude: lng,
			forecast_office_id: data.properties.gridId, // Extract forecast office id
		};
	}
);

interface LocationState {
	latitude: string;
	longitude: string;
	forecast_office_id: string;
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}

const initialState: LocationState = {
	latitude: "",
	longitude: "",
	forecast_office_id: "",
	status: "idle",
	error: null,
};

const locationSlice = createSlice({
	name: "location",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLocationInfo.pending, (state) => {
				state.status = "loading";
			})
			.addCase(
				fetchLocationInfo.fulfilled,
				(
					state,
					action: PayloadAction<{
						latitude: string;
						longitude: string;
						forecast_office_id: string;
					}>
				) => {
					state.status = "succeeded";
					state.latitude = action.payload.latitude;
					state.longitude = action.payload.longitude;
					state.forecast_office_id = action.payload.forecast_office_id;
				}
			)
			.addCase(fetchLocationInfo.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message || "Failed to fetch location info";
			});
	},
});

export default locationSlice.reducer;
