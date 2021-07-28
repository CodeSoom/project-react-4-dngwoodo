import { ReactChild } from 'react';

import HeaderContainer from '@/containers/HeaderContainer';

export default function Layout({ children }: { children: ReactChild }) {
  return (
    <>
      <HeaderContainer />
      {children}
    </>
  );
}
