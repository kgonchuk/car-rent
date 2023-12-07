import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operation";

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const carsReducer = carSlice.reducer;
