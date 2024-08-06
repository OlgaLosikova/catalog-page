<script></script>

<template>
  <div class="search-container">
    <input class="search" type="search" placeholder="Поиск..." /><img
      class="search__image"
      src="../assets/svg/search.svg"
      alt="search"
    />
  </div>
</template>

<style lang="scss">
@import "../assets/style/variables";

.search {
  height: 36px;
  width: 100%;
  border: 1px solid $border-color;
  border-radius: 9px;
  padding-left: 12px;
  font-size: 14px;

  &::placeholder {
    color: $font-color-light;
  }

  &-container {
    position: relative;
  }

  &__image {
    position: absolute;
    right: 12px;
    top: 6px;
  }
}
</style>
