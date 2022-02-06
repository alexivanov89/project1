import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from '../index';
import { IUser } from '../../types/auth';

const initialState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  errorAuth: '',
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
      state.isLoading = false;
      state.errorAuth = '';
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.errorAuth = '';
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      state.errorAuth = '';
    },
    setErrorAuth: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errorAuth = action.payload;
    },
  },
});

export const login = (userEmail: string, password: string) => async (dispatch: AppDispatch) => {
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
      dispatch(setErrorAuth('Некорректный логин или пароль'));
    }

    dispatch(setLoading(false));
  } catch (e) {
    dispatch(setErrorAuth('Ошибка при логине'));
  }
};

export const { setAuth, setUser, setLoading, setErrorAuth } = AuthSlice.actions;
export const authReducer = AuthSlice.reducer;
