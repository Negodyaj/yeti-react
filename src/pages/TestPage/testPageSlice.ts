import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TestPageState {
  balance: number;
  name: string;
  lastName: string;
}

const initialState: TestPageState = {
  balance: 1000,
  name: '',
  lastName: '',
};

interface LoadUserPayload {
  name: string;
  lastName: string;
}

export const testPageSlice = createSlice({
  name: 'testPage',
  initialState: initialState,
  reducers: {
    increase: (state) => {
      state.balance += 10;
    },
    decrease: (state) => {
      state.balance -= 10;
    },
    loadUser: (state, action: PayloadAction<LoadUserPayload>) => {
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
    },
  },
});

// each case under reducers becomes an action
export const { increase, decrease, loadUser } = testPageSlice.actions;

export const testPageReducer = testPageSlice.reducer;
