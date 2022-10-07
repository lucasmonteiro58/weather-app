import type { IWeatherResponse } from "@/interfaces/weather";

const API_KEY = "564f17f4c33140ceae2b68e251acc559";

const { VITE_BASE_URL, VITE_RAPID_API_KEY, VITE_RAPID_API_HOST } = import.meta
  .env;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": VITE_RAPID_API_HOST,
  },
};

export async function getForecast(query: string) {
  const res = await fetch(
    `https://${VITE_BASE_URL}/forecast.json?q=${query}&days=5`,
    options
  );
  const data = await res.json();
  return data;
}

export async function getByLatLon(
  lat: number = -3.757576,
  lon: number = -38.558531
): Promise<IWeatherResponse> {
  const res = await fetch(
    `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${API_KEY}&include=minutely`
  );
  return res.json();
}

export async function getByCity(
  city: string = "Fortaleza"
): Promise<IWeatherResponse> {
  const res = await fetch(
    `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}&include=minutely`
  );
  return res.json();
}
