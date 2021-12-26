import { ErrorAction } from '../../../types/error';

export const SetError = (value: string) => ({
  type: ErrorAction.SET_ERROR,
  payload: value,
});
