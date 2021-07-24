import { SiGithub, SiGoogle } from 'react-icons/si';
import { DiCodeigniter } from 'react-icons/di';
import { FiSearch } from 'react-icons/fi';
import { MdArrowDropDown } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';

import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';
import {
  authServiceLogout,
  authServiceOnAuthChange,
} from '@/services/auth-service';
import { logout, setUserEmail, setUserPhotoURL } from '../../redux/slice';
import { requestLogin } from '../../redux/thunks';
import {
  Container,
  LeftMenu,
  RightMenu,
  Search,
  Login,
  User,
  DropDown,
} from './style';

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
  const { photoURL } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [isShow, setIsShow] = useState<boolean>(false);

  function handleClick(providerName: 'GitHub' | 'Google') {
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
      return;
    }

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
          <Login>
            {photoURL ? (
              <User onClick={handleClickShowDropMenu}>
                <div>
                  <Image src={photoURL} layout='fill' objectFit='cover' />
                </div>
                <MdArrowDropDown />
                <DropDown isShow={isShow}>
                  <li>
                    <a href='/profile' onClick={handleClickLogout}>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href='/dashboard' onClick={handleClickLogout}>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href='#' onClick={handleClickLogout}>
                      Log Out
                    </a>
                  </li>
                </DropDown>
              </User>
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
          </Login>
        </RightMenu>
      </div>
    </Container>
  );
}
