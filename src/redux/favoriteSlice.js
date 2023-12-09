import { createSlice } from "@reduxjs/toolkit";
import { addToFavorite, deleteFromFavorite } from "./operation";

const initialState = {
  favorite: [],
  isLoading: false,
  error: null,
};
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(addToFavorite, (state, action) => {
        state.favorite.push(action.payload);
      })
      .addCase(deleteFromFavorite, (state, action) => {
        const idItem = action.payload.id;
        state.favorite = state.favorite.filter(
          (favoriteItem) => favoriteItem.id !== idItem
        );
      }),
});

export const favoriteReducer = favoriteSlice.reducer;
