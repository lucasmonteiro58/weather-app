<script setup lang="ts">
import { onMounted, ref } from "vue";

import { useWeatherStore } from "../stores/weather";

const weatherStore = useWeatherStore();

const emits = defineEmits(["close"]);

const location = ref("");
const locations = ref<string[]>([]);

function closeSearch() {
  emits("close");
}

function pushLocationLocalStorage() {
  const locations = JSON.parse(localStorage.getItem("locations") || "[]");
  const locationExists = locations.find(
    (item: string) => item === location.value
  );

  if (!locationExists) {
    locations.push(location.value);
    localStorage.setItem("locations", JSON.stringify(locations));
  }
}

function getLocations() {
  const locations = JSON.parse(localStorage.getItem("locations") || "[]");
  return locations;
}

async function onSearch() {
  await weatherStore.getWeatherCity(location.value).then(() => {
    pushLocationLocalStorage();
    closeSearch();
  });
}

async function getOnClickLocation(location: string) {
  await weatherStore.getWeatherCity(location).then(() => {
    closeSearch();
  });
}

onMounted(() => {
  locations.value = getLocations();
});
</script>

<template>
  <div class="text-gray-150">
    <div class="text-right">
      <button class="text-2xl" @click="closeSearch">
        <IconifyIcon icon="ic:baseline-close" />
      </button>
    </div>

    <div class="flex justify-between my-5 flex-wrap gap-y-5">
      <input
        v-model="location"
        type="text"
        class="border border-gray-150 bg-transparent p-3 flex-grow mr-2"
        placeholder="search location"
      />
      <button
        class="bg-[#3C47E9] py-3 px-5 hover:bg-[#3C47E9]/70 ml-0"
        @click="onSearch"
      >
        Search
      </button>
    </div>

    <div class="mt-20">
      <button
        class="hover:border border-gray-250 px-4 py-6 w-full flex justify-between"
        v-for="(location, i) in locations"
        @click="getOnClickLocation(location)"
        :key="i"
      >
        <p>{{ location }}</p>
        <i class="fas fa-chevron-right text-gray-350"></i>
      </button>
    </div>
  </div>
</template>
