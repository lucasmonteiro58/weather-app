<script setup lang="ts">
const emits = defineEmits(["close"]);

function closeSearch() {
  emits("close");
}
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
        type="text"
        class="border border-gray-150 bg-transparent p-3 flex-grow mr-2"
        placeholder="search location"
      />
      <button class="bg-[#3C47E9] py-3 px-5 hover:bg-[#3C47E9]/70 ml-0">
        Search
      </button>
    </div>

    <div class="mt-20">
      <button
        class="hover:border border-gray-250 px-4 py-6 w-full flex justify-between"
      >
        <p>London</p>
        <i class="fas fa-chevron-right text-gray-350"></i>
      </button>
    </div>
  </div>
</template>
