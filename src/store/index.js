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
    firstIndex: 0,
    secondIndex: 20,
    filtredData: [],
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
      state.data.length < 20 && (state.secondIndex = state.data.length);
      state.slicedData = state.data.slice(state.firstIndex, state.secondIndex);
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
      state.firstIndex = 0;
      state.secondIndex = 20;
      state.data = data;
      if (payload.hasOwnProperty("min")) {
        state.data = state.data.filter(
          (item) => item.price >= payload.min && item.price <= payload.max
        );
      } else if (payload.type === "category") {
        if (payload !== "") {
          state.data = state.data.filter(
            (item) => item.category === payload.title
          );
        } else {
          state.data = state.data.filter(
            (item) => item.category !== payload.title
          );
        }
        state.filtredData = state.data;
      } else if (payload.type === "checkbox") {
        console.log('xtr')
        if (payload !== "") {
          state.data = state.filtredData.filter(
            (item) => item.producer === payload.title
          );console.log(state.data)
        } else
          state.data = state.filtredData.filter(
            (item) => item.producer !== payload.title
          );
      }
    },

    deleteFilter(state, payload) {
      state.selectedFilters = state.selectedFilters.filter(
        (item) => item.title !== payload
      );
    },
    resetFilter(state) {
      state.data = data;
      state.price[0].price = state.priceMin;
      state.price[1].price = state.priceMax;
    },
    addFilterCategory(state, payload) {
      if (!state.selectedFilters.find((el) => el.type === "category")) {
        state.selectedFilters.push(payload);
      } else
        state.selectedFilters.find((el) => {
          if (el.type === payload.type) {
            el.title = payload.title;
          }
        });
    },
    addFilterCheckbox(state, payload) {
      state.selectedFilters.push(payload);
      console.log(state.selectedFilters);
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
    calculateFilters(state) {
      state.price = [];
      state.producers = [];
      state.scale = [];
      state.isCalculateProducers = false;
      state.isCalculateScale = false;
    },
    setPage(state, payload) {
      state.firstIndex = (payload - 1) * 20;
      state.data.length >= state.firstIndex + 20
        ? (state.secondIndex = state.firstIndex + 20)
        : (state.secondIndex = state.data.length);
    },
  },
});

export default store;
