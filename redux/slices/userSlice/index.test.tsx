import reducer, { setUserEmail, setUserPhotoURL, logout, User } from '.';

describe('userReducer', () => {
  describe('setUserId', () => {
    it("changes user's id", () => {
      const initialState: User = {
        uid: '',
        email: '',
        photoURL: '',
      };

      const state = reducer(initialState, setUserEmail('xxxx'));

      expect(state.email).toBe('xxxx');
    });
  });

  describe('setUserEmail', () => {
    it("changes user's email", () => {
      const initialState: User = {
        uid: '',
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
        uid: '',
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
        uid: 'xxxx',
        email: 'xxx@gmail.com',
        photoURL: 'xxxx',
      };

      const state = reducer(initialState, logout());

      expect(state).toEqual({
        uid: '',
        email: '',
        photoURL: '',
      });
    });
  });
});
