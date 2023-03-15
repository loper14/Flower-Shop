import { createSlice } from "@reduxjs/toolkit";

export let ModalSlice = createSlice({
  name: "modal",
  initialState: {
    visible: false,
    activeSection: "login",
    signed: false,
  },
  reducers: {
    showModal: (state) => {
      state.visible = !state.visible;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    setSigned: (state, action) => {
      state.signed = !state.signed;
    },
  },
});
export let { showModal, setActiveSection, setSigned } = ModalSlice.actions;
export default ModalSlice.reducer;
