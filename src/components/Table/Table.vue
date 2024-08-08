<script>
import data from "../../assets/source/data.json";

import Card from "../Filters/components/Card/Card.vue";
import FilterButton from "./components/FilterButton.vue";
import Sort from "./components/Sort.vue";

export default {
  components: { FilterButton, Sort, Card },
  data() {
    return {
      data: data,
    };
  },
};
</script>

<template>
  <div class="table">
    <div class="table-header">
      <FilterButton text="тест" />
      <div class="sort-wrapper">
        <Sort />
        <div class="buttons-wrapper">
          <img src="../../assets/svg/view-small.svg" alt="view-small" /><img
            src="../../assets/svg/view-big.svg"
            alt="view-big"
          />
        </div>
      </div>
    </div>
    <div class="table-body">
      <Card
        v-for="item in data"
        :imgUrl="item.imgUrl"
        :description="item.description"
        :price="item.price"
      />
    </div>
    <div class="table-empty">
      <h2>Нет ни одного товара</h2>
      <p>Попробуйте сбросить или изменить параметры фильтрации</p>
    </div>
  </div>
</template>

<style lang="scss">
.table {
  width: 100%;
  margin-left: 32px;
}
.sort-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
