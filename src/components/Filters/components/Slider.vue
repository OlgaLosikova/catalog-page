<script>
import Slider from "@vueform/slider";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      value: [0,100],
    };
  },

  methods: {
    setValue(value) {
      const priceDeltaMin =
        Math.round(value[0] * this.$store.state.priceDelta) +
        this.$store.state.priceMin;
      const priceDeltaMax =
        Math.round(value[1] * this.$store.state.priceDelta) +
        this.$store.state.priceMin;
      this.$store.state.price[1].price = priceDeltaMax;
      this.$store.state.price[0].price = priceDeltaMin;
      this.filterByPrice(
        this.$store.state.price[0].price,
        this.$store.state.price[1].price
      );
    },
    filterByPrice(min, max) {
      this.$store.commit("setFilters", { min, max });
    },
  },
};
</script>

<template>
  <div class="slider-component">
    <Slider
      @change="(value) => setValue(value)"
      v-model="value"
      :tooltips="false"
    />
  </div>
</template>

<style src="@vueform/slider/themes/default.css"></style>
