import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "all",
  search_value: "",
  type: "all",
  sort: "updated"
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
    },
    setSort: (state, action) => {
      state.sort = action.payload
    }
  },
});

export const { setLanguage, setSearchValue, setType, setSort } = filterSlice.actions;
export default filterSlice.reducer;
