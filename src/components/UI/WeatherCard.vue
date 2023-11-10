<script setup>
const props = defineProps(['element']);

const card = {
  temperature: '20°',
  img: '_nuxt/src/assets/images/Weather/img.png',
  data: ['H:21°', 'L:-19°'],
  city: 'Toronto',
  weather: 'Fast Wind',
};
</script>

<template>
  <div class="weatherCard">
    <div class="weatherCard__top">
      <p class="weatherCard__temperature">{{ card.temperature }}</p>
      <div class="weatherCard__img">
        <img :src="card.img" alt="weather" />
      </div>
    </div>
    <div class="weatherCard__bottom">
      <div class="weatherCard__data">
        <p v-for="(item, index) in card.data" :key="index">
          {{ item }}
        </p>
      </div>
      <div class="weatherCard__info">
        <p class="weatherCard__city">{{ card.city }}</p>
        <p class="weatherCard__weather">{{ card.weather }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables';

.weatherCard {
  background: url('@/assets/images/WeatherCard/figure.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  max-width: 400px;
  padding: 9px 0 15px 20px;

  &__top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  &__temperature {
    color: #fff;
    font-size: 64px;
    font-weight: 400;
    line-height: 64%;
    letter-spacing: 0.374px;
  }

  &__img {
    width: 160px;
    height: 160px;
  }

  &__data {
    color: $label;
    font-size: 18px;
    font-weight: 400;
    line-height: 138%;
    letter-spacing: -0.078px;
    display: flex;
    gap: 20px;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    line-height: 139%;
    letter-spacing: -0.078px;
  }

  &__weather {
    margin-right: 20px;
  }
}
</style>
