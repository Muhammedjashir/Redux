import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "red",
};

const ColorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    Colors: (state, action) => {
      state.color = action.payload;
    },
  },
});
export const { Colors } = ColorSlice.actions;

export default ColorSlice.reducer;
