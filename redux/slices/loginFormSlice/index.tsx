import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LoginFormMode = {
  mode: 'login' | 'sign-up' | 'forgot-password';
};

const initialState: LoginFormMode = {
  mode: 'login',
};

const { reducer, actions } = createSlice({
  name: 'login-form-mode',
  initialState,
  reducers: {
    setLoginFormMode(
      state,
      { payload: mode }: PayloadAction<'login' | 'sign-up' | 'forgot-password'>
    ) {
      return {
        ...state,
        mode,
      };
    },
  },
});

export default reducer;
export const { setLoginFormMode } = actions;
