import { createSlice } from "@reduxjs/toolkit";

export let Wishlist = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    setWishlist(state, action) {
      state.wishlist = [...state.wishlist, action.payload];
      console.log(state.wishlist);
    },
  },
});
export let { setWishlist } = Wishlist.actions;
export default Wishlist.reducer;
