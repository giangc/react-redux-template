import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import State from './types/State'

export const OVERDRAFT_ERROR = "insufficent balance"

const initialState: State = {
  balance: 0,
  error: undefined
};

export const financialPocketSlice = createSlice({
  name: 'financialPocket',
  initialState,
  reducers: {
    topupBalance: (state, action: PayloadAction<number>) => {
      state.balance += action.payload
      delete state.error
    },

    withdrawBalance: (state, action: PayloadAction<number>) => {
      if (state.balance < action.payload) {
        state.error = OVERDRAFT_ERROR
      }
      else {
        state.balance -= action.payload
      }
    },

    error: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  },
});

export const { topupBalance, withdrawBalance } = financialPocketSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default financialPocketSlice.reducer;
