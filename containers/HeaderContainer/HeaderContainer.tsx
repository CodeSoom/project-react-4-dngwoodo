import { useEffect, useState, useCallback } from 'react';

import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';
import {
  authServiceLogout,
  authServiceOnAuthChange,
} from '@/services/auth-service';
import Header from '@/components/Header';
import {
  setUserId,
  setUserEmail,
  setUserPhotoURL,
  logout,
} from '../../redux/slices/userSlice';

export default function HeaderContainer() {
  const { mode } = useAppSelector((state) => state.loginForm);
  const { uid, photoURL } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [isShow, setIsShow] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  function handleClickLogout() {
    authServiceLogout();

    setIsShowModal(false);

    dispatch(logout());
  }

  function handleClickShowModal() {
    setIsShowModal(true);
  }

  function handleClickHideModal() {
    setIsShowModal(false);
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
        dispatch(setUserId(user.uid));
        dispatch(setUserEmail(user.email));
        dispatch(setUserPhotoURL(user.photoURL));
      }
    });
  }, [dispatch]);

  return (
    <Header
      mode={mode}
      uid={uid}
      photoURL={photoURL}
      isShowDropDown={isShow}
      isShowModal={isShowModal}
      onClickLogout={handleClickLogout}
      onClickShowDropMenu={handleClickShowDropMenu}
      onClickShowModal={handleClickShowModal}
      onClickHideModal={handleClickHideModal}
    />
  );
}
