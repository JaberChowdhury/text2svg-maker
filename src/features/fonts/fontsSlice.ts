import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import someFontsData from "@/constant/someFontsData";

export type Font = {
  key?: string;
  family: string;
  variants?: string[];
  subset?: string[];
  version?: string[];
  lastModified?: string;
  files?: {
    regular: string;
    italic?: string;
  };
  regular?: string;
  category?: string;
  kind?: string;
  menu?: string;
};

type Initialstate = {
  fonts: Font[];
  isLoading: boolean;
  error: null | string;
};

type StateType = {
  fonts: Initialstate;
};

type AxiosReturn = {
  items: Font[];
};

// Fetch fonts
const getAllFonts = async (): Promise<AxiosResponse<AxiosReturn>> => {
  return await axios.get<AxiosReturn>(
    "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCXc7cYhaQTGorf1XHwLJsNqCGMIUztTcU",
  );
};

const fetchFonts = createAsyncThunk("font/fetchFonts", async () => {
  const data = await getAllFonts();
  return data;
});

const initialState = {
  fonts: someFontsData,
  isLoading: false,
  error: null,
} as Initialstate;

const fontSlice = createSlice({
  name: "font",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFonts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFonts.fulfilled, (state, action) => {
        const fontsWithIds = action.payload.data.items.map((font) => ({
          ...font,
          key: crypto.randomUUID(),
        }));
        state.fonts = fontsWithIds;
        state.isLoading = false;
      })
      .addCase(fetchFonts.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = false;
      });
  },
});

const fontsSelector = (state: StateType) => state.fonts; // Return state.font instead of just font

export default fontSlice.reducer;
export { fetchFonts, fontsSelector };
