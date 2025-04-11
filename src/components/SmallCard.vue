<script setup lang="ts">
import type { Weather } from "@/interfaces/weather";
import { useWeatherStore } from "../stores/weather";
import { formatData } from "@/composables";
import { computed } from "vue";

const weatherStore = useWeatherStore();

defineProps<{
  weather: Weather | undefined;
}>();

const tempType = computed(() => {
  return weatherStore.tempType;
});

const isFarenheit = computed(() => {
  return tempType.value === "F";
});
</script>

<template>
  <div class="flex flex-col items-center px-5 py-4 space-y-4 bg-secondary">
    <p>{{ weather && formatData(weather?.date) }}</p>
    <!-- <img
      :src="weather?.day.condition?.icon"
      alt="weather-icon"
      class="max-h-16"
    /> -->
    <div class="flex justify-between space-x-5">
      <p v-if="isFarenheit">{{ weather?.mintempF }} &deg;F</p>
      <p v-else>{{ weather?.mintempC }}&deg;C</p>

      <p v-if="isFarenheit">{{ weather?.maxtempF }}&deg;F</p>
      <p v-else>{{ weather?.maxtempC }}&deg;C</p>
    </div>
  </div>
</template>
