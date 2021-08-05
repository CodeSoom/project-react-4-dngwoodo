import { FcGoogle } from 'react-icons/fc';
import { VscGithubInverted } from 'react-icons/vsc';

import { Container } from './style';

type Props = {
  // eslint-disable-next-line no-unused-vars
  onClickLogin: (providerName: 'GitHub' | 'Google') => void;
};

export default function SocialLoginForm({ onClickLogin }: Props) {
  function handleClickAuthLogin(providerName: 'GitHub' | 'Google') {
    return () => onClickLogin(providerName);
  }

  return (
    <Container>
      <h3>
        <span>or sign in with</span>
      </h3>
      <ul>
        <li>
          <button type='button' onClick={handleClickAuthLogin('GitHub')}>
            <VscGithubInverted />
          </button>
        </li>
        <li>
          <button type='button' onClick={handleClickAuthLogin('Google')}>
            <FcGoogle />
          </button>
        </li>
      </ul>
    </Container>
  );
}
