import { createSlice } from "@reduxjs/toolkit";
import { data } from "../mock/Categories/data";

export let Slices = createSlice({
  name: "slices",
  initialState: {
    category: "House Plants",
    minMax: null,
    mapData: data,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setMinMax(state, action) {
      state.minMax = action.payload;
      let filteredData = state.mapData;
      filteredData[state.category].filter(
        (value) => value.price > 10 && value.price < 100
      );
      state.mapData = filteredData;
    },
    setMapData(state, action) {
      state.mapData[state.category] = action.payload;
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
  },
});
export let {
  setCategory,
  setMinMax,
  setMapData,
  sortDataBySale,
  sortDataByNews,
  sortDataByAll,
  defaultSorting,
  theCheapest,
  mostExpensive,
} = Slices.actions;
export default Slices.reducer;
