import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },

  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
  selectNameFilter(state) {
    return state.name;
  },
});

export const selectNameFilter = (state) => {
  return state.name;
};

export const { changeFilter } = filtersSlice.actions;
// export const { selectNameFilter } = filtersSlice.selectors;
export const filtersReducer = filtersSlice.reducer;
