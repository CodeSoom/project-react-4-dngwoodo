import Link from 'next/link';
import Image from 'next/image';
import { DiCodeigniter } from 'react-icons/di';
import { FiSearch } from 'react-icons/fi';
import { MdArrowDropDown } from 'react-icons/md';
import { SiGithub, SiGoogle } from 'react-icons/si';

import {
  Container,
  LeftMenu,
  RightMenu,
  Search,
  Login,
  User,
  DropDown,
} from './style';

type Props = {
  isShowDropDown: boolean;
  photoURL: string;
  // eslint-disable-next-line no-unused-vars
  onClickLogin: (providerName: 'GitHub' | 'Google') => void;
  onClickLogout: () => void;
  onClickShowDropMenu: () => void;
};

export const MENUS = [
  {
    title: 'Blog',
    link: '/blog',
  },
  {
    title: 'Projects',
    link: '/projects',
  },
];

export default function Header({
  isShowDropDown,
  photoURL,
  onClickLogin,
  onClickLogout,
  onClickShowDropMenu,
}: Props) {
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
          {MENUS.map(({ title, link }) => (
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
              <User onClick={onClickShowDropMenu} data-testid='user-menu'>
                <div>
                  <Image src={photoURL} layout='fill' objectFit='cover' />
                </div>
                <MdArrowDropDown />
                <DropDown isShowDropDown={isShowDropDown}>
                  <li>
                    <a href='/profile'>Profile</a>
                  </li>
                  <li>
                    <a href='/dashboard'>Dashboard</a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href='#' onClick={onClickLogout}>
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
                    onClick={() => onClickLogin('GitHub')}
                    data-testid='github-auth-button'
                  >
                    <SiGithub />
                  </button>
                </li>
                <li>
                  <button
                    type='button'
                    onClick={() => onClickLogin('Google')}
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
