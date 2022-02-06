import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorState } from '../../types/error';
import { RootState } from '../index';

const initialState: ErrorState = {
  value: '',
};

const ErrorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    clearError: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setError, clearError } = ErrorSlice.actions;

export const errorReducer = ErrorSlice.reducer;
export const selectError = (state: RootState) => state.error.value;
