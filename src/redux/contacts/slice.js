import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { fetchContacts, addContact, deleteContact } from './operations';

const onPending = state => {
  state.isLoading = true;
};

const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload.trim();
    },
  },
  extraReducers: {
    [fetchContacts.pending]: onPending,
    [addContact.pending]: onPending,
    [deleteContact.pending]: onPending,
    [fetchContacts.rejected]: onRejected,
    [addContact.rejected]: onRejected,
    [deleteContact.rejected]: onRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [logOut.fulfilled](state) {
      state.isLoading = false;
      state.error = null;
      state.items = [];
    },
  },
});

export const { filterContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
