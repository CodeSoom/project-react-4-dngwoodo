import { createSlice } from '@reduxjs/toolkit';

export type User = {
  email: string;
  photoURL: string;
};

const initialState: User = {
  email: '',
  photoURL: '',
};

export const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
export const { setUserEmail, setUserPhotoURL } = actions;
