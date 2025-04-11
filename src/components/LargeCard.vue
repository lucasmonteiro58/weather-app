<script setup lang="ts">
defineProps<{
  title: string;
  val?: undefined | number | string;
  unit: string;
}>();
</script>

<template>
  <div
    class="flex flex-col items-center justify-between px-10 space-y-4 bg-secondary py-7"
  >
    <p>{{ title }}</p>
    <h2 class="text-6xl font-bold">
      {{ typeof val === "number" ? val.toFixed(1) : val }}
      <span class="text-4xl font-normal">{{ unit }}</span>
    </h2>
    <slot></slot>
  </div>
</template>
