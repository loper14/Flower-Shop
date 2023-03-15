import { configureStore } from "@reduxjs/toolkit";
import modalSlices from "./modalSlices";
import profileSlice from "./profileSlice";
import Slices from "./slice";
import Wishlist from "./wishlist";

export default configureStore({
  reducer: {
    data: Slices,
    modalka: modalSlices,
    profileSlice: profileSlice,
    wishlist: Wishlist,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
