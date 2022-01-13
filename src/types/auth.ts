export interface IUser {
  userEmail: string;
  password: string;
}

export interface AuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

export const AuthActions = {
  SET_AUTH: 'SET_AUTH' as const,
  SET_USER: 'SET_USER' as const,
  SET_LOADING_USER: 'SET_LOADING_USER' as const,
  SET_ERROR_USER: 'SET_ERROR_USER' as const,
};
