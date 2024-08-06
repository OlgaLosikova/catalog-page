<script>
export default {
  data() {
    return {
      categories: [
        "Главная",
        "Автомобили и мотоциклы",
        "Легковые",
        "Tamiya",
        "Porshe 939",
      ],
    };
  },
};
</script>

<template>
  <nav class="bread-crumbs">
    <div
      class="bread-crumbs__item"
      v-for="category in categories"
      :key="category"
    >
      <p>{{ category }}</p>
      <img src="../assets/svg/arrow-right.svg" alt="arrow-right" />
    </div>
  </nav>
</template>

<style lang="scss">
.bread-crumbs {
  display: flex;
  gap: 8px;
  & > &__item:last-child > img {
    display: none;
  }
  & > &__item:last-child > p {
    color: #BDBDBD;
  }
  

  &__item {
    display: flex;
    align-items: center;
  }
  &__item > img {
    margin-left: 8px;
  }
}
</style>
