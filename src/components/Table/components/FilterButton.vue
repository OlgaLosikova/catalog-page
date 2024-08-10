<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
  methods: {
    deleteFilter(text) {
      this.$store.commit("deleteFilter", text);
      this.$store.commit("setFilters", "");
      this.$store.state.selectedCategory = "";

    },
  },
};
</script>

<template>
  <button @click="() => deleteFilter(text)" class="filter-clip">
    {{ text }}<img src="../../../assets/svg/close.svg" alt="close" />
  </button>
</template>

<style lang="scss">
@import "../../../assets/style/variables";

.filter-clip {
  height: 30px;
  border-radius: 15px;
  background-color: $filter-bg;
  align-items: center;
  display: flex;
  padding-top: 0;

  & > img {
    margin-left: 4px;
  }
  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: $border-color;
  }
}
</style>
