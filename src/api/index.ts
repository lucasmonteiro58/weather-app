import type { IWeatherResponse } from "@/interfaces/weather";

const { VITE_BASE_URL, VITE_RAPID_API_KEY, VITE_RAPID_API_HOST } = import.meta
  .env;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": VITE_RAPID_API_HOST,
  },
};

export async function getForecast(query: string): Promise<IWeatherResponse> {
  const res = await fetch(
    `https://${VITE_BASE_URL}/forecast.json?q=${query}&days=5`,
    options
  );
  const data = await res.json();
  return data;
}
