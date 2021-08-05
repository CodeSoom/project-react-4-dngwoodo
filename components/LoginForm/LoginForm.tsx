import styled from '@emotion/styled';
import LocalLoginForm from '../LocalLoginForm';
import SocialLoginForm from '../SocialLoginForm';

/* eslint-disable no-unused-vars */
type Props = {
  email: string;
  password: string;
  onChangeEmailInput: (newEmail: string) => void;
  onChangePasswordInput: (newPassword: string) => void;
  isEmailInputFocus: boolean;
  isPasswordInputFocus: boolean;
  onFocusEmailInput: (isFocus: boolean) => void;
  onFocusPasswordInput: (isFocus: boolean) => void;
  onClickLogin: (providerName: 'GitHub' | 'Google') => void;
  onClickChangeLoginFormMode: (
    newMode: 'login' | 'sign-up' | 'forgot-password'
  ) => void;
};

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '600px',
});

export default function LoginForm({
  email,
  password,
  onChangeEmailInput,
  onChangePasswordInput,
  isEmailInputFocus,
  isPasswordInputFocus,
  onFocusEmailInput,
  onFocusPasswordInput,
  onClickLogin,
  onClickChangeLoginFormMode,
}: Props) {
  return (
    <Container>
      <LocalLoginForm
        email={email}
        password={password}
        onChangeEmailInput={onChangeEmailInput}
        onChangePasswordInput={onChangePasswordInput}
        isEmailInputFocus={isEmailInputFocus}
        isPasswordInputFocus={isPasswordInputFocus}
        onFocusEmailInput={onFocusEmailInput}
        onFocusPasswordInput={onFocusPasswordInput}
        onClickChangeLoginFormMode={onClickChangeLoginFormMode}
      />
      <SocialLoginForm onClickLogin={onClickLogin} />
    </Container>
  );
}
