<script>
export default {
  props: {
    label: {
      type: String,
    },
    count:{
      type:Number,
    },
    selectCheckbox:{
      type:Function,
    }
  },
};
</script>

<template>
  <label  class="checkbox">
    <input @click="()=>selectCheckbox(label)" type="checkbox" class="checkbox__input" />
    <span class="checkbox__custom"></span>{{ label
    }}<span class="checkbox__quantity">{{ count }}</span>
  </label>
</template>
<style lang="scss">
@import "../../../assets/style/variables";
.checkbox {
  cursor: pointer;
  margin-bottom: 4px;
  &__input {
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  &__custom {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid $border-color;
    border-radius: 4px;
    vertical-align: bottom;
    margin-right: 10px;
    position: relative;
  }
  &__custom::before {
    content: "";
    width: 16px;
    height: 16px;
    display: inline-block;
    background-image: url(../../../assets/svg/check.svg);
    background-repeat: no-repeat;
    border-radius: 4px;
    position: absolute;
    left: 60%;
    top: 60%;
    transform: translate(-50%, -50%) scale(0);
    transition: 0.2s ease-in;
  }
  &__input:checked + &__custom::before {
    transform: translate(-50%, -50%) scale(1);
  }
  &__input:checked + &__custom {
    background-color: $bg-color-active;
    border-color: $bg-color-active;
  }
  &__quantity {
    margin-left: 4px;
    color: $font-color-light;
    font-size: 12px;
  }
}
</style>
