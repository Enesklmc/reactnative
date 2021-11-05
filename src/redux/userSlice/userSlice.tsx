import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface UserState {
  loggedIn: true | false;
  email: string;
  password: string;
  locale?: string;
}

const initialState: UserState = {
  loggedIn: false,
  email: '',
  password: '',
  locale: 'TR',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.loggedIn = action.payload.loggedIn;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    setLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload;
    },
  },
});

export const {setUser, setLocale} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
export const selectLocale = (state: RootState) => state.user.locale;

export default userSlice.reducer;
