import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      return (state = action.payload.trim());
    },
  },
});

export const { filterContact } = filterSlice.actions;

export const getFilter = state => state.filter;
