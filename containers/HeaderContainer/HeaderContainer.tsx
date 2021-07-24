import { useEffect, useState, useCallback } from 'react';

import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';
import {
  authServiceLogout,
  authServiceOnAuthChange,
} from '@/services/auth-service';
import Header from '@/components/Header';
import { logout, setUserEmail, setUserPhotoURL } from '../../redux/slice';
import { requestLogin } from '../../redux/thunks';

export default function HeaderContainer() {
  const { photoURL } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [isShow, setIsShow] = useState<boolean>(false);

  function handleClickLogin(providerName: 'GitHub' | 'Google') {
    dispatch(requestLogin(providerName));
  }

  function handleClickLogout() {
    authServiceLogout();

    dispatch(logout());
  }

  const handleClickCloseDropMenu = useCallback(() => {
    setIsShow(false);
  }, []);

  const handleClickShowDropMenu = useCallback(() => {
    setIsShow(true);
  }, []);

  useEffect(() => {
    if (isShow) {
      document.addEventListener('click', handleClickCloseDropMenu);
    }

    return () =>
      document.removeEventListener('click', handleClickCloseDropMenu);
  }, [isShow, handleClickCloseDropMenu]);

  useEffect(() => {
    // user type 지정 필요. firebase.User | null
    authServiceOnAuthChange((user: any) => {
      if (user) {
        dispatch(setUserEmail(user.email));
        dispatch(setUserPhotoURL(user.photoURL));
      }
    });
  }, [dispatch]);

  return (
    <Header
      isShowDropDown={isShow}
      photoURL={photoURL}
      onClickLogin={handleClickLogin}
      onClickLogout={handleClickLogout}
      onClickShowDropMenu={handleClickShowDropMenu}
    />
  );
}
