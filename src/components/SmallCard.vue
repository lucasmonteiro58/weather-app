<script setup lang="ts">
import type { IWeatherMinutely } from "@/interfaces/weather";
import { useWeatherStore } from "../stores/weather";
import { useConversorFarenheit, formatData } from "@/composables";
import { computed } from "vue";

const weatherStore = useWeatherStore();

defineProps<{
  weather: IWeatherMinutely | undefined;
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
    <p>{{ weather && formatData(weather?.timestamp_local) }}</p>
    <img
      src="@/assets/images/heavycloud.png"
      alt="weather-icon"
      class="max-h-16"
    />
    <div class="flex justify-between space-x-5">
      <p v-if="isFarenheit">{{ useConversorFarenheit(weather?.temp) }}&deg;F</p>
      <p v-else>{{ weather?.temp }}&deg;C</p>
    </div>
  </div>
</template>
