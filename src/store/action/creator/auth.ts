import { AuthActions, IUser } from '../../../types/auth';

export const setAuth = (auth: boolean) => ({
  type: AuthActions.SET_AUTH,
  payload: auth,
});

export const setUser = (user: IUser) => ({
  type: AuthActions.SET_USER,
  payload: user,
});

export const setLoading = (loading: boolean) => ({
  type: AuthActions.SET_LOADING_USER,
  payload: loading,
});

export const setError = (error: string) => ({
  type: AuthActions.SET_ERROR_USER,
  payload: error,
});
