import { createSlice } from '@reduxjs/toolkit';
import { initialFilter } from 'redux/initialState';

export const filterSlice = createSlice({
  name: 'contactsFilter',
  initialState: initialFilter,
  reducers: {
    toggleFilter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { toggleFilter } = filterSlice.actions;

export default filterSlice.reducer;
