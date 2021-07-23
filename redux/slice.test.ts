import reducer, { setUserEmail, setUserPhotoURL, logout, User } from './slice';

describe('userReducer', () => {
  describe('setUserEmail', () => {
    it("changes user's email", () => {
      const initialState: User = {
        email: '',
        photoURL: '',
      };

      const state = reducer(initialState, setUserEmail('xxxx@gmail.com'));

      expect(state.email).toBe('xxxx@gmail.com');
    });
  });

  describe('setUserPhotoURL', () => {
    it("changes user's photo url", () => {
      const initialState: User = {
        email: '',
        photoURL: '',
      };

      const state = reducer(initialState, setUserPhotoURL('xxxx'));

      expect(state.photoURL).toBe('xxxx');
    });
  });

  describe('logout', () => {
    it("initializes user's state", () => {
      const initialState: User = {
        email: 'xxx@gmail.com',
        photoURL: 'xxxx',
      };

      const state = reducer(initialState, logout());

      expect(state).toEqual({
        email: '',
        photoURL: '',
      });
    });
  });
});
