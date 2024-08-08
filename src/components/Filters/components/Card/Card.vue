<script>

export default {
  props: {
    imgUrl: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
  },
};
</script>

<template>
  <div class="card">
    <button>Быстрый просмотр</button>
    <img :src="'/src/assets/images/'+imgUrl" alt="product" />
    <p>{{ price }}</p>
    <p>{{ description }}</p>
    <button>В корзине</button>
  </div>
</template>
<style lang="scss">
@import "../../../../assets/style/variables";
</style>
