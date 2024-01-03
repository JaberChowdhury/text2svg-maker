import { createSlice } from "@reduxjs/toolkit";
import someFontsData from "@/constant/someFontsData";
import { type Font } from "@/features/fonts/fontsSlice";

type Initialstate = {
  selectedFont: Font;
  variant: string;
  text: string;
  size: number;
  union: boolean;
  kerning: boolean;
  fill: boolean;
  separate: boolean;
  accuracy: number;
  units: string;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  uppercase: boolean;
};

type stateType = {
  converter: Initialstate;
};

const initialState = {
  selectedFont: someFontsData[0],
  variant: "regular",
  text: "Bangladesh",
  size: 100,
  union: true,
  kerning: true,
  fill: true,
  separate: true,
  accuracy: 0.001,
  units: "cm",
  fillColor: "#000000",
  strokeColor: "#817183",
  strokeWidth: 0.5,
  uppercase: false,
} as Initialstate;

const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    changeFont: (state, action) => {
      state.selectedFont = action.payload.selectedFont;
    },
  },
});

export default converterSlice.reducer;
export const converterSelector = (state: stateType) => state.converter;
export const { changeFont } = converterSlice.actions;
