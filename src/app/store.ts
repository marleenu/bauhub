import { configureStore } from '@reduxjs/toolkit';
import fileReducer from '../slices/fileSlice';

export const store = configureStore({
  reducer: {
    file: fileReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
