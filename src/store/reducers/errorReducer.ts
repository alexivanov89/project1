import { ErrorAction, ErrorState } from '../../types/error';
import { ItemReducer } from './itemReducer';

const initialState: ErrorState = {
  value: '',
};

export const errorReducer: ItemReducer<ErrorState> = (state = initialState, action) => {
  switch (action.type) {
    case ErrorAction.SET_ERROR:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
