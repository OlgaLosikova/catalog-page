<script>
import Card from "../Filters/components/Card/Card.vue";
import Paginate from "../Paginate.vue";
import FilterButton from "./components/FilterButton.vue";
import Sort from "./components/Sort.vue";



export default {
  components: { FilterButton, Sort, Card, Paginate },
};
</script>

<template>
  <div class="table">
    <div class="table-header">
      <FilterButton v-for="item in $store.state.selectedFilters" :key="item" :text="item"/>
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
    <div class="table__body">
      <Card
        v-for="item in $store.state.data"
        :imgUrl="item.imgUrl"
        :description="item.description"
        :price="item.price"
      />
      
    </div><div class="table__empty">
        <h2>Нет ни одного товара</h2>
        <p>Попробуйте сбросить или изменить параметры фильтрации</p>
      </div>
      <Paginate/>
  </div>
</template>

<style lang="scss">
.table {
  width: 100%;
  margin-left: 32px;

  &__body {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 260px));
    column-gap: 32px;
    row-gap: 16px;
    justify-content: center;
  }

  &__empty {
    display: none;
    margin: 200px auto;
    text-align: center;
    h2 {
      font-size: 24px;
      font-weight: 500;
    }
  }
}
.sort-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
