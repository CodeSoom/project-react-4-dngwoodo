import { Dispatch } from 'redux';

import { authServiceLogin, persistAuthService } from '@/services/auth-service';
import { setUserEmail, setUserPhotoURL } from './slices/userSlice';

export function requestLogin(providerName: 'GitHub' | 'Google') {
  return async (dispatch: Dispatch) => {
    // TODO: data의 타입을 재정의 해줘야 됩니다.
    const data: any = await authServiceLogin(providerName);

    persistAuthService();

    dispatch(setUserEmail(data.user?.email));
    dispatch(setUserPhotoURL(data.user?.photoURL));
  };
}

export default {};
