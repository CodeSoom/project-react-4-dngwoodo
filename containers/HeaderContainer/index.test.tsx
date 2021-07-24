import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import given from 'given2';

import DROPDOWN_MENUS from '@/components/Header/index.test';
import { logout } from '../../redux/slice';
import HeaderContainer from './HeaderContainer';

jest.mock('react-redux');
jest.mock('../../services/auth-service');

describe('HeaderContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);

    (useSelector as jest.Mock).mockImplementation((selector) =>
      selector({ user: { photoURL: given.photoURL } })
    );
  });

  context('when logged in', () => {
    beforeEach(() => {
      given('photoURL', () => '/images/posts/img1.jpg');
    });

    it("listens 'Log Out' click event", () => {
      const { getByTestId, getByRole } = render(<HeaderContainer />);

      fireEvent.click(getByTestId('user-menu'));
      fireEvent.click(getByRole('link', { name: 'Log Out' }));

      expect(dispatch).toBeCalledWith(logout());
    });

    it("listens 'user-menu' click event", () => {
      const { getByTestId, getByRole } = render(<HeaderContainer />);

      fireEvent.click(getByTestId('user-menu'));

      DROPDOWN_MENUS.forEach((link) => {
        expect(getByRole('link', { name: link })).toBeInTheDocument();
      });

      // TODO: useEffect 부분을 어떻게 테스트 해야 될지 모르겠음. document.addEventListener('click', handleClickCloseDropDownMenu);
      // fireEvent.click(getByTestId('user-menu'));

      // DROPDOWN_MENUS.forEach((link) => {
      //   expect(getByRole('link', { name: link })).not.toBeInTheDocument();
      // });
    });
  });

  context('when logged out', () => {
    it("listens 'auth login button' click event", () => {
      const { getByTestId } = render(<HeaderContainer />);

      fireEvent.click(getByTestId('github-auth-button'));
      fireEvent.click(getByTestId('google-auth-button'));

      expect(dispatch).toBeCalled();
    });
  });
});
