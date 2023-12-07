import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { carsReducer } from "./carSlice";
import { favoriteReducer } from "./favoriteSlice";
import { filterReducer } from "./filterSlice";

const persistConfig = {
  key: "favotite",
  storage,
};
const persistedFavoriteReducer = persistReducer(persistConfig, favoriteReducer);
export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
    favorite: persistedFavoriteReducer,
  },
});
export const persistor = persistStore(store);
