<script setup lang="ts">
import type { Forecastday } from "@/interfaces/weather";
import { useWeatherStore } from "../stores/weather";
import { formatData } from "@/composables";
import { computed } from "vue";

const weatherStore = useWeatherStore();

defineProps<{
  weather: Forecastday | undefined;
}>();

const tempType = computed(() => {
  return weatherStore.tempType;
});

const isFarenheit = computed(() => {
  return tempType.value === "F";
});
</script>

<template>
  <div class="bg-secondary py-4 px-5 flex flex-col items-center space-y-4">
    <p>{{ weather && formatData(weather?.date) }}</p>
    <img
      :src="weather?.day.condition?.icon"
      alt="weather-icon"
      class="max-h-16"
    />
    <div class="flex justify-between space-x-5">
      <p v-if="isFarenheit">{{ weather?.day.mintemp_f }} &deg;F</p>
      <p v-else>{{ weather?.day.mintemp_c }}&deg;C</p>

      <p v-if="isFarenheit">{{ weather?.day.maxtemp_f }}&deg;F</p>
      <p v-else>{{ weather?.day.maxtemp_c }}&deg;C</p>
    </div>
  </div>
</template>
