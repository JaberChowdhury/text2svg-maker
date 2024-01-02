import { configureStore } from "@reduxjs/toolkit";
import fontsReducer from "@/features/fonts/fontsSlice";
import converterReducer from "@/features/converter/converterSlice";

const store = configureStore({
  reducer: {
    fonts: fontsReducer,
    converter: converterReducer,
  },
});

export default store;
