const { createSlice } = require("@reduxjs/toolkit");

export let ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    accSection: "account",
  },
  reducers: {
    setAccSection(state, { payload }) {
      state.accSection = payload;
    },
  },
});
export const { setAccSection } = ProfileSlice.actions;
export default ProfileSlice.reducer;
