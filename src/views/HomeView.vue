<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
import MainContent from "../components/MainContent.vue";
</script>

<template>
  <main class="bg-primary w-full min-h-screen flex flex-col lg:flex-row">
    <SideBar></SideBar>
    <MainContent></MainContent>
  </main>
</template>
