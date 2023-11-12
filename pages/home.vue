<script setup>
import WeatherCard from '@/components/UI/WeatherCard.vue';
import MainBlock from '@/components/Blocks/MainBlock.vue';
import ScreenSaver from '@/components/Blocks/ScreenSaver.vue';
</script>
<template>
  <div>
    <ScreenSaver />
    <WeatherCard />
    <MainBlock>
      <WeatherCard />
    </MainBlock>
  </div>
</template>
