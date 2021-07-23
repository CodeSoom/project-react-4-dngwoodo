import reducer, {
  setAccessToken,
  setUserEmail,
  setUserPhotoURL,
  User,
} from './slice';

describe('userReducer', () => {
  describe('setAccessToken', () => {
    it('changes access token', () => {
      const initialState: User = {
        accessToken: '',
        email: '',
        photoURL: '',
      };

      const state = reducer(initialState, setAccessToken('TOKEN'));

      expect(state.accessToken).toBe('TOKEN');
    });
  });

  describe('setUserEmail', () => {
    it("changes user's email", () => {
      const initialState: User = {
        accessToken: '',
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
        accessToken: '',
        email: '',
        photoURL: '',
      };

      const state = reducer(initialState, setUserPhotoURL('xxxx'));

      expect(state.photoURL).toBe('xxxx');
    });
  });
});
