import { createSlice } from "@reduxjs/toolkit";

const habitsSlice = createSlice({
  name: "habits",
  initialState: {
    habits: []
  },
  reducers: {
    setHabits: (state, action) => {
      state.habits = action.payload;
    }
  }
});

export const { setHabits } = habitsSlice.actions;
export default habitsSlice.reducer;