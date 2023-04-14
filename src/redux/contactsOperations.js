import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await API.fetchAllContacts();
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async data => {
    await API.addContact(data);
    const contacts = await API.fetchAllContacts();
    return contacts;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await API.deleteContactById(contactId);
    const contacts = await API.fetchAllContacts();
    return contacts;
  }
);
