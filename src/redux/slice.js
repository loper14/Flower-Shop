import { createSlice } from "@reduxjs/toolkit";
import { data } from "../mock/Categories/data";
import flower6 from "../assets/imgs/flower6.png";

export let Slices = createSlice({
  name: "slices",
  initialState: {
    category: "House Plants",
    minMax: {},
    mapData: data,
    productData: {},
    activeSize: "s",
    count: 0,
    cardData: [],
    quantity: 0,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },

    setMinMax(state, {payload}) {
      let filteredData = data;
      filteredData = filteredData[state.category].filter(
        (value) =>
          value.price >= payload.min && value.price <= payload.max
      );
      state.mapData = filteredData;
    },

    sortDataBySale(state, action) {
      let copyData = state.mapData;
      copyData[state.category].sort((a, b) => (a.sale > b.sale ? -1 : 1));
      state.mapData = copyData;
    },
    sortDataByNews(state, action) {
      let copyData = state.mapData;
      copyData[state.category].sort((a, b) =>
        a.date.getTime() > b.date.getTime() ? -1 : 1
      );
      state.mapData = copyData;
    },
    sortDataByAll(state, action) {
      state.mapData = data;
    },
    defaultSorting(state) {
      state.mapData = data;
    },
    theCheapest(state) {
      let copyData = state.mapData;
      copyData[state.category].sort((a, b) => (a.price < b.price ? -1 : 1));
      state.mapData = copyData;
    },
    mostExpensive(state) {
      let copyData = state.mapData;
      copyData[state.category].sort((a, b) => (a.price > b.price ? -1 : 1));
      state.mapData = copyData;
    },
    setProductData(state, action) {
      state.productData = action.payload;
    },
    setActiveSize(state, action) {
      state.activeSize = action.payload;
    },
    increase(state, action) {
      state.count = state.count + 1;
    },
    decrease(state, action) {
      state.count = state.count > 0 ? state.count - 1 : 0;
    },
    addCardData(state, action) {
      state.cardData = state.cardData.concat(action.payload);
    },
    increaseQuantity(state, action) {
      state.quantity = state.quantity + 1;
    },
    decreaseQuantity(state, action) {
      if (state.quantity > 0) state.quantity = state.quantity - 1;
    },
    deleteCardData(state, action) {
      state.cardData = state.cardData.filter(
        (value) => value.id !== action.payload.id
      );
    },
  },
});
export let {
  setCategory,
  setMinMax,
  sortDataBySale,
  sortDataByNews,
  sortDataByAll,
  defaultSorting,
  theCheapest,
  mostExpensive,
  setProductData,
  setActiveSize,
  increase,
  decrease,
  addCardData,
  increaseQuantity,
  decreaseQuantity,
  deleteCardData,
} = Slices.actions;
export default Slices.reducer;
