import reducer, { LoginFormMode, setLoginFormMode } from '.';

describe('loginFormSlice', () => {
  describe('setLoginFormMode', () => {
    it('changes mode', () => {
      const initialState: LoginFormMode = {
        mode: 'login',
      };

      const state = reducer(initialState, setLoginFormMode('sign-up'));

      expect(state.mode).toBe('sign-up');
    });
  });
});
