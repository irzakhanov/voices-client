import { configureStore } from "@reduxjs/toolkit";
import voices from "../features/voicesSlice";

export const store = configureStore({
  reducer: { voices },
});
