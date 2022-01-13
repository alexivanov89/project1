import axios from 'axios';
import { AuthActions, AuthState, IUser } from '../../types/auth';
import { setAuth, setError, setLoading, setUser } from '../action/creator';
import { ItemReducer } from './itemReducer';

const initialState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: '',
};

export const authReducer: ItemReducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActions.SET_AUTH:
      return { ...state, isAuth: action.payload, isLoading: false };
    case AuthActions.SET_USER:
      return { ...state, user: action.payload, isLoading: false };
    case AuthActions.SET_LOADING_USER:
      return { ...state, isLoading: action.payload };
    case AuthActions.SET_ERROR_USER:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export const login = (userEmail: string, password: string) => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.get<IUser[]>('./users.json');
    const mockUser = response.data.find(
      (user) => user.userEmail === userEmail && user.password === password,
    );

    if (mockUser) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('userEmail', mockUser.userEmail);
      dispatch(setAuth(true));
      dispatch(setUser(mockUser));
    } else {
      dispatch(setError('Некорректный логин или пароль'));
    }

    dispatch(setLoading(false));
  } catch (e) {
    dispatch(setError('Ошибка при логине'));
  }
};
