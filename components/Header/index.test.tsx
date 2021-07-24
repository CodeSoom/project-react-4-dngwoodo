import { fireEvent, render } from '@testing-library/react';

import Header, { MENUS } from '@/components/Header/Header';

const DROPDOWN_MENUS = ['Profile', 'Dashboard', 'Log Out'];

export default DROPDOWN_MENUS;

describe('Header', () => {
  const handleClickLogin = jest.fn();
  const handleClickLogout = jest.fn();
  const handleClickShowDropMenu = jest.fn();

  function renderHeader({
    isShowDropDown,
    photoURL,
  }: {
    isShowDropDown: boolean;
    photoURL: string;
  }) {
    return render(
      <Header
        isShowDropDown={isShowDropDown}
        photoURL={photoURL}
        onClickLogin={handleClickLogin}
        onClickLogout={handleClickLogout}
        onClickShowDropMenu={handleClickShowDropMenu}
      />
    );
  }

  it('renders menu, input', () => {
    const { getByRole, getByPlaceholderText } = renderHeader({
      photoURL: '',
      isShowDropDown: false,
    });

    MENUS.forEach(({ title }) => {
      expect(getByRole('link', { name: title })).toBeInTheDocument();
    });
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  context('when logged in', () => {
    it('renders avatar, dropdown menu', () => {
      const { container, getByRole } = renderHeader({
        photoURL: '/images/posts/img1.png',
        isShowDropDown: true,
      });

      expect(container).toContainHTML('<img');
      DROPDOWN_MENUS.forEach((link) => {
        expect(getByRole('link', { name: link })).toBeInTheDocument();
      });
    });

    it("listens 'Log Out' click event", () => {
      const { getByRole } = renderHeader({
        photoURL: '/images/posts/img1.png',
        isShowDropDown: true,
      });

      fireEvent.click(getByRole('link', { name: 'Log Out' }));

      expect(handleClickLogout).toBeCalled();
    });
  });

  context('when logged out', () => {
    it('renders github, google auth login button', () => {
      const { getByTestId } = renderHeader({
        photoURL: '',
        isShowDropDown: false,
      });

      expect(getByTestId('github-auth-button')).toBeInTheDocument();
      expect(getByTestId('google-auth-button')).toBeInTheDocument();
    });

    it("listens 'auth login button' click event", () => {
      const { getByTestId } = renderHeader({
        photoURL: '',
        isShowDropDown: false,
      });

      fireEvent.click(getByTestId('github-auth-button'));
      fireEvent.click(getByTestId('google-auth-button'));

      expect(handleClickLogin).toBeCalledTimes(2);
    });
  });
});
