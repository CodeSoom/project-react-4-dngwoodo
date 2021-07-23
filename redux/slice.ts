import { authServiceLogin } from '@/services/auth-service';
import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

export type User = {
  accessToken: string;
  email: string;
  photoURL: string;
};

const initialState: User = {
  accessToken: '',
  email: '',
  photoURL: '',
};

export const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken(state, { payload: accessToken }) {
      return {
        ...state,
        accessToken,
      };
    },
    setUserEmail(state, { payload: email }) {
      return {
        ...state,
        email,
      };
    },
    setUserPhotoURL(state, { payload: photoURL }) {
      return {
        ...state,
        photoURL,
      };
    },
  },
});

export default reducer;
export const { setAccessToken, setUserEmail, setUserPhotoURL } = actions;

export function requestLogin(providerName: 'GitHub' | 'Google') {
  return async (dispatch: Dispatch) => {
    const data = await authServiceLogin(providerName);

    dispatch(setAccessToken(data.credential?.accessToken));
    dispatch(setUserEmail(data.user?.email));
    dispatch(setUserPhotoURL(data.user?.photoURL));
  };
}
