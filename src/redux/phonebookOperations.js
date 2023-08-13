import { createAsyncThunk } from '@reduxjs/toolkit';

import * as phonebookAPI from 'api/phonebookAPI';

export const fetchPhonebook = createAsyncThunk(
  'phonebook/fetchPhonebook',
  async (_, { rejectWithValue }) => {
    try {
      const response = await phonebookAPI.fetchPhonebook();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'phonebook/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const responce = await phonebookAPI.addContact(contact);
      return responce;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      console.log(contactId);
      const responce = await phonebookAPI.deleteContact(contactId);
      return responce;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
