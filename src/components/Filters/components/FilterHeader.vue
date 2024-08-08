<script>
export default {
  props: {
    title: {
      type: String,

    },
    isExpanded: {
      type:Boolean,
      default:true,
    },
  },
};
</script>

<template>
  <div class="filter__header">
    <h3>{{ title }}</h3>
    <img
      v-if="!isExpanded"
      src="../../../assets/svg/arrow-down.svg"
      alt="expand"
    /><img v-else src="../../../assets/svg/arrow-up.svg" alt="collapse" />
  </div>
</template>

<style lang="scss">
@import "../../../assets/style/variables";
.filter__header {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 8px;
  &>img{
    cursor: pointer;
  }
}
h3 {
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: 500;
}
</style>
