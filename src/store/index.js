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
    categories: [],
    isCalculateProducers: false,
    isCalculateScale: false,
  },
  getters: {
    getPrice: (state) => {
      state.priceMin = state.data.reduce(
        (min, currentValue) => Math.min(min, currentValue.price),
        Infinity
      );
      state.priceMax = state.data.reduce(
        (max, currentValue) => Math.max(max, currentValue.price),
        -Infinity
      );

      state.priceDelta = (state.priceMax - state.priceMin) / 100;
      if (!state.price.find((el) => el.label === "От"))
        state.price.push({ label: "От", price: state.priceMin });

      if (!state.price.find((el) => el.label === "До"))
        state.price.push({ label: "До", price: state.priceMax });
      return state.price;
    },
    getFirstPage: (state) => {
      state.slicedData = state.data.slice(
        0,
        state.data.length < 20 ? state.data.length : 20
      );
      return state.slicedData;
    },
    getCategoiries: (state) => {
      for (let item of state.data) {
        if (!state.categories.find((el) => el === item.category)) {
          state.categories.push(item.category);
        }
      }
      return state.categories;
    },
    getProducers(state) {
      if (state.isCalculateProducers === false) {
        for (let item of state.data) {
          if (!state.producers.find((el) => el.producer === item.producer)) {
            state.producers.push({ producer: item.producer, count: 1 });
          } else
            state.producers.find((el) => {
              if (el.producer === item.producer) {
                el.count++;
              }
            });
          state.isCalculateProducers = true;
        }
      }
      return state.producers;
    },
    getScale(state) {
      if (state.isCalculateScale === false) {
        for (let item of state.data) {
          if (!state.scale.find((el) => el.scale === item.scale)) {
            state.scale.push({ scale: item.scale, count: 1 });
          } else
            state.scale.find((el) => {
              if (el.scale === item.scale) {
                el.count++;
              }
            });
          state.isCalculateScale = true;
        }
      }
      return state.scale;
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
      if (payload.direction === "desc") {
        state.data = state.data.sort((a, b) =>
          a[payload.type] < b[payload.type] ? 1 : -1
        );
      } else if (payload.direction === "asc")
        state.data = state.data.sort((a, b) =>
          a[payload.type] > b[payload.type] ? 1 : -1
        );
    },
    calculatePrice(state, getters) {
      state.price=[];
      getters.getPrice(state);
    },
  },
});

export default store;
