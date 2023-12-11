// import { createSlice } from "@reduxjs/toolkit";

// const filterSlice = createSlice({
//   name: "filter",
//   initialState: { filter: "" },
//   reducers: {
//     setFilterList(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { setFilterList } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: " filters",
  initialState: {
    filters: {
      selectedMake: "",
      selectedPrice: "",
      minMileage: "",
      maxMileage: "",
    },
    filtersFavorite: {
      selectedMake: "",
      selectedPrice: "",
      minMileage: "",
      maxMileage: "",
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    resetFilters: (state) => {
      state.filters.selectedMake = "";
      state.filters.selectedPrice = "";
      state.filters.minMileage = "";
      state.filters.maxMileage = "";
    },
    setFiltersFavorite: (state, action) => {
      state.filtersFavorite = {
        ...state.filtersFavorite,
        ...action.payload,
      };
    },
    resetFiltersFavorite: (state) => {
      state.filtersFavorite.selectedMake = "";
      state.filtersFavorite.selectedPrice = "";
      state.filtersFavorite.minMileage = "";
      state.filtersFavorite.maxMileage = "";
    },
  },
});

export const {
  setFilters,
  resetFilters,
  setFiltersFavorite,
  resetFiltersFavorite,
} = filtersSlice.actions;

export default filtersSlice.reducer;
