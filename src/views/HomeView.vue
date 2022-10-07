<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
import MainContent from "../components/MainContent.vue";
import { useWeatherStore } from "../stores/weather";
import { onMounted, computed } from "vue";
import LoadingBg from "../components/LoadingBg.vue";

const weatherStore = useWeatherStore();

const loading = computed(() => weatherStore.loadingResponse);

function getUserLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      weatherStore.getWeatherForecast(`${latitude},${longitude}`);
    },
    () => {
      weatherStore.getWeatherForecast("New York");
    }
  );
}

onMounted(() => {
  getUserLocation();
});
</script>

<template>
  <main class="bg-primary w-full min-h-screen flex flex-col lg:flex-row">
    <SideBar></SideBar>
    <MainContent></MainContent>
    <LoadingBg v-if="loading"></LoadingBg>
  </main>
</template>
