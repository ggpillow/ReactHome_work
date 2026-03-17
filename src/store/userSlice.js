import { createSlice } from "@reduxjs/toolkit";

const loadName = () => {
  try {
    return localStorage.getItem("userName") || "";
  } catch {
    return "";
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: loadName(),
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
      localStorage.setItem("userName", action.payload);
    },
  },
});

export const { setName } = userSlice.actions;
export default userSlice.reducer;