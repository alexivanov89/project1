export interface ErrorState {
  value: string;
}

export const ErrorAction = {
  SET_ERROR: 'SET_ERROR' as const,
};
