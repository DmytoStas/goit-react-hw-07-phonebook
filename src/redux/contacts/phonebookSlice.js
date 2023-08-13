import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPhonebook,
  addContact,
  deleteContact,
} from 'redux/phonebookOperations';
import { initialContacts } from '../initialState';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: initialContacts,
  extraReducers: {
    [fetchPhonebook.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
      state.isLoading = false;
    },
    [fetchPhonebook.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchPhonebook.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts.push(payload);
      state.isLoading = false;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== payload.id
      );
      state.isLoading = false;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { addContacts, removeContact } = phonebookSlice.actions;

export default phonebookSlice.reducer;
