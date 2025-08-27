import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";
export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialStateValue },
  reducers: {
    Change: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { Change } = themeSlice.actions;
export default themeSlice.reducer;
