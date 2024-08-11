<script>
import Card from "../Filters/components/Card/Card.vue";
import Paginate from "../Paginate.vue";
import FilterButton from "./components/FilterButton.vue";
import Sort from "./components/Sort.vue";
import ViewButtons from "./components/ViewButtons.vue";

export default {
  components: { FilterButton, Sort, Card, Paginate, ViewButtons },
  data() {
    return {
      selected: "big",
 
    };
  },
  methods: {
    switchView(value) {
      this.selected = value;
    },
  },
};
</script>

<template>
  <div class="table">
    <div class="table-header">
      <div class="filters-wrapper">
      <FilterButton
        v-for="item in $store.state.selectedFilters"
        :key="item"
        :text="item.title"
      /></div>
      <div class="sort-wrapper">
        <Sort />
        <ViewButtons :selected="selected" :switchView="switchView" />
      </div>
    </div>
    <div
      :class="selected === 'small' ? 'table__body grid-small' : 'table__body'"
    >
      <Card
        v-for="item in $store.getters.getFirstPage"
        :imgUrl="item.imgUrl"
        :description="item.description"
        :price="item.price"
        :selected="selected"
      />
    </div>

    <Paginate v-if="$store.state.data.length / 20 >= 1" />
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
}
.sort-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.grid-small {
  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));
  column-gap: 32px;
  row-gap: 24px;
}
.filters-wrapper{
  display: flex;
  gap:8px;
  flex-wrap: wrap;
}
</style>
