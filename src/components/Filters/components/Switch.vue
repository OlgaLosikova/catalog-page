<script></script>

<template>
  <label class="switch">
    <input type="checkbox" class="switch__input" />
    <span class="switch__slider"></span>Только товары в наличии
  </label>
</template>

<style lang="scss">
@import "../../../assets/style/variables";

.switch {
  display: flex;
  position: relative;
  border-radius: 11px;
  color: #1f2020;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 16px;

  &__input {
    width: 0;
    height: 0;
    opacity: 0;
    margin-right: 43px;
  }
  &__slider {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ededed;
    border-radius: 11px;
    transition: 0.4s;
    width: 40px;
    height: 24px;
    align-self: center;
  }
  &__slider::before {
    content: "";
    position: absolute;
    cursor: pointer;
    left: 4px;
    top: 4px;
    background-color: $bg-color-white;
    width: 16px;
    height: 16px;
    border-radius: 8px;
  }
  &__input:checked + &__slider {
    background-color: $bg-color-active;
  }
  &__input:checked + &__slider::before {
    transform: translateX(15px);
  }
}
</style>
