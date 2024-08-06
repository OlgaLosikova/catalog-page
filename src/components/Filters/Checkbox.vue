<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <label class="switch">
    <input type="checkbox" class="checkbox__input" />
    <span class="switch-slider"></span>{{ label }}
  </label>
</template>
<style lang="scss">
@import "../../assets/style/variables";
.checkbox {
  &__input {
    width: 0;
    height: 0;
    opacity: 0;
    margin-right: 43px;
  }
}
</style>
