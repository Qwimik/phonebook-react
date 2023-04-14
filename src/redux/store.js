import { configureStore } from '@reduxjs/toolkit';
import contactsReducers from './reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },
});
