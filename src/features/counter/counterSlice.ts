import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

/**
 * State definition
 */
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

/**
 * createSlice => Reducer => action
 */
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: number): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

/**
 * Selectors
 * @param state 
 */
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
