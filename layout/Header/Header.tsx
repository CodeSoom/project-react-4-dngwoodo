import { useState } from 'react';
import { DiCodeigniter } from 'react-icons/di';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

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
  const [user, setUser] = useState<boolean>(false);

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
            {/* TODO: 로그인 후 user정보를 받아서 넣어줘야 함 */}
            {user ? (
              <>
                <div>
                  <Link href='/'>
                    <a href='/replace'>
                      <Image
                        src='/images/posts/img1.jpg'
                        layout='fill'
                        objectFit='cover'
                      />
                    </a>
                  </Link>
                </div>
                <div>Admin</div>
              </>
            ) : (
              <Link href='/'>
                <a
                  href='replace'
                  onClick={() => {
                    setUser(true);
                  }}
                >
                  Login
                </a>
              </Link>
            )}
          </User>
        </RightMenu>
      </div>
    </Container>
  );
}
