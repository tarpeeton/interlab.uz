import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage uchun

// persist konfiguratsiyasi
const persistConfig = {
  key: "root",
  storage, // localStorage ni ishlatamiz
};
const persistedReducer = persistReducer(persistConfig, cartReducer);
export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

export const persistor = persistStore(store);
export const RootState = () => store.getState(); // bu faqat TypeScriptga mos keladi
export const AppDispatch = store.dispatch;
