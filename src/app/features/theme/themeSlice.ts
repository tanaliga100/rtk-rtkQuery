import { createSlice } from "@reduxjs/toolkit";

interface IThemeState {
  theme: "light" | "dark";
}

const initialState: IThemeState = {
  theme: "light"
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    }
  }
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
