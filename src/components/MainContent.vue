<script setup lang="ts">
import SmallCard from "./SmallCard.vue";
import LargeCard from "./LargeCard.vue";
import { useWeatherStore } from "../stores/weather";
import { computed } from "vue";
import { storeToRefs } from "pinia";

const weatherStore = useWeatherStore();

const { weather, forecast } = storeToRefs(weatherStore);

const tempType = computed(() => {
  return weatherStore.tempType;
});
</script>

<template>
  <div class="flex justify-center flex-grow p-10 text-gray-150 pt-7">
    <div class="max-w-[1400px]">
      <div class="space-x-3 text-right">
        <button
          class="w-10 h-10 text-lg font-bold rounded-full 0"
          :class="
            tempType === 'C'
              ? 'bg-gray-150 text-secondary'
              : 'bg-[#585676] text-gray-150'
          "
          @click="weatherStore.changeTempType('C')"
        >
          &deg;C
        </button>
        <button
          class="w-10 h-10 text-lg font-bold rounded-full"
          :class="
            tempType === 'F'
              ? 'bg-gray-150 text-secondary'
              : 'bg-[#585676] text-gray-150'
          "
          @click="weatherStore.changeTempType('F')"
        >
          &deg;F
        </button>
      </div>

      <div
        class="grid justify-center grid-cols-1 gap-10 my-5 md:grid-cols-3 xl:grid-cols-3"
      >
        <SmallCard
          v-for="w in forecast"
          :key="w.id"
          :weather="w"
          v-motion-pop
        />
      </div>

      <div class="mt-8">
        <h3 class="mb-5 text-2xl font-bold">Today's Highlights</h3>
        <div class="grid justify-center grid-cols-1 gap-5 lg:grid-cols-2">
          <LargeCard
            title="Wind status"
            :val="weather?.windspeedKmph"
            unit="Km/h"
            v-motion-pop
          >
            <div class="flex items-center justify-between space-x-5">
              <div
                class="bg-gray-500 rounded-full w-[30px] h-[30px] flex justify-center items-center"
              >
                <IconifyIcon
                  icon="ic:baseline-navigation"
                  :style="{ transform: `rotate(${weather?.winddirDegree}deg)` }"
                />
              </div>
              <p class="text-sm uppercase text-gray-150">
                {{ weather?.winddir16Point }}
              </p>
            </div>
          </LargeCard>

          <LargeCard
            title="Humidity"
            :val="weather?.humidity"
            unit="%"
            v-motion-pop
          >
            <div class="self-stretch space-y-1 text-xs text-gray-250">
              <div class="flex items-center justify-between px-1 space-x-5">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div class="w-full h-2 overflow-hidden rounded-full bg-gray-150">
                <div
                  class="bg-[#FFEC65] h-2"
                  :style="{ width: `${weather?.humidity}%` }"
                ></div>
              </div>
              <p class="text-right">%</p>
            </div>
          </LargeCard>

          <LargeCard
            title="Visibility"
            :val="weather?.visibility"
            unit="km"
            v-motion-pop
          />

          <LargeCard
            title="Air Pressure"
            :val="weather?.pressure"
            unit="mb"
            v-motion-pop
          />
        </div>
      </div>
    </div>
  </div>
</template>
