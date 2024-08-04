// src/redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from '../redux/tasks/taskSlice';
import filtersReducer from '../redux/filters/filterSlice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

export default rootReducer;