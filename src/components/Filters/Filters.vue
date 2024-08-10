<script>
import filters from "../../assets/source/fliters.json";

import Search from "../Search.vue";
import Checkbox from "./components/Checkbox.vue";
import FilterHeader from "./components/FilterHeader.vue";
import Slider from "./components/Slider.vue";
import FilterFooter from "./components/FilterFooter.vue";

export default {
  components: { Search, Checkbox, Slider, FilterHeader, FilterFooter },
  data() {
    return {
      filters: filters,
    };
  },
  methods: {
    selectCategory(item) {
      this.$store.state.selectedCategory = item;
      this.$store.commit("addFilter", item);
      this.$store.commit("setFilters", item);
    },
  },
};
</script>

<template>
  <aside class="filter">
    <div class="filter-container" v-for="filter in filters" :key="filter.title">
      <FilterHeader :title="filter.title" />
      <Search v-if="filter.title !== 'Категории' && filter.title !== 'Цена'" />
      <p
        @click="() => selectCategory(item)"
        v-if="filter.title === 'Категории'"
        :class="
          $store.state.selectedCategory === item
            ? 'filter__item  filter__item_active'
            : 'filter__item'
        "
        v-for="item in filter.categories"
        :key="item"
      >
        {{ item }}
      </p>
      <Checkbox
        v-else-if="
          filter.title === 'Производитель' || filter.title === 'Масштаб'
        "
        v-for="item in filter.categories"
        :label="item"
      />
      <div class="slider" v-else>
        <div
          class="slider-container"
          v-for="item in $store.state.price"
          :key="item.label"
        >
          <span class="label">{{ item.label }}</span
          ><input type="number" v-model="item.price" />
        </div>
        <Slider />
      </div>
    </div>

    <FilterFooter />
  </aside>
</template>

<style lang="scss">
@import "../../assets/style/variables";

.filter {
  text-align: start;
  background-color: $bg-color-white;
  border-radius: 16px;
  padding: 0 16px;
  width: 240px;
  box-sizing: border-box;
  height: fit-content;

  &__item {
    margin-left: 8px;
    margin-block-end: 6px;
    margin-block-start: 6px;
    cursor: pointer;

    &_active {
      color: $bg-color-active;
    }
  }

  &-container {
    display: flex;
    flex-direction: column;
  }

  &-container > p:first-of-type {
    margin-block-start: 14px;
  }
}

.slider {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  &-component {
    grid-column-start: 1;
    grid-column-end: 3;
    margin-top: 3px;
  }
  &-container {
    display: flex;
    flex-direction: column;

    & > input {
      width: 98px;
      height: 36px;
      box-sizing: border-box;
      border: 1px solid $border-color;
      border-radius: 9px;
      padding-left: 12px;
      padding-right: 12px;
      outline: transparent;
      font-family: Roboto system-ui, Avenir, Helvetica, Arial, sans-serif;
      font-size: 14px;
    }
  }
}
.slider > div:nth-child(2) {
  justify-self: end;
}
.label {
  font-size: 12px;
  color: $font-color-gray;
  margin-bottom: 4px;
}
</style>
