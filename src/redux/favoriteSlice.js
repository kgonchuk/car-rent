import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
  isLoading: false,
  error: null,
};
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavoriteCar(state, action) {
      state.favorite.push(action.payload);
    },
    setDeleteFavoriteCar(state, action) {
      const index = state.favorite.findIndex(
        (item) => item.id === action.payload
      );
      state.favorite.splice(index, 1);
    },
  },
});

export const { setFavoriteCar, setDeleteFavoriteCar } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
