import { searchRobots, requestRobots } from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  searchRobots: searchRobots,
  requestRobots: requestRobots
}

const store = configureStore({
  reducer: rootReducer,
})

export default store;