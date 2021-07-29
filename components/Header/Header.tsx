import Link from 'next/link';
import Image from 'next/image';
import { DiCodeigniter } from 'react-icons/di';
import { FiSearch } from 'react-icons/fi';
import { MdArrowDropDown } from 'react-icons/md';

import LoginFormContainer from '@/containers/LoginFormContainer';
import {
  Container,
  LeftMenu,
  RightMenu,
  Search,
  Login,
  User,
  DropDown,
} from './style';
import Portal from '../Portal';
import Modal from '../Modal';

type Props = {
  uid: string;
  photoURL: string;
  isShowDropDown: boolean;
  isShowModal: boolean;
  mode: 'login' | 'sign-up' | 'forgot-password';
  onClickLogout: () => void;
  onClickShowDropMenu: () => void;
  onClickShowModal: () => void;
  onClickHideModal: () => void;
  // eslint-disable-next-line no-unused-vars
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

function Form({ mode }: { mode: 'login' | 'sign-up' | 'forgot-password' }) {
  if (mode === 'login') {
    return <LoginFormContainer />;
  }

  if (mode === 'sign-up') {
    return <div>signup</div>;
  }

  if (mode === 'forgot-password') {
    return <div>forgot-password</div>;
  }

  return null;
}

export default function Header({
  uid,
  photoURL,
  isShowDropDown,
  isShowModal,
  mode,
  onClickLogout,
  onClickShowDropMenu,
  onClickShowModal,
  onClickHideModal,
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
              <button type='button' onClick={onClickShowModal}>
                Login
              </button>
            )}
          </Login>
        </RightMenu>
        {!uid && isShowModal && (
          <Portal>
            <Modal onClickHideModal={onClickHideModal}>
              <Form mode={mode} />
            </Modal>
          </Portal>
        )}
      </div>
    </Container>
  );
}
