import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null, filter: '' },
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload.trim();
    },
  },
  extraReducers: {
    //fetch
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload;
    },
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.rejected]: (_, action) => action.payload,
    //add
    [addContact.fulfilled]: (state, action) => {
      state.contacts = action.payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.rejected]: (_, action) => action.payload,
    //delete
    [deleteContact.fulfilled]: (state, action) => {
      state.contacts = action.payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.rejected]: (_, action) => action.payload,
  },
});

export const { filterContact } = contactsSlice.actions;

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

export default contactsSlice.reducer;
