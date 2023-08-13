import { combineReducers } from '@reduxjs/toolkit';

import phonebookReducer from './contacts/phonebookSlice';
import filterReducer from './filter/filterSlice';

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
  filter: filterReducer,
});

export default rootReducer;
