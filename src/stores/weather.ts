import type { IWeatherResponse } from "./../interfaces/weather";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getByCity, getByLatLon } from "./../api";

export const useWeatherStore = defineStore("weather", () => {
  const weatherResponse = ref<IWeatherResponse>();
  const tempType = ref<"C" | "F">("C");

  const weather = computed(() => weatherResponse.value?.data[0]);
  const weatherMinutely = computed(() => weatherResponse.value?.minutely);

  async function getWeatherCity(city: string) {
    const res = await getByCity(city);
    weatherResponse.value = res;
  }

  async function getWeatherCoords(lat: number, lon: number) {
    const res = await getByLatLon(lat, lon);
    weatherResponse.value = res;
  }

  async function changeTempType(type: "C" | "F") {
    tempType.value = type;
  }

  return {
    weather,
    weatherMinutely,
    getWeatherCity,
    getWeatherCoords,
    tempType,
    changeTempType,
  };
});
