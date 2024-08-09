<script>
import Switch from "./Switch.vue";

export default {
  components: { Switch },
};
</script>

<template>
  <div class="filter__footer">
    <Switch />
    <span class="label">Показывать на странице</span>
    <select>
      <option value="160">160 товаров</option>
    </select>
    <button class="button-outline">Сбросить товары</button>
    <button class="button-ghost button-ghost__medium">
      Сохранить подборку<svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 14C-3.33329 6.66668 4.00002 0.666669 8 4.66667C12 0.666698 19.3334 6.66671 8 14Z"
          fill="white"
        />
        <path
          d="M8.04846 13.947C-3.28483 6.6137 4.04848 0.61369 8.04846 4.61369C12.0484 0.613719 19.3818 6.61373 8.04846 13.947Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.04846 13.3493C5.42323 11.6089 3.90675 9.97782 3.14265 8.5911C2.35599 7.16346 2.37752 6.02393 2.74955 5.24605C3.48659 3.70495 5.8861 3.1584 7.69491 4.9672C7.78867 5.06097 7.91585 5.11365 8.04846 5.11365C8.18107 5.11365 8.30824 5.06097 8.40201 4.96721C10.2108 3.15841 12.6103 3.70496 13.3474 5.24607C13.7194 6.02395 13.741 7.16348 12.9543 8.59112C12.1902 9.97783 10.6737 11.6089 8.04846 13.3493ZM8.04846 3.93673C5.87375 2.12159 2.88614 2.64271 1.84741 4.8146C1.30278 5.95339 1.36597 7.43885 2.26681 9.07371C3.16422 10.7023 4.90306 12.5073 7.77683 14.3668C7.94212 14.4737 8.15479 14.4737 8.32008 14.3668C11.1939 12.5073 12.9327 10.7024 13.8301 9.07372C14.731 7.43887 14.7942 5.9534 14.2495 4.81461C13.2108 2.64274 10.2232 2.1216 8.04846 3.93673Z"
          fill="#333333"
        />
      </svg>
    </button>
  </div>
</template>

<style lang="scss">
@import "../../../assets/style/variables";

.filter__footer {
  margin: 23px 0 16px;
}
select {
  width: 100%;
  height: 36px;
  box-sizing: border-box;
  border: 1px solid $border-color;
  border-radius: 9px;
  padding-left: 8px;
  padding-right: 12px;
  outline: transparent;
  margin-bottom: 16px;
  font-family: Roboto system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
}

.button-outline {
  width: 100%;
  height: 36px;
  border: 2px solid $font-color-light;
  background-color: transparent;
  &:hover {
    border-color: $bg-color-active;
    background-color: transparent;
  }
  &:active {
    border-color: $bg-color-selected;
  }
}
.button-ghost {
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  background-color: #ffffffcc;

  &__medium {
    height: 36px;
      width: 100%;
      display: flex;
  }
  svg {
    margin-left: 12px;
  }
  &:hover {
    background-color: #ffffffcc;
    color: $bg-color-active;
    &:hover svg {
      path:last-of-type {
        fill: $bg-color-active;
      }
    }
  }

  &:active {
    color: $bg-color-selected;
    &:active svg {
      path:last-of-type {
        fill: $bg-color-selected;
      }
    }
  }
}
</style>
