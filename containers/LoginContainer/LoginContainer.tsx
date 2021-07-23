import { MouseEvent } from 'react';

import useAppDispatch from '@/hooks/useAppDispatch';
import { requestLogin } from '../../redux/slice';

export default function LoginContainer() {
  const dispatch = useAppDispatch();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    dispatch(
      requestLogin(event.currentTarget?.textContent as 'GitHub' | 'Google')
    );
  }

  return (
    <div style={{ paddingTop: '150px' }}>
      <h1>Login</h1>
      <ul>
        <li>
          <button type='button' onClick={handleClick}>
            Google
          </button>
        </li>
        <li>
          <button type='button'>Github</button>
        </li>
      </ul>
    </div>
  );
}
