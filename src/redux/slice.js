import { createSlice } from "@reduxjs/toolkit";
import { data } from "../mock/Categories/data";

export let Slices = createSlice({
  name: "slices",
  initialState: {
    category: "House Plants",
    minMax: [],
    mapData: data,
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setMinMax(state, action) {
      state.minMax = action.payload;
    },
    setMapData(state, action) {
      state.mapData[state.category] = action.payload;
    },
    sortMapData(state, action) {
      let copyData = state.mapData;
      copyData[state.category].sort((a, b) => (a.sale > b.sale ? -1 : 1));
    },
  },
});
export let { setCategory, setMinMax, setMapData, sortMapData } = Slices.actions;
export default Slices.reducer;
