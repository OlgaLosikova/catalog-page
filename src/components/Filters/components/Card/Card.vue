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
    selected: {
      type: String,
    },
  },
  data() {
    return {
      isMouseHover: false,
    };
  },
};
</script>

<template>
  <div class="card-wrapper">
    <div
      class="card"
      @mouseover="isMouseHover = true"
      @mouseout="isMouseHover = false"
    >
      <button class="button-ghost button-ghost_small">Быстрый просмотр</button>
      <img
        :class="selected === 'small' ? 'img-small' : ''"
        :src="'/src/assets/images/' + imgUrl"
        alt="product"
      />
      <div class="card__footer">
        <p class="card__price">{{ price }} ₽</p>
        <p class="card__description">{{ description }}</p>
        <button class="button-primary">В корзину</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../../../assets/style/variables";

.card {
  background-color: $bg-color-white;
  position: relative;
  border-radius: 16px;
  text-align: start;
  transition: 0.5s;
  min-height: 100%;

  &:hover {
    box-shadow: 1px 1px 15px 0px #0000001a;
    position: absolute;
    z-index: 10;

    .button-ghost_small {
      display: flex;
    }

    .button-primary {
      display: inline-block;
    }
  }

  & > img {
    border-radius: 16px 16px 0 0;
  }

  &__description {
    font-size: 12px;
    margin-block-start: 7px;
    margin-block-end: 7px;
  }
  &__price {
    font-size: 20px;
    margin-block-start: 7px;
    margin-block-end: 7px;
  }
  &__footer {
    padding: 8px 6px;
  }

  &-wrapper {
    position: relative;
   min-height:262px;
  }
}

.button-ghost_small {
  font-size: 12px;
  position: absolute;
  height: 24px;
  border-radius: 6px;
  top: 73px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 127px;
  display: none;
}
.button-primary {
  background-color: $bg-color-active;
  height: 32px;
  color: $bg-color-white;
  width: 100%;
  display: none;
  &:hover {
    background-color: #3dbbd6;
  }
  &:active {
    background-color: $bg-color-selected;
  }
}
.img-small {
  width: 200px;
}
</style>
