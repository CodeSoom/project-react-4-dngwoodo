/* eslint-disable no-unused-vars */
import Image from 'next/image';
import { BsFillPersonFill, BsLockFill } from 'react-icons/bs';
import LoginInputControl from '../LoginInputControl';

import { Container, ImageContainer, Button, Links } from './style';

type Props = {
  email: string;
  password: string;
  onChangeEmailInput: (newEmail: string) => void;
  onChangePasswordInput: (newPassword: string) => void;
  isEmailInputFocus: boolean;
  isPasswordInputFocus: boolean;
  onFocusEmailInput: (isFocus: boolean) => void;
  onFocusPasswordInput: (isFocus: boolean) => void;
  onClickChangeLoginFormMode: (
    newMode: 'login' | 'sign-up' | 'forgot-password'
  ) => void;
};

export default function LocalLoginForm({
  email,
  password,
  onChangeEmailInput,
  onChangePasswordInput,
  isEmailInputFocus,
  isPasswordInputFocus,
  onFocusEmailInput,
  onFocusPasswordInput,
  onClickChangeLoginFormMode,
}: Props) {
  return (
    <Container>
      <ImageContainer>
        <Image
          src='/images/avatars/avatar.svg'
          alt='avatar'
          layout='fill'
          objectFit='cover'
        />
      </ImageContainer>
      <h2>Welcome</h2>
      <LoginInputControl
        isInputControlFocus={isEmailInputFocus}
        onFocus={onFocusEmailInput}
        value={email}
        onChange={onChangeEmailInput}
        InputIcon={BsFillPersonFill}
        inputTitle='Email'
      />
      <LoginInputControl
        isInputControlFocus={isPasswordInputFocus}
        onFocus={onFocusPasswordInput}
        value={password}
        onChange={onChangePasswordInput}
        InputIcon={BsLockFill}
        inputTitle='Password'
      />
      <Button type='button'>Login</Button>
      <Links>
        <li>
          <button
            type='button'
            onClick={() => onClickChangeLoginFormMode('sign-up')}
          >
            sign up
          </button>
        </li>
        <li>
          <button
            type='button'
            onClick={() => onClickChangeLoginFormMode('forgot-password')}
          >
            forgot password?
          </button>
        </li>
      </Links>
    </Container>
  );
}
