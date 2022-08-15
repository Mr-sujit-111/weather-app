import { configureStore } from '@reduxjs/toolkit';
import weatherDataReducer from './weathrDataSlice'

export const store = configureStore({
  reducer: {
    weatherData: weatherDataReducer
  },
});
