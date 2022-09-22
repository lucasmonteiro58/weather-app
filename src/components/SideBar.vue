<script setup lang="ts">
import { computed, ref } from "vue";
import SearchLocation from "./SearchLocation.vue";
import { useWeatherStore } from "../stores/weather";
import { useConversorFarenheit } from "@/composables";

const weatherStore = useWeatherStore();

const weather = computed(() => {
  return weatherStore.weather;
});

const tempType = computed(() => {
  return weatherStore.tempType;
});

const isFarenheit = computed(() => {
  return tempType.value === "F";
});

const showSearch = ref(false);

function openSearch() {
  showSearch.value = true;
}

function closeSearch() {
  showSearch.value = false;
}

function getUserLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      weatherStore.getWeatherCoords(latitude, longitude);
    },
    (error) => {
      console.log(error);
    }
  );
}
</script>

<template>
  <div
    class="flex flex-col min-h-screen bg-secondary w-full lg:w-1/3 xl:w-1/4 p-7 lg:p-4 xl:p-7 space-y-10 overflow-x-hidden"
  >
    <SearchLocation
      v-if="showSearch"
      @close="closeSearch"
      v-motion-slide-left
    ></SearchLocation>
    <span v-else v-motion-slide-right>
      <div class="relative flex justify-between mb-10">
        <button
          class="static z-10 px-4 py-2 text bg-[#6E707A] hover:bg-[#6E707A]/70 text-gray-150 shadow-md"
          @click="openSearch"
        >
          Search for places
        </button>
        <button
          @click="getUserLocation"
          class="static z-10 text bg-[#6d6f79] hover:bg-[#6d6f79]/70 text-gray-150 rounded-full shadow-md w-[40px] h-[40px] flex justify-center items-center"
        >
          <IconifyIcon icon="ic:baseline-gps-fixed" />
        </button>
      </div>

      <div class="relative -mx-36 flex justify-center items-center max-h-40">
        <img
          src="@/assets/images/cloud-background.png"
          alt="bg"
          class="opacity-10 absolute max-w-52"
        />
        <img src="@/assets/images/shower.png" alt="weather" class="max-h-48" />
      </div>

      <div class="flex flex-col items-center justify-between pt-1">
        <h1 class="text-gray-150 text-[144px] font-medium">
          {{
            isFarenheit
              ? useConversorFarenheit(weather?.temp)
              : weather && Math.round(weather?.temp)
          }}
          <span class="text-5xl text-gray-250">&deg;{{ tempType }}</span>
        </h1>
        <h3 class="font-semibold text-4xl text-gray-250">
          {{ weather?.weather.description }}
        </h3>
        <div
          class="flex flex-col items-center text-center text-gray-350 text-lg space-y-5"
        >
          <p>Today &bull; Fri 5 Jun</p>
          <p>
            <IconifyIcon class="inline" icon="ic:baseline-location-on" />
            {{ weather?.city_name }}
          </p>
        </div>
      </div>
    </span>
  </div>
</template>
