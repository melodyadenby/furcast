import { NWS_API_URL } from "@/constants/Urls";
import { NWSErrorResponse, NWSResponse } from "@/constants/weather.types";

export const getLocationByCoordinates = async (
	lat: string,
	lng: string
): Promise<NWSResponse | NWSErrorResponse | void> => {
	try {
		const response = await fetch(`${NWS_API_URL}/points/${lat},${lng}`, {
			method: "GET",
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}

		const data: NWSResponse = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error("Failed to fetch data:", error);
	}
};
