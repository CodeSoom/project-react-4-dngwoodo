import { Dispatch } from 'redux';

import { authServiceLogin } from '@/services/auth-service';
import { setAccessToken, setUserEmail, setUserPhotoURL } from './slice';

export function requestLogin(providerName: 'GitHub' | 'Google') {
  return async (dispatch: Dispatch) => {
    const data = await authServiceLogin(providerName);

    dispatch(setAccessToken(data.credential?.accessToken));
    dispatch(setUserEmail(data.user?.email));
    dispatch(setUserPhotoURL(data.user?.photoURL));
  };
}

export default {};
