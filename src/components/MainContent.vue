<template>
  <div class="text-gray-150 p-10 pt-7 flex-grow flex justify-center">
    <div class="max-w-[1400px]">
      <div class="space-x-3 text-right">
        <button
          class="bg-gray-150 rounded-full w-10 h-10 text-secondary font-bold text-lg"
        >
          &deg;C
        </button>
        <button
          class="bg-[#585676] rounded-full w-10 h-10 text-gray-150 font-bold text-lg"
        >
          &deg;F
        </button>
      </div>

      <div
        class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 my-5 gap-10 justify-center"
      >
        <SmallCard v-motion-pop />
        <SmallCard v-motion-pop />
        <SmallCard v-motion-pop />
        <SmallCard v-motion-pop />
        <SmallCard v-motion-pop />
      </div>

      <div class="mt-8">
        <h3 class="text-2xl font-bold mb-5">Today's Highlights</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center">
          <LargeCard v-motion-pop>
            <!-- <div class="flex justify-between space-x-5 items-center">
              <div class="bg-gray-500 rounded-full w-[30px] h-[30px] flex justify-center items-center">
                <i class="fas fa-location-arrow"></i>
              </div>
              <p class="text-gray-150 text-sm">WSW</p>
            </div> -->
          </LargeCard>

          <LargeCard v-motion-pop>
            <!-- <div class="self-stretch text-gray-250 text-xs space-y-1">
              <div class="flex justify-between space-x-5 items-center px-1">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div class="w-full h-2 bg-gray-150 rounded-full overflow-hidden">
                <div
                  class="bg-[#FFEC65] h-2"
                  style={{ width: "84%" }}
                ></div>
              </div>
              <p class="text-right">%</p>
            </div> -->
          </LargeCard>

          <LargeCard v-motion-pop />

          <LargeCard v-motion-pop />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SmallCard from "./SmallCard.vue";
import LargeCard from "./LargeCard.vue";
</script>
