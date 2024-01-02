import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import someFontsData from "@/constant/someFontsData";
import { useId } from "react";  


type Font = {
  family: string;
  variants: string[];
  subset: string[];
  version: string[];
  lastModified: string;
  files: {
    regular: string;
    italic?: string;
  };
  category: string;
  kind: string;
  menu: string;
};

export type fontType = {
  key: string;
  family: string;
  regular: string;
};

type InitialState = {
  fonts: fontType[];
  isLoading: boolean;
  error: null | string;
};

// Define the type for the payload of the addFonts action
type AddFontsPayload = {
  fonts: fontType[];
};

// Define the type for the async thunk
type FetchFontsResponse = {
  items: Font[];
  // Add other properties based on the response from the API
};

type stateType = {
  fonts: InitialState;
};

const fetchFonts = createAsyncThunk("fonts/fetchFonts", async () => {
  const response = await axios.get<FetchFontsResponse>(
    "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCXc7cYhaQTGorf1XHwLJsNqCGMIUztTcU",
  );
  return response.data.items;
});

const fontsSlice = createSlice({
  name: "fonts",
  initialState: {
    fonts: someFontsData,
    isLoading: false,
    error: null,
  } as InitialState,
  reducers: {
    addFonts: (state, action: PayloadAction<AddFontsPayload>) => {
      state.fonts.push(...action.payload.fonts);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFonts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFonts.fulfilled, (state, action) => {
      state.isLoading = false;

      // Iterate through fonts and push them into state.fonts
      action.payload.slice(10).forEach((f) => {
        state.fonts.push({
          key: useId(),
          family: f.family,
          regular: f.files.regular,
        });
      });
    });

    builder.addCase(fetchFonts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "An error occurred";
    });
  },
});

export default fontsSlice.reducer;
export { fetchFonts };
export const fontsSelector = (state: stateType) => state.fonts;
export const { addFonts } = fontsSlice.actions;
