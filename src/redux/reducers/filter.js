import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "all",
  search_value: "",
  type: ""
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setSearchValue: (state, action) => {
      state.search_value = action.payload;
    },
    setType: (state, action) => {
        state.type = action.payload
    }
  },
});

export const { setLanguage, setSearchValue, setType } = filterSlice.actions;
export default filterSlice.reducer;
