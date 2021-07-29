import { createSlice } from '@reduxjs/toolkit';

export type User = {
  uid: string;
  email: string;
  photoURL: string;
};

const initialState: User = {
  uid: '',
  email: '',
  photoURL: '',
};

export const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId(state, { payload: uid }) {
      return {
        ...state,
        uid,
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
    logout() {
      return initialState;
    },
  },
});

export default reducer;
export const { setUserId, setUserEmail, setUserPhotoURL, logout } = actions;
