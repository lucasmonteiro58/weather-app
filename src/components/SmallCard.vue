<script setup lang="ts">
import type { IWeatherMinutely } from "@/interfaces/weather";

defineProps<{
  weather: IWeatherMinutely | undefined;
}>();
</script>

<template>
  <div class="bg-secondary py-4 px-5 flex flex-col items-center space-y-4">
    <p>{{ weather?.timestamp_local }}</p>
    <img
      src="@/assets/images/heavycloud.png"
      alt="weather-icon"
      class="max-h-16"
    />
    <div class="flex justify-between space-x-5">
      <p>{{ weather?.temp }}&deg;C</p>
    </div>
  </div>
</template>
