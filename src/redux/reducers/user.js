import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  userRepo: []
};

export const userSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setUserRepo: (state, action) => {
      state.userRepo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo, setUserRepo } = userSlice.actions;

export default userSlice.reducer;
