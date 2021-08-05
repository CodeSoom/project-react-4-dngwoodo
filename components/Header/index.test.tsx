import MENUS from '@/fixtures/menus';
import { fireEvent, render } from '@testing-library/react';
import given from 'given2';

import Header from './Header';

jest.mock('@/services/auth-service');

describe('Header', () => {
  const handleClickLogout = jest.fn();
  const handleClickShowDropMenu = jest.fn();
  const handleClickShowModal = jest.fn();
  const handleClickHideModal = jest.fn();

  function renderHeader() {
    return render(
      <Header
        uid={given.uid}
        photoURL={given.photoURL}
        isShowDropDown={false}
        isShowModal={false}
        onClickLogout={handleClickLogout}
        onClickShowDropMenu={handleClickShowDropMenu}
        onClickShowModal={handleClickShowModal}
        onClickHideModal={handleClickHideModal}
      />
    );
  }

  it('renders logo, menu', () => {
    const { getByTestId, getByRole } = renderHeader();

    expect(getByTestId('logo')).toBeInTheDocument();

    MENUS.forEach(({ title }) => {
      expect(getByRole('link', { name: title }));
    });
  });

  context('when logged in', () => {
    beforeEach(() => {
      given('uid', () => 'xxxx');
      given('photoURL', () => '/images/photos/xxx.png');
    });

    it('renders avatar, dropdown-menu', () => {
      const { getByText } = renderHeader();

      expect(document.querySelector('img[alt="user"]')).toBeInTheDocument(); // data-testid를 써도 상관X
      ['Profile', 'Dashboard', 'Log Out'].forEach((menu) => {
        expect(getByText(menu)).toBeInTheDocument();
      });
    });

    it("listens 'user-menu' click event", () => {
      const { getByTestId } = renderHeader();

      fireEvent.click(getByTestId('user-menu'));

      expect(handleClickShowDropMenu).toBeCalled();
    });

    it("listens 'Log Out' click event", () => {
      const { getByText } = renderHeader();

      fireEvent.click(getByText('Log Out'));

      expect(handleClickLogout).toBeCalled();
    });
  });

  context('when logged out', () => {
    beforeEach(() => {
      given('uid', () => '');
      given('photoURL', () => '');
    });

    it("renders 'Login' button", () => {
      const { getByRole } = renderHeader();

      expect(getByRole('button', { name: 'Login' })).toBeInTheDocument();
    });

    it("listens 'Login' click event", () => {
      const { getByRole } = renderHeader();

      fireEvent.click(getByRole('button', { name: 'Login' }));

      expect(handleClickShowModal).toBeCalled();
    });
  });
});
