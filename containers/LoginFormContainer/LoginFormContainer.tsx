import { useState } from 'react';

import LoginForm from '@/components/LoginForm/LoginForm';
import useAppDispatch from '@/hooks/useAppDispatch';
import { setLoginFormMode } from '../../redux/slices/loginFormSlice';
import { requestLogin } from '../../redux/thunks';

export default function LoginFormContainer() {
  const dispatch = useAppDispatch();
  const [isEmailInputFocus, setIsEmailInputFocus] = useState<boolean>(false);
  const [isPasswordInputFocus, setIsPasswordInputFocus] =
    useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleChangeEmailInput(newEmail: string) {
    setEmail(newEmail);
  }

  function handleChangePasswordInput(newPassword: string) {
    setPassword(newPassword);
  }

  function handleFocusEmailInput(isFocus: boolean) {
    setIsEmailInputFocus(isFocus);
  }

  function handleFocusPasswordInput(isFocus: boolean) {
    setIsPasswordInputFocus(isFocus);
  }

  function handleClickLogin(providerName: 'GitHub' | 'Google') {
    dispatch(requestLogin(providerName));
  }

  function handleClickChangeLoginFormMode(
    newMode: 'login' | 'sign-up' | 'forgot-password'
  ) {
    dispatch(setLoginFormMode(newMode));
  }

  return (
    <LoginForm
      email={email}
      password={password}
      onChangeEmailInput={handleChangeEmailInput}
      onChangePasswordInput={handleChangePasswordInput}
      isEmailInputFocus={isEmailInputFocus}
      isPasswordInputFocus={isPasswordInputFocus}
      onFocusEmailInput={handleFocusEmailInput}
      onFocusPasswordInput={handleFocusPasswordInput}
      onClickLogin={handleClickLogin}
      onClickChangeLoginFormMode={handleClickChangeLoginFormMode}
    />
  );
}
