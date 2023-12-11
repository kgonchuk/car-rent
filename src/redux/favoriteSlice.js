// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
// };
// const favoriteSlice = createSlice({
//   name: "favorite",
//   initialState,
//   reducers: {
//     addToFavorite(state, { payload }) {
//       state.items.push(payload);
//     },
//     deleteFromFavorite(state, { payload }) {
//       state.items = state.items.filter(({ id }) => id !== payload);
//     },
//   },
// });
// export const { addToFavorite, deleteFromFavorite } = favoriteSlice.actions;
// export const favoriteReducer = favoriteSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
