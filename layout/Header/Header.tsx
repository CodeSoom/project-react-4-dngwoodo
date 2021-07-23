import { SiGithub, SiGoogle } from 'react-icons/si';
import { DiCodeigniter } from 'react-icons/di';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';
import { authServiceOnAuthChange } from '@/services/auth-service';
import { setUserEmail, setUserPhotoURL } from '../../redux/slice';
import { requestLogin } from '../../redux/thunks';
import { Container, LeftMenu, RightMenu, Search, User } from './style';

export const menus = [
  {
    title: 'Blog',
    link: '/',
  },
  {
    title: 'Projects',
    link: '/',
  },
];

export default function Header() {
  const { email, photoURL } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const firstEmail = email?.split('@')[0];

  function handleClick(providerName: 'GitHub' | 'Google') {
    dispatch(requestLogin(providerName));
  }

  useEffect(() => {
    // user type 지정 필요. firebase.User | null
    authServiceOnAuthChange((user: any) => {
      dispatch(setUserEmail(user.email));
      dispatch(setUserPhotoURL(user.photoURL));
    });
  }, [dispatch]);

  return (
    <Container>
      <div>
        <LeftMenu>
          <Link href='/'>
            <a href='replace'>
              <DiCodeigniter />
            </a>
          </Link>
        </LeftMenu>
        <ul>
          {menus.map(({ title, link }) => (
            <li key={title}>
              <Link href={link}>
                <a href='replace'>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <RightMenu>
          <Search>
            <label htmlFor='search-checkbox'>
              <FiSearch />
            </label>
            <input type='checkbox' id='search-checkbox' />
            <input type='text' placeholder='Search' />
          </Search>
          <User>
            {email && photoURL ? (
              <>
                <div>
                  <Link href='/'>
                    <a href='/replace'>
                      <Image src={photoURL} layout='fill' objectFit='cover' />
                    </a>
                  </Link>
                </div>
                <div>{firstEmail}</div>
              </>
            ) : (
              <ul>
                <li>
                  <button
                    type='button'
                    onClick={() => handleClick('GitHub')}
                    data-testid='github-auth-button'
                  >
                    <SiGithub />
                  </button>
                </li>
                <li>
                  <button
                    type='button'
                    onClick={() => handleClick('Google')}
                    data-testid='google-auth-button'
                  >
                    <SiGoogle />
                  </button>
                </li>
              </ul>
            )}
          </User>
        </RightMenu>
      </div>
    </Container>
  );
}
