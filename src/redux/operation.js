import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://6571e4f5d61ba6fcc013e472.mockapi.io",
});
// axios.defaults.baseURL = "https://6571e4f5d61ba6fcc013e472.mockapi.io";

// const BASE_URL = "https://6571e4f5d61ba6fcc013e472.mockapi.io/";
export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("/advert");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addToFavorite = createAction("favorite/addToFavorite");
export const deleteFromFavorite = createAction("favorite/deleteFromFavorite");
