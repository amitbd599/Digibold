import { createSlice } from "@reduxjs/toolkit";

export const clickActionSlice = createSlice({
  name: "clickAction",
  initialState: {
    offCanvas: false,
  },
  reducers: {
    SetOffCanvas: (state, action) => {
      state.offCanvas = action.payload;
    },
  },
});

export const { SetOffCanvas } = clickActionSlice.actions;
export default clickActionSlice.reducer;
