<script>
export default {
  data() {
    return {
      categories: [
        { name: "Популярности", type: "popularity" },
        { name: "Рейтингу", type: "rating" },
        { name: "Цене", type: "price" },
        { name: "Скидке", type: "discount" },
        { name: "Обновлению", type: "update" },
      ],

      direction: "",
      intermediateType: "",
    };
  },
  methods: {
    setSort(type) {
      if (this.direction === "") {
        this.intermediateType = type;

        this.direction = "desc";
        this.$store.commit("setSort", { type, direction: this.direction });
      } else if (this.direction === "desc") {
        this.intermediateType !== type
          ? (this.direction = "desc")
          : (this.direction = "asc");
        this.intermediateType = type;
        this.$store.commit("setSort", { type, direction: this.direction });
      } else {
        this.intermediateType !== type
          ? (this.direction = "asc")
          : (this.direction = "");
        this.intermediateType = type;
        this.$store.commit("setSort", { type: "id", direction: "asc" });
      }
    },
  },
};
</script>

<template>
  <div class="sort">
    <p class="sort__title">Сортровать по:</p>
    <button
      @click="() => setSort(category.type)"
      class="sort__button"
      v-for="category in categories"
    >
      {{ category.name }}
      <svg
        v-if="direction === 'asc'"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L16.2071 7.79289C16.5976 8.18342 16.5976 8.81658 16.2071 9.20711C15.8166 9.59763 15.1834 9.59763 14.7929 9.20711L13 7.41421V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V7.41421L9.20711 9.20711C8.81658 9.59763 8.18342 9.59763 7.79289 9.20711C7.40237 8.81658 7.40237 8.18342 7.79289 7.79289L11.2929 4.29289Z"
          fill="#333333"
        />
      </svg>
      <svg
        v-if="direction === 'desc'"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 5C12.5523 5 13 5.44772 13 6V16.5858L14.7929 14.7929C15.1834 14.4024 15.8166 14.4024 16.2071 14.7929C16.5976 15.1834 16.5976 15.8166 16.2071 16.2071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L7.79289 16.2071C7.40237 15.8166 7.40237 15.1834 7.79289 14.7929C8.18342 14.4024 8.81658 14.4024 9.20711 14.7929L11 16.5858V6C11 5.44772 11.4477 5 12 5Z"
          fill="#333333"
        />
      </svg>
    </button>
  </div>
</template>

<style lang="scss">
@import "../../../assets/style/variables";

.sort {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;

  &__title {
    color: $font-color-light;
    white-space: nowrap;
    margin-right: 16px;
  }
  &__button {
    font-size: 16px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 36px;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-right: 12px;
    background-color: transparent;

    &:hover {
      background-color: transparent;
    }
    svg {
      margin-left: 12px;
      &:hover {
        background-color: transparent;
        color: $bg-color-active;
        &:hover svg {
          path:last-of-type {
            fill: $bg-color-active;
          }
        }
      }
    }
  }
}
</style>
