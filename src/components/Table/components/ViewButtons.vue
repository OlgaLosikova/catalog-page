<script>
export default {
  props: {
    selected: {
      type: String,
    },
    switchView: {
      type: Function,
    },
  },
};
</script>

<template>
  <div class="view-wrapper">
    <svg
      @click="() => switchView('small')"
      :class="selected === 'small' ? 'view-button view-active' : 'view-button'"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="5.29412" height="5.29" rx="1" fill="#E0E0E0" />
      <rect
        x="9.35291"
        y="3"
        width="5.29412"
        height="5.29"
        rx="1"
        fill="#E0E0E0"
      />
      <rect
        x="15.7059"
        y="3"
        width="5.29412"
        height="5.29"
        rx="1"
        fill="#E0E0E0"
      />
      <rect
        x="3"
        y="9.35001"
        width="5.29412"
        height="5.29"
        rx="1"
        fill="#E0E0E0"
      />
      <rect
        x="9.35291"
        y="9.35001"
        width="5.29412"
        height="5.29"
        rx="1"
        fill="#E0E0E0"
      />
      <rect
        x="15.7059"
        y="9.35001"
        width="5.29412"
        height="5.29"
        rx="1"
        fill="#E0E0E0"
      />
      <rect
        x="3"
        y="15.7"
        width="5.29412"
        height="5.29"
        rx="1"
        fill="#E0E0E0"
      />
      <rect
        x="9.35291"
        y="15.7"
        width="5.29412"
        height="5.29"
        rx="1"
        fill="#E0E0E0"
      />
      <rect
        x="15.7059"
        y="15.7"
        width="5.29412"
        height="5.29"
        rx="1"
        fill="#E0E0E0"
      /></svg><svg
      @click="() => switchView('big')"
      :class="selected === 'big' ? 'view-button view-active' : 'view-button'"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="8" height="8" rx="2" fill="#E0E0E0" />
      <rect x="3" y="13" width="8" height="8" rx="2" fill="#E0E0E0" />
      <rect x="13" y="3" width="8" height="8" rx="2" fill="#E0E0E0" />
      <rect x="13" y="13" width="8" height="8" rx="2" fill="#E0E0E0" />
    </svg>
  </div>
</template>

<style lang="scss">
@import "../../../assets/style/variables";
.view-wrapper {
  svg {
    cursor: pointer;
  }
}
.view-active {
  rect {
    fill: $bg-color-active;
  }
}
</style>
