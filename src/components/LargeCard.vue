<script setup lang="ts">
defineProps<{
  title: string;
  val?: undefined | number;
  unit: string;
}>();
</script>

<template>
  <div
    class="bg-secondary py-7 px-10 flex flex-col items-center justify-between space-y-4"
  >
    <p>{{ title }}</p>
    <h2 class="text-6xl font-bold">
      {{ val }}
      <span class="text-4xl font-normal">{{ unit }}</span>
    </h2>
    <slot></slot>
  </div>
</template>
