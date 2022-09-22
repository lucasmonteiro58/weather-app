<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
import MainContent from "../components/MainContent.vue";
import { useWeatherStore } from "../stores/weather";
import { onMounted } from "vue";

const weatherStore = useWeatherStore();

onMounted(() => {
  weatherStore.getWeatherCity("Fortaleza");
});
</script>

<template>
  <main class="bg-primary w-full min-h-screen flex flex-col lg:flex-row">
    <SideBar></SideBar>
    <MainContent></MainContent>
  </main>
</template>
