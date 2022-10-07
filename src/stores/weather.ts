import type { IWeatherResponse } from "./../interfaces/weather";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getForecast } from "./../api";

export const useWeatherStore = defineStore("weather", () => {
  const weatherResponse = ref<IWeatherResponse>();
  const tempType = ref<"C" | "F">("C");

  const weather = computed(() => weatherResponse.value?.current);
  const forecast = computed(() => weatherResponse.value?.forecast.forecastday);
  const location = computed(() => weatherResponse.value?.location);

  const weatherMinutely = computed(() => weatherResponse.value?.forecast);

  async function getWeatherForecast(q: string) {
    const res = await getForecast(q);
    weatherResponse.value = res;
  }

  async function changeTempType(type: "C" | "F") {
    tempType.value = type;
  }

  return {
    weather,
    forecast,
    location,
    weatherMinutely,
    tempType,
    changeTempType,
    getWeatherForecast,
  };
});
