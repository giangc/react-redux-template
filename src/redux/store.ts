import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import pocketReducer from './financepocket/index'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    financialPocket: pocketReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
