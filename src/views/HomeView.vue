<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
import MainContent from "../components/MainContent.vue";
import { useWeatherStore } from "../stores/weather";
import { onMounted } from "vue";

const weatherStore = useWeatherStore();

function getUserLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      weatherStore.getWeatherCoords(latitude, longitude);
    },
    () => {
      weatherStore.getWeatherCity("New York");
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
  </main>
</template>
