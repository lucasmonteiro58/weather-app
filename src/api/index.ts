import type { IWeatherResponse } from "@/interfaces/weather";

const API_KEY = "564f17f4c33140ceae2b68e251acc559";

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
