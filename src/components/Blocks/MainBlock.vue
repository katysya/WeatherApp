<template>
  <div class="mainBlock">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.mainBlock {
  padding: 34px;
  width: fit-content;
  border-radius: 44px;
  background: radial-gradient(
    73.19% 111.55% at 93.07% 74.31%,
    #45278b 0%,
    #2e335a 100%
  );
  box-shadow: 0px 1px 0px 0px #fff inset,
    0px 20px 100px 0px rgba(74, 57, 127, 0.7);
}
</style>
