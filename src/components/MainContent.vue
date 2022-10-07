<script setup lang="ts">
import SmallCard from "./SmallCard.vue";
import LargeCard from "./LargeCard.vue";
import { useWeatherStore } from "../stores/weather";
import { computed } from "vue";

const weatherStore = useWeatherStore();

const weather = computed(() => {
  return weatherStore.weather;
});

const listWeathers = computed(() => {
  return weatherStore.forecast;
});

const tempType = computed(() => {
  return weatherStore.tempType;
});
</script>

<template>
  <div class="text-gray-150 p-10 pt-7 flex-grow flex justify-center">
    <div class="max-w-[1400px]">
      <div class="space-x-3 text-right">
        <button
          class="rounded-full w-10 h-10 0 font-bold text-lg"
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
          class="rounded-full w-10 h-10 font-bold text-lg"
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
        class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 my-5 gap-10 justify-center"
      >
        <SmallCard
          v-for="weather in listWeathers"
          :key="weather?.date_epoch"
          :weather="weather"
          v-motion-pop
        />
      </div>

      <div class="mt-8">
        <h3 class="text-2xl font-bold mb-5">Today's Highlights</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center">
          <LargeCard
            title="Wind status"
            :val="weather?.wind_mph"
            unit="m/s"
            v-motion-pop
          >
            <div class="flex justify-between space-x-5 items-center">
              <div
                class="bg-gray-500 rounded-full w-[30px] h-[30px] flex justify-center items-center"
              >
                <IconifyIcon
                  icon="ic:baseline-navigation"
                  :style="{ transform: `rotate(${weather?.wind_degree}deg)` }"
                />
              </div>
              <p class="text-gray-150 text-sm uppercase">
                {{ weather?.wind_dir }}
              </p>
            </div>
          </LargeCard>

          <LargeCard
            title="Humidity"
            :val="weather?.humidity"
            unit="%"
            v-motion-pop
          >
            <div class="self-stretch text-gray-250 text-xs space-y-1">
              <div class="flex justify-between space-x-5 items-center px-1">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div class="w-full h-2 bg-gray-150 rounded-full overflow-hidden">
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
            :val="weather?.vis_km"
            unit="km"
            v-motion-pop
          />

          <LargeCard
            title="Air Pressure"
            :val="weather?.pressure_mb"
            unit="mb"
            v-motion-pop
          />
        </div>
      </div>
    </div>
  </div>
</template>
