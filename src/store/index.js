import { createStore } from "vuex";
import data from "../assets/source/data";

const store = createStore({
  state: {
    selectedCategory: "",
    producers: [],
    scale: [],
    price: [],
    priceDelta: 0,
    priceMin: 0,
    priceMax: 0,
    data,
    selectedFilters: [],
    sort: "",
  },
  getters: {
    getPrice: (state) => {
      const min = data.reduce(
        (min, currentValue) => Math.min(min, currentValue.price),
        Infinity
      );
      const max = data.reduce(
        (max, currentValue) => Math.max(max, currentValue.price),
        -Infinity
      );
      state.priceMin = min;
      state.priceMax = max;
      state.priceDelta = (max - min) / 100;
      if (!state.price.find((el) => el.label === "От"))
        state.price.push({ label: "От", price: min });

      if (!state.price.find((el) => el.label === "До"))
        state.price.push({ label: "До", price: max });
    },
  },
  mutations: {
    setFilters(state, payload) {
      state.data = data;
      if (typeof payload === "object") {
        state.data = state.data.filter(
          (item) => item.price >= payload.min && item.price <= payload.max
        );
      } else if (typeof payload === "string") {
        if (payload !== "") {
          state.data = state.data.filter((item) => item.category === payload);
        } else
          state.data = state.data.filter((item) => item.category !== payload);
      }
    },

    deleteFilter(state, payload) {
      state.selectedFilters = state.selectedFilters.filter(
        (item) => item !== payload
      );
    },
    resetFilter(state) {
      state.data = data;
      state.price[0].price = state.priceMin;
      state.price[1].price = state.priceMax;
    },
    addFilter(state, payload) {
      state.selectedFilters = [payload];
    },
    setSort(state, payload) {
      console.log(payload);
      if (payload.direction === "desc") {
        state.data = state.data.sort(
          (a, b) => b[payload.type] - a[payload.type]
        );
      } else if (payload.direction === "asc")
        state.data = state.data.sort(
          (a, b) => a[payload.type] - b[payload.type]
        );
        console.log(payload,state.data);
    },
  },
});

export default store;
