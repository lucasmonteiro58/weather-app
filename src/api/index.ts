import type { IWeatherResponse } from "@/interfaces/weather";

export async function getForecast(
  query: string | null
): Promise<IWeatherResponse> {
  const res = await fetch(
    query ? `https://wttr.in/${query}?format=j1` : "https://wttr.in/?format=j1"
  );
  const data = await res.json();
  return data;
}
