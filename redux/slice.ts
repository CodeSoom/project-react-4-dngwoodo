import { createSlice } from '@reduxjs/toolkit';

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
