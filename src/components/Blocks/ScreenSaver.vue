<template>
  <div class="screenSaver">
    <div class="screenSaver__info">
      <p class="screenSaver__city">Город</p>
      <p class="screenSaver__temperature">19°</p>
      <div class="screenSaver__data">
        <p class="screenSaver__weather">Погода</p>
        <div class="screenSaver__place">
          <p>H:24</p>
          <p>L:18°</p>
        </div>
      </div>
    </div>
    <div class="screenSaver__house">
      <img src="@/assets/images/ScreenSaver/House.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss">
.screenSaver {
  width: 500px;
  border-radius: 22px;
  background-image: url('@/assets/images/ScreenSaver/Background.jpg');
  background-size: 100% 100%;
  padding-bottom: 34px;

  &__house {
    width: 500px;
    height: 500px;
  }
}
</style>
