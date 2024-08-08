<script>
import Slider from "@vueform/slider";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      value: [20,40]
    };
  },
};
</script>

<template>
  <div class="slider-component">
    <Slider v-model="value" :tooltips="false" />
  </div>
</template>

<style src="@vueform/slider/themes/default.css" >

</style>
