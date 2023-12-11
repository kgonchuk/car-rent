import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://6571e4f5d61ba6fcc013e472.mockapi.io",
});

export const setAllAdverts = createAsyncThunk(
  "catalog/fetchAllAdverts",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("/advert");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const setAdverts = createAsyncThunk(
  "catalog/fetchAdverts",
  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const response = await instance.get("/advert", {
        params: { limit, page },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
