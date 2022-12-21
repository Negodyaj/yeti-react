import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserResponse } from '../models/UserResponse';

interface CurrentUserState {
  userInfo?: UserResponse;
}

const initialState: CurrentUserState = {
  userInfo: undefined,
};

interface LoadUserPayload {
  user: UserResponse;
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: initialState,
  reducers: {
    logOut: (state) => {
      state.userInfo = undefined;
    },
    logIn: (state, action: PayloadAction<LoadUserPayload>) => {
      state.userInfo = action.payload.user;
    },
  },
});

export const { logIn, logOut } = currentUserSlice.actions;

export const currentUserReducer = currentUserSlice.reducer;
