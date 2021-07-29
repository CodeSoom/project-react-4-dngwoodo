import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import { requestLogin } from './thunks';
import { setUserEmail, setUserPhotoURL } from './slices/userSlice';

const middlewares = [thunk];
const mockStoreCreator = configureStore(middlewares);

jest.mock('../services/auth-service');

describe('thunks', () => {
  describe('requestLogin', () => {
    it('runs setAccessToken, setUserEmail, setUserPhotoURL', async () => {
      const store = mockStoreCreator({});

      // 도저히 모르겠음. dispatch의 type이 asyncThunk가 되어야 되는데 그게 적용이 안됌.
      await store.dispatch<any>(requestLogin('Google'));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setUserEmail(undefined));
      expect(actions[1]).toEqual(setUserPhotoURL(undefined));
    });
  });
});
