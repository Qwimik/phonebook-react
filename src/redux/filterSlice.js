import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload.trim();
    },
  },
});

export const { filterContact } = filterSlice.actions;

export const getFilter = state => state.filter.filter;

export default filterSlice.reducer;
