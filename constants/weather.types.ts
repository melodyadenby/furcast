export interface NWSResponse {
	"@context": Array<string | NWSContext>;
	id: string;
	type: string;
	geometry: Geometry;
	properties: Properties;
}

export interface NWSErrorResponse {
	correlationId: string;
	parameterErrors: {
		parameter: string;
		message: string;
	};
	tityle: string;
	type: string;
	status: string;
	detail: string;
	instance: string;
}

interface NWSContext {
	"@version": string;
	wx: string;
	s: string;
	geo: string;
	unit: string;
	"@vocab": string;
	geometry: GeoCoordinates;
	city: string;
	state: string;
	distance: QuantitativeValue;
	bearing: QuantitativeValue;
	value: string;
	unitCode: string;
	forecastOffice: string;
	forecastGridData: string;
	publicZone: string;
	county: string;
}

interface GeoCoordinates {
	"@id": string;
	"@type": string;
}

interface QuantitativeValue {
	"@id"?: string;
	"@type": string;
}

interface Geometry {
	type: string;
	coordinates: [number, number];
}

interface Properties {
	"@id": string;
	"@type": string;
	cwa: string;
	forecastOffice: string;
	gridId: string;
	gridX: number;
	gridY: number;
	forecast: string;
	forecastHourly: string;
	forecastGridData: string;
	observationStations: string;
	relativeLocation: RelativeLocation;
	forecastZone: string;
	county: string;
	fireWeatherZone: string;
	timeZone: string;
	radarStation: string;
}

interface RelativeLocation {
	type: string;
	geometry: Geometry;
	properties: RelativeLocationProperties;
}

interface RelativeLocationProperties {
	city: string;
	state: string;
	distance: Distance;
	bearing: Bearing;
}

interface Distance {
	unitCode: string;
	value: number;
}

interface Bearing {
	unitCode: string;
	value: number;
}
