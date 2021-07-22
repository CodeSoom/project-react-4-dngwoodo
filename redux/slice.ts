import { createSlice } from '@reduxjs/toolkit';

export type User = {
  id: string;
};

const initialState: User = {
  id: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
