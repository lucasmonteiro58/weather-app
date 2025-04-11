<script setup lang="ts">
import { computed, ref } from "vue";
import SearchLocation from "./SearchLocation.vue";
import { useWeatherStore } from "../stores/weather";
import { formatDataName, getWeatherIconUrl } from "@/composables";
import { storeToRefs } from "pinia";

const weatherStore = useWeatherStore();

const { weather, location } = storeToRefs(weatherStore);

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
      weatherStore.getWeatherForecast(`${latitude},${longitude}`);
    },
    (error) => {
      console.log(error);
    }
  );
}
</script>

<template>
  <div
    class="flex flex-col w-full min-h-screen space-y-10 overflow-x-hidden bg-secondary lg:w-1/3 xl:w-1/4 p-7 lg:p-4 xl:p-7"
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

      <div class="relative flex items-center justify-center -mx-36 max-h-40">
        <img
          src="@/assets/images/cloud-background.png"
          alt="bg"
          class="absolute opacity-10 max-w-52"
        />
        <img
          :src="getWeatherIconUrl(weather?.weatherCode)"
          alt="weather"
          class="h-[120px] rounded-2xl"
        />
      </div>

      <div class="flex flex-col items-center justify-between pt-1">
        <h1 class="text-gray-150 text-[100px] font-medium mb-8 truncate">
          {{ isFarenheit ? weather?.temp_F : weather?.temp_C }}
          <span class="text-5xl text-gray-250">&deg;{{ tempType }}</span>
        </h1>
        <h3 class="text-4xl font-semibold text-center text-gray-250">
          {{ weather?.weatherDesc[0]?.value }}
        </h3>
        <div
          class="flex flex-col items-center space-y-5 text-lg text-center text-gray-350"
        >
          <p>{{ weather && formatDataName(weather?.localObsDateTime) }}</p>
          <p>
            <IconifyIcon class="inline" icon="ic:baseline-location-on" />
            {{ location?.areaName[0]?.value }},
            {{ location?.region[0]?.value }} -
            {{ location?.country[0]?.value }}
          </p>
        </div>
      </div>
    </span>
  </div>
</template>
