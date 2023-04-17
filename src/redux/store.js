import { configureStore } from '@reduxjs/toolkit';
import filterReducers from './filterSlice';
import { contactsApi } from './contactsApi';

export const store = configureStore({
  reducer: {
    filter: filterReducers,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
