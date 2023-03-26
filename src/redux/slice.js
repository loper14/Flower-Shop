import { createSlice } from "@reduxjs/toolkit";
import { data } from "../mock/Categories/data";
import flower1 from "../assets/imgs/flower1.png";
import { mockData } from "../mock/mock";

export let Slices = createSlice({
  name: "slices",
  initialState: {
    category: "House Plants",
    mapData: data,
    productData: {},
    activeSize: "s",
    count: 1,
    cardData: [],
    quantity: 1,
    total: 0,
    searchedData: mockData,
  },

  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },

    setMinMax(state, action) {
      let filteredData = data;
      state.mapData = {
        ...state.mapData,
        [state.category]: filteredData[state.category].filter(
          (value) =>
            value.price >= action.payload.min &&
            value.price <= action.payload.max
        ),
      };
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
      console.log(action.payload);
      state.productData = action.payload;
    },
    setActiveSize(state, action) {
      state.activeSize = action.payload;
    },
    increase(state, action) {
      state.count = state.count + 1;
    },
    decrease(state, action) {
      state.count = state.count > 1 ? state.count - 1 : 1;
    },
    addCardData(state, action) {
      state.cardData = state.cardData.concat(action.payload);

      state.count = 1;
    },
    increaseQuantity(state, action) {
      state.cardData = state.cardData.map((value) =>
        value.id === action.payload
          ? { ...value, quantity: value.quantity + 1 }
          : value
      );
    },
    decreaseQuantity(state, action) {
      state.cardData = state.cardData.map((value) =>
        value.id === action.payload
          ? {
              ...value,
              quantity:
                value.quantity > 1 ? value.quantity - 1 : value.quantity,
            }
          : value
      );
    },
    deleteCardData(state, action) {
      state.cardData = state.cardData.filter(
        (value) => value.id !== action.payload.id
      );
    },
    setTotal(state, action) {
      state.total = action.payload;
    },

    setSearchedData(state, action) {
      let filteredData = state.searchedData.filter((value) =>
        value.name.toLowerCase().includes(action.payload)
      );
      state.searchedData = filteredData;
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
  setTotal,
  setSearching,
  setSearchedData,
} = Slices.actions;
export default Slices.reducer;
